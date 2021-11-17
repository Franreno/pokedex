import Link from "next/link";
import styles from './singularCard.module.css'
import getIcons from '../lib/typeIcons'
import StatsTeste from "./statsChart";


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
                if (relation.mult === 2 || relation.mult === 4) {
                    ret.push([relation.name, relation.mult])
                }
            }

            if (type === "strong") {
                if (relation.mult === 0.5 || relation.mult === 0.25) {
                    ret.push([relation.name, relation.mult])
                }
            }

            if (type === "immune") {
                if (relation.mult === 0) {
                    ret.push([relation.name, relation.mult])
                }
            }

        })

        if (ret.length === 0) {
            ret.push(["nenhum"])
        }

        return ret;
    }
    const weakRelations = filterWeaknessAndStrong("weak", typeRelations);
    const strongRelations = filterWeaknessAndStrong("strong", typeRelations);
    const immuneRelations = filterWeaknessAndStrong("immune", typeRelations);

    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"></link>
            </head>
            <div className={styles.mainDiv}>

                <div className={styles.mainTitle}>
                    <h1 className={styles.title}>{`#${pokemon.id} ${pokemon.name}`}</h1>
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
                            <img src={MainPokemonImage(pokemon.id)} className={styles.mainPokemonImage}/>
                        </div>
                    </div>

                    {/* Inicio Detalhes */}
                    <div className={styles.details}>
                        <div className={styles.boxTitle}>
                            <h2 className={styles.titleDiv}>CARACTERÍSTICAS</h2>
                        </div>    
                        <div className={styles.boxHr}>
                            <hr className={styles.underLineTitle}></hr>
                        </div>    
                        {/* Altura */}
                        <div className={styles.height}>
                            <p>Altura:</p>
                            <p>{pokemon.height} cm</p>
                        </div>

                        {/* Peso */}
                        <div className={styles.weight}>
                            <p>Peso:</p>
                            <p>{pokemon.weight} kg</p>
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
                        <StatsTeste stats={pokemon.stats}/>
                    </div>
                    {/* Fim stats */}

                    {/* Inicio Relations */}
                    <div className={styles.relations}>
                        <div className={styles.boxTitle}>
                            <h2 className={styles.titleDiv}>RELAÇÕES</h2>
                        </div>    
                        <div className={styles.boxHr}>
                            <hr className={styles.underLineTitle} style={{backgroundColor: "white"}}></hr>
                        </div> 
                        {/* Inicio Weakness */}
                        <h3>Fraco contra</h3>
                        <div className={styles.weaknessGrid}>
                            {weakRelations.map((relation) => {
                                if (relation[0] === "nenhum") {
                                    return (
                                        <div className={styles.singularNone}>
                                            <p>{relation[0]}</p>
                                        </div>
                                    )
                                }
                                return (
                                    <div className={styles.singularWeakness}>
                                        <img src={icons[relation[0]]} width={25} height={25} />
                                        <p>{relation[0]}</p>
                                        <p className={styles.relationsMult}>{`${relation[1]}x`}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Fim Weakness */}


                        {/* Inicio Immune */}
                        <h3>Imune contra</h3>
                        <div className={styles.weaknessGrid}>
                            {immuneRelations.map((relation) => {

                                if (relation[0] === "nenhum") {
                                    return (
                                        <div className={styles.singularNone}>
                                            <p>{relation[0]}</p>
                                        </div>
                                    )
                                }
                                
                                
                                return (
                                    <div className={styles.singularImmune}>
                                        <img src={icons[relation[0]]} width={25} height={25} />
                                        <p>{relation[0]}</p>
                                        <p className={styles.relationsMult}>{`${relation[1]}x`}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Fim Immune */}


                        {/* Inicio strongness */}
                        <h3>Forte contra</h3>
                        <div className={styles.weaknessGrid}>
                            {strongRelations.map((relation) => {
                                if (relation[0] === "nenhum") {
                                    return (
                                        <div className={styles.singularNone}>
                                            <p>{relation[0]}</p>
                                        </div>
                                    )
                                }
                                return (
                                    <div className={styles.singularstrongness}>
                                        <img src={icons[relation[0]]} width={25} height={25} />
                                        <p>{relation[0]}</p>
                                        <p className={styles.relationsMult}>{`${relation[1]}x`}</p>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Fim strongness */}

                    </div>
                    {/* Fim Relations */}


                </div>
                {/* Fim statsAndRelations */}

                <div className={styles.evGrid}>
                        <div className={styles.boxTitle}>
                            <h2 className={styles.titleDiv} style={{color: "white"}}>EVOLUÇÕES</h2>
                        </div>    
                      
                        {evolutionChainPokemons.map((_pokemon, index) => (
                            <div className={styles.EvolutionCard}>
                                <Link href={'/' + _pokemon.name}>
                                    <div>
                                        <div className={styles.imageBackground}>
                                            <img src={pokemonImages[index]} className={styles.evolutionChainPokeImg}/>
                                        </div>
                                        <h3 className={styles.name}>{_pokemon.name}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>

                <div className={styles.buttonDiv}>
                <Link href="/">
                    <button className={styles.backButton}>
                        <p>Voltar</p>
                    </button>
                </Link>
                </div>

            </div>
        </>
    )
}