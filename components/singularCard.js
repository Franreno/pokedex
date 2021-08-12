import Link from "next/link";
import Image from "next/image";
import styles from './singularCard.module.css'

export default function SingularPokeCard({ props }) {

    const types = props.types;
    const evolutionChainPokemons = props.evolutionChainPokemons;
    const pokemon = props.pokemon;
    const pokemonImages = props.pokemonImages;

    const MainPokemonImage = (id) => {
        const paddedId = ('00' + (id)).slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    }


    return (
        <div className={styles.mainDiv}>
            <h1>{pokemon.name}</h1>
            <div className={styles.mainPokeImg}>
                <div className={styles.mainPokeImgBackground}>
                    <Image src={MainPokemonImage(pokemon.id)} width={215} height={215} />
                </div>
            </div>
            <p>Tipo: {types.map(type => {
                return (type.name + ' ');
            })}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Altura: {pokemon.height}</p>
            
            
            <div className={styles.evGrid}>
            <p>Evoluções: </p>
            {evolutionChainPokemons.map((_pokemon, index) => (
                <div className={styles.EvolutionCard}>
                    <Link href={'/' + _pokemon.name}>
                        <div>
                            <div className={styles.imageBackground}>
                                <Image src={pokemonImages[index]} width={150} height={150} />
                            </div>
                            <h3 className={styles.name}>{_pokemon.name}</h3>
                        </div>
                    </Link>
                </div>
            ))}
            </div>

            <Link href="/">
                <button>
                    <a>voltar</a>
                </button>

            </Link>
        </div>
    )

}