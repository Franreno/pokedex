import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Search from '../components/search';
import Image from "next/image";
import Card from '../components/card';
import Navbar from '../components/navbar';
import Welcome from '../components/welcome';

export async function getStaticProps(context) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`); //MUDAR ANTES DE DAR PUSH
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

export default function Home({ pokemons }) {
  return (
    <>
      <Welcome />
      <Layout>
        <Head>
          <link rel="icon" href="/images/favicon.ico"></link>
          <title>Pokedex</title>
        </Head>

        <main>
          <Navbar />
        </main>

        <br></br>
        <section>
          <h1 style={{color: "black"}}>Pokemons</h1>
          <div className="mainPageGrid">
            {pokemons.map(pokemon => (
              <Card pokemon={pokemon} />
            ))}
          </div>
        </section>

      </Layout>
    </>
  )
}
