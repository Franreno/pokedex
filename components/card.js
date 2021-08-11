import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import getOnePokemon from '../pages/api/getSingularPoke'


export default function Portrait({ pokemon }) {

    const { name } = pokemon
    const { result, error } = getOnePokemon(name);

    if(error) return <h1>Erro</h1>
    if(!result) return <h1>Loading...</h1>


    return (
        <Link key={pokemon.name} href={'/' + pokemon.name}>
            <div className={styles.card}>
                <Image src={pokemon.image} width={150} height={150} className={styles.img} />
                <h3 className={styles.nome}>{pokemon.name}</h3>
        
                <span>
                    {result.types.map( (poke) => <p className={styles.type}>{poke.type.name}</p> )}
                </span>
            </div>
        </Link>
    )
}