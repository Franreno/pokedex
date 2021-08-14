import Head from 'next/head';
import Layout from '../components/layout';
import Image from "next/image";
import Card from '../components/card';
import Navbar from '../components/navbar';
import Welcome from '../components/welcome';
import InfiniteScroll from "react-infinite-scroller";
import { useRequestInfinite } from './api/infiniteFetch';
import { useState } from 'react';


const fetcher = (url) => fetch(url).then((res) => res.json());
const API_URL = "https://pokeapi.co/api/v2/pokemon";


export default function Home() {


  const [path, setPath] = useState("/pokemon");
  const [selectedType, setSelectedType] = useState(null);

  const {
    data,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = useRequestInfinite(path, !!selectedType);



  if (error) return <h1>Erro</h1>
  if (!data) return <Image src={'/images/pokeball_loading.gif'} width={200} height={100} />


  // console.log(data)
  let pokemons = undefined;
  let multiplier;

  if (data) {
    pokemons = data.map((group, indexOfGroup) => {
      console.log(indexOfGroup)
      multiplier = indexOfGroup*15;
      return group.map((result, index) => {
        const paddedId = ('00' + ( (index + 1)+multiplier)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return { ...result, image };
      })

    })
  }


  return (
    <>
      <Welcome />
      <Layout>
        <Head>
          <link rel="icon" href="/images/pokeball.ico"></link>
          <title>Pokedex</title>
        </Head>

        <main>
          <Navbar />
        </main>


        <section>
          <h1 style={{ color: "white" }}>Pokemons</h1>
          <InfiniteScroll
            loadMore={() => setSize(size + 1)}
            hasMore={!isLoadingMore && !isReachingEnd}
            loader={
              <h3
                key={0}
                style={{ textAlign: "center", padding: "1rem" }}
              >
                Load More Data...
              </h3>
            }
            threshold={500}
            >
            <div className="mainPageGrid">
              {pokemons.map(group => (
                group.map(pokemon => {
                  return (
                    <Card pokemon={pokemon} />
                  )
                })
              ))}
            </div>
          </InfiniteScroll>



        </section>


      </Layout>
    </>
  )
}
