import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
import "../lib/pokemon";
import { findEvolutionChainArray, findTypesInformation, getPokemonImages } from "../lib/pokemon";
import SingularPokeCard from "../components/singularCard";


export async function getStaticPaths() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=898`);
  const data = await res.json();

  const paths = data.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  // console.log(params)

  let resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await resPokemon.json();

  let resSpecies = await fetch(pokemon.species.url);
  const specie = await resSpecies.json();

  let resEvolution = await fetch(specie.evolution_chain.url);
  const evolution = await resEvolution.json();

  const evolutionChainPokemons = await findEvolutionChainArray(evolution);
  const types = await findTypesInformation(pokemon.types);


  const pokemonImages = await getPokemonImages(evolutionChainPokemons); 

  return {
    props: { types: types, evolutionChainPokemons: evolutionChainPokemons, pokemon: pokemon, pokemonImages: pokemonImages }

  }



}

const Detalhes = (props) => {

  return (
    <Layout>
        <SingularPokeCard props={props}/>
    </Layout>
  );
}

export default Detalhes;
