import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

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

        <h1>
            <Link href="/posts/first-post">
              <a>MIM CLICA</a>
            </Link>
        </h1>
        <h2>
          <p>Textin só pra dizer que existe alguma coisa e não ficar vazio</p>
        </h2>

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
