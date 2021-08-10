import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout'
import Search from '../components/search';

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
  const data = await res.json();
  const pokemons = data.results;
  return {
    props: { pokemons: pokemons }
  }
}

export default function Home({pokemons}) {

  return (
    <Layout>
      <Head>
        <title>Meu app</title>
      </Head>

      <main>

    <Search/>


      </main>
      <section>
        <h2>POKEMONS</h2>
          {pokemons.map(pokemon => (
            <div key={pokemon.name}>
              <Link key={pokemon.name} href={'/'+pokemon.name}>
                <a>
                  <h3>{pokemon.name}</h3>
                </a>  
              </Link>

            </div>
          ))}
      </section>

  </Layout>
  )
}
