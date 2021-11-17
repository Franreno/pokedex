import styles from '../styles/404.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Search from '../components/search'

export default function page404() {

    return (
        <div className={styles.main404div}>

            <Head>
                <link rel="icon" href="/images/pokeball.ico"></link>
                <title>Pokedex</title>
            </Head>


            <img src={"/images/surprisedPikachu.png"} className={styles.surprisedPikachuImg}/>
            <h1>Pokemon não encontrado.</h1>

            <Search />

            <div className={styles.buttonDiv}>
                <Link href="/">
                    <button className={styles.backButton}>
                        <p>Voltar</p>
                    </button>
                </Link>
                </div>


        </div>
    )
}