import styles from './welcome.module.css'
import Image from "next/image";
import Search from './search';

export default function Welcome() {
    return (
        <div className={styles.containerWelcome}>
            <div className = {styles.row}>
               <div className = {styles.col}>
                    <Search/>
               </div>
            </div>       
        </div>
    )
}
//<h1 className = {styles.title}>PESQUISA DE POKEMONS</h1>