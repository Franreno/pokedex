import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout';
import Search from '../components/search';
import Image from "next/image";
import Card from '../components/card';
import Grid from '../components/basic-grid';

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
        <h1>POKEMONS</h1>
        <Grid>
          {pokemons.map(pokemon => (
              <Card>
                <Link key={pokemon.name} href={'/'+pokemon.name}>
                  <a>
                    <h3>{pokemon.name}</h3>
                  </a>  
                </Link>
              </Card>
          ))}
        </Grid>
      </section>

    </Layout>


  )
}
