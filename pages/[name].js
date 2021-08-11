import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
import "../lib/pokemon";
import { findEvolutionChainArray, findTypesInformation } from "../lib/pokemon";
export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
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
  const types =  await findTypesInformation(pokemon.types);


  return{
    props: { types: types, evolutionChainPokemons: evolutionChainPokemons, pokemon: pokemon}
  }

}

const Detalhes = (props) => {
  return (
    <Layout>
      <div>
       <h1>{props.pokemon.name}</h1>
        <p>Tipo: {props.types.map(type=>{
                    return (type.name+' ');
        })}</p>
        <p>Peso: {props.pokemon.weight}</p>
        <p>Altura: {props.pokemon.height}</p>
        <Image src={props.pokemon.sprites.front_default} width={200} height={200}></Image>
        <p>Evoluções: </p>
        {props.evolutionChainPokemons.map(pokemon => (
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