import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
import "../lib/pokemon";
import { findEvolutionChainArray } from "../lib/pokemon";

export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
  const data = await res.json();
  const pokemons = data.results;

  const paths = pokemons.map(pokemon => {
    return {
      params: { name: pokemon.name }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  //Get pokemon data
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const pokemon = await res.json()

  //Get evolutionChainData from pokemon id
  const speciesRes = await fetch(pokemon.species.url)
  const specie = await speciesRes.json()

  const evolutionChainRes = await fetch(specie.evolution_chain.url)
  const evolutionChainPokemons = await evolutionChainRes.json()

  console.log(evolutionChainPokemons.chain.evolves_to)

  return {
    props: {pokemon: pokemon, evolutionChainPokemons: evolutionChainPokemons}
  }

}

const Detalhes = ({ pokemon }, { evolutionChainPokemons }) => {
  return (
    <Layout>
      <div>
        <h1>{pokemon.name}</h1>
        <p>Tipo: {pokemon.types.map(membro => {
          return (membro.type.name + ' ');
        })}</p>
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>
        <Image src={pokemon.sprites.front_default} width={200} height={200}></Image>
        <p>Evoluções: </p>
        {/* <p>{evolutionChainPokemons.chain.evolves_to}</p> */}

        {/* {evolutionChainPokemons.map(pokemon => (
          <div>
            <Link href={'/' + pokemon.name}>
              <a>
                <h3>{pokemon.name + ' '}</h3>
              </a>
            </Link>

          </div>
        ))} */}
        <Link href="/">
          <a>voltar</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Detalhes;
