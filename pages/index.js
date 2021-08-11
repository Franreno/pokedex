import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout'
import Search from '../components/search';
import PokeCardLayout from '../components/poke_card_layout';
import { getPokemon } from './api/pokemon_api';

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const {results} = await res.json();
    const pokemons = results.map( (result, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...result, image };
    })
    
    return {
      props: {pokemons},
    };
    
  } catch (err) {
    console.error(err);
  }

}

export default function Home({pokemons}) {

  return (
    <Layout>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main>

    <Search/>


      </main>
      <section>
        <h2>POKEMONS</h2>
          {pokemons.map(pokemon => (
            <PokeCardLayout name={pokemon}/>
          ))}
      </section>

  </Layout>
  )
}
