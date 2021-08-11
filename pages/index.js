import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout';
import Search from '../components/search';
import Image from "next/image";
import Card from '../components/card';
import Grid from '../components/basic-grid';

export async function getStaticProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`);
  const { results } = await res.json();
  const pokemons = results.map((result, index) => {
    const paddedId = ('00' + (index + 1)).slice(-3);

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { ...result, image };
  })

  return {
    props: { pokemons },
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
        <h1>POKEMONS</h1>
        <Grid>
          {pokemons.map(pokemon => (
              <Card pokemon={pokemon}/>
          ))}
        </Grid>
      </section>

    </Layout>


  )
}
