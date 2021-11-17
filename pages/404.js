import styles from '../styles/404.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Search from '../components/search'

export default function page404() {

    const prefix = '/pokedex';

    return (
        <div className={styles.main404div}>

            <Head>
                <link rel="shortcut icon" href={prefix + "/images/pokeball.ico"} />
                <title>Pokedex</title>
            </Head>


            <img src={"/pokedex/images/surprisedPikachu.png"} className={styles.surprisedPikachuImg} />
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