import Link from "next/link";
import Image from "next/image";
import styles from './singularCard.module.css'
import getIcons from '../lib/typeIcons'


export default function SingularPokeCard({ props }) {

    const types = props.types;
    const evolutionChainPokemons = props.evolutionChainPokemons;
    const pokemon = props.pokemon;
    const pokemonImages = props.pokemonImages;
    const typeRelations = props.typeRelations;


    const icons = getIcons();

    const MainPokemonImage = (id) => {
        const paddedId = ('00' + (id)).slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    }

    const filterWeaknessAndStrong = (type, relations) => {
        let ret = []
        relations.map(relation => {
            if (type === "weak") {
                if (relation.mult === 2) {
                    ret.push(relation.name)
                }
            }

            if (type === "strong") {
                if (relation.mult === 0.5) {
                    ret.push(relation.name)
                }
            }
        })

        return ret;
    }
    const weakRelations = filterWeaknessAndStrong("weak", typeRelations);
    console.log(weakRelations)
    const strongRelations = filterWeaknessAndStrong("strong", typeRelations);
    console.log(strongRelations)


    return (
        <div className={styles.mainDiv}>

            <div className={styles.mainTitle}>
                <h1 className={styles.title}>{pokemon.name}</h1>
                {types.map((type) => {
                    return (
                        <div>
                            <img src={icons[type.name]} width={50} height={50} />
                            <p>{type.name}</p>
                        </div>
                    )
                })}
            </div>


            {/* Inicio picAndDetails */}
            <div className={styles.picAndDetails}>

                {/* Imagem principal do pokemon */}
                <div className={styles.mainPokeImg}>
                    <div className={styles.mainPokeImgBackground}>
                        <Image src={MainPokemonImage(pokemon.id)} width={215} height={215} />
                    </div>
                </div>

                {/* Inicio Detalhes */}
                <div className={styles.details}>

                    {/* Altura */}
                    <div className={styles.height}>
                        <p>Altura:</p>
                        <p>{pokemon.height}</p>
                    </div>

                    {/* Peso */}
                    <div className={styles.weight}>
                        <p>Peso:</p>
                        <p>{pokemon.weight}</p>
                    </div>

                    {/* Habilidades */}
                    <div className={styles.abilities}>
                        <p>Habilidades:</p>
                        {pokemon.abilities.map((abl) =>
                            <p>{abl.ability.name}</p>
                        )}
                    </div>

                </div>
                {/* Fim Detalhes */}

            </div>
            {/* Fim picAndDetails */}


            {/* Inicio statsAndRelations */}
            <div className={styles.statsAndRelations}>

                {/* Inicio stats */}
                <div className={styles.stats}>
                    <h3>Stats</h3>
                    <div>
                        {pokemon.stats.map((_stat) => {
                            return (
                                <div>
                                    <p>{_stat.stat.name} {_stat.base_stat}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Fim stats */}

                {/* Inicio Relations */}
                <div className={styles.weakness}>

                    {/* Inicio Weakness */}
                    <h3>Fraco contra</h3>
                    <div className={styles.weaknessGrid}>
                        {weakRelations.map((relation) => {
                            return (
                                <div className={styles.singularWeakness}>
                                    <img src={icons[relation]} width={25} height={25} />
                                    <p>{relation}</p>
                                </div>
                            )
                        })}
                    </div>
                    {/* Fim Weakness */}

                    {/* Inicio strongness */}
                    <h3>Forte contra</h3>
                    <div className={styles.weaknessGrid}>
                        {strongRelations.map((relation) => {
                            return (
                                <div className={styles.singularstrongness}>
                                    <img src={icons[relation]} width={25} height={25} />
                                    <p>{relation}</p>
                                </div>
                            )
                        })}
                    </div>
                    {/* Fim strongness */}
                </div>
                {/* Fim Relations */}


            </div>
            {/* Fim statsAndRelations */}

            <p className={styles.evolveTitle}>Evoluções:</p>
            <div className={styles.evGrid}>
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