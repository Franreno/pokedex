import styles from './card.module.css'
import Link from 'next/link'
import getIcons from '../lib/typeIcons'
import useFetchPokemon from '../pages/api/useRequest'

export default function Portrait({ pokemon }) {

    const { name } = pokemon
    const { result, error } = useFetchPokemon(name);

    
    if (error) return <h1>Erro</h1>
    if (!result) return <img src={'/images/pokeball_loading.gif'} className={styles.iconImg}/>
    

    const icons = getIcons();

    const mainType = result.types[0].type.name

    return (
        <Link key={pokemon.name} href={'/' + pokemon.name}>
            <div className={styles[mainType]}>
                <div className={styles.imageBackground}>
                    <img src={pokemon.image} className={styles.img}/>
                </div>
                <h3 className={styles.nome}>{pokemon.name}</h3>
                <div className={styles.cardTipos}>
                    {result.types.map((poke) => 
                        <img src={icons[poke.type.name]} className={styles.iconImg}/>
                    )}
                </div>
            </div>
        </Link>
    )
}