import Image from "next/image";
import Layout from '../components/layout';
import Link from "next/dist/client/link";
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


  return{
    props: { pokemon: pokemon, evolution: evolution}
  }

}

const Detalhes = ({pokemon}) => {
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
        <Link href="/">
          <a>voltar</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Detalhes;