import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
import "../lib/pokemon";
import { findEvolutionChainArray, findTypesInformation } from "../lib/pokemon";


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

  return {
    props: { types: types, evolutionChainPokemons: evolutionChainPokemons, pokemon: pokemon }

  }



}

const Detalhes = (props) => {
  return (
    <Layout>
      <div>
        <h1>{props.pokemon.name}</h1>
        <p>Tipo: {props.types.map(type => {
          return (type.name + ' ');
        })}</p>
        <p>Peso: {props.pokemon.weight}</p>
        <p>Altura: {props.pokemon.height}</p>
        <Image src={props.pokemon.sprites.front_default} width={200} height={200}></Image>
        <p>Evoluções: </p>
        {props.evolutionChainPokemons.map(pokemon => (
          <div>
            <Link href={'/' + pokemon.name}>
              <a>
                <h3>{pokemon.name + ' '}</h3>
              </a>
            </Link>

          </div>
        ))}

        <Link href="/">
          <button>
            <a>voltar</a>
          </button>
          
        </Link>
      </div>
    </Layout>
  );
}

export default Detalhes;
