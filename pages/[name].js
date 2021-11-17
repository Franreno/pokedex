import "../lib/pokemon";
import { findEvolutionChainArray, findTypesInformation, getPokemonImages, getTypeRelations } from "../lib/pokemon";
import SingularPokeCard from "../components/singularCard";
import Navbar from "../components/navbar";

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

  let evolutionChainPokemons = [];
  await findEvolutionChainArray(evolution.chain, evolutionChainPokemons);
  const types = await findTypesInformation(pokemon.types);
  const pokemonImages = await getPokemonImages(evolutionChainPokemons); 
  
  const typeRelations = getTypeRelations(types);


  return {
    props: { types: types, evolutionChainPokemons: evolutionChainPokemons, pokemon: pokemon, pokemonImages: pokemonImages, typeRelations: typeRelations }

  }
}

const Detalhes = (props) => {

  return (
    <div>
        <Navbar isSingular={true}/>
        <SingularPokeCard props={props}/>
    </div>
  );
}

export default Detalhes;
