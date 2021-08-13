import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import getOnePokemon from '../pages/api/getSingularPoke'
import getIcons from '../lib/typeIcons'

export default function Portrait({ pokemon }) {

    const { name } = pokemon
    const { result, error } = getOnePokemon(name);

    const icons = getIcons();

    const mainType = result.types[0].type.name


    if (error) return <h1>Erro</h1>
    if (!result) return <h1>Loading...</h1>


    return (
        <Link key={pokemon.name} href={'/' + pokemon.name}>
            <div className={styles[mainType]}>
                <div className={styles.imageBackground}>
                    <Image src={pokemon.image} width={150} height={150} className={styles.img} />
                </div>
                <h3 className={styles.nome}>{pokemon.name}</h3>
                <div className={styles.cardTipos}>
                    {result.types.map((poke) => 
                        <Image src={icons[poke.type.name]} width={50} height={50} />
                    )}
                </div>
            </div>
        </Link>
    )
}