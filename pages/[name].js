import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
import "../lib/pokemon";
import { findEvolutionChainArray } from "../lib/pokemon";
export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3');
  const data = await res.json();
  const pokemons = data.results;

  const paths = pokemons.map(pokemon => {
    return {
      params : {name: pokemon.name}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const name = context.params.name;
  let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+name);
  const pokemon = await res.json();
  res = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+name);
  const specie = await res.json();
  res = await fetch(specie.evolution_chain.url);
  const evolution = await res.json();
  const evolutionChainPokemons = await findEvolutionChainArray(evolution);
  const types = [];
  types = await pokemon.types.map(async type =>{
    res = await fetch(type.url);
    return await res.json();
  });

  return{
    props: { pokemon: pokemon, evolutionChainPokemons: evolutionChainPokemons, types: types}
  }

}

const Detalhes = ({pokemon},{evolutionChainPokemons}) => {
  return (
    <Layout>
      <div>
       <h1>{pokemon.name}</h1>
        <p>Tipo: {pokemon.types.map(membro=>{
                    return (membro.type.name+' ');
        })}</p>
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>
        <Image src={pokemon.sprites.front_default} width={200} height={200}></Image>
        <p>Evoluções: </p>
        {evolutionChainPokemons.map(pokemon => (
            <div>
              <Link href={'/'+pokemon.name}>
                <a>
                  <h3>{pokemon.name+' '}</h3>
                </a>  
              </Link>

            </div>
          ))}
        <Link href="/">
          <a>voltar</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Detalhes;