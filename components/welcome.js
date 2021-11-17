import styles from './welcome.module.css'
import Search from './search';

export default function Welcome() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800;900&display=swap" rel="stylesheet"></link>
            </head>
            <div className={styles.containerWelcome}>
                <div className = {styles.row}>
                <div className = {styles.col}>
                        <h1 className = {styles.title}>PESQUISE SEU POKEMON</h1>
                        <Search/>
                        <p style={{color: 'white'}}>Logo abaixo, temos todos os pokemons disponíveis em nossa podekex</p>
                </div>
                </div>       
            </div>
        </>
    )
}
//<h1 className = {styles.title}>PESQUISA DE POKEMONS</h1>