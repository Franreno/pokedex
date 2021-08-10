export async function findEvolutionChainArray(evolution){
    let evolutionChainPokemons = [];
    let evolutionChain = evolution.chain;
    let res;
    let i = 0;
    while(1){
        res = await fetch('https://pokeapi.co/api/v2/pokemon/'+evolutionChain.species.name);
        evolutionChainPokemons[0] = await res.json();
        evolutionChain = evolutionChain.evolves_to;
        if(evolutionChain.length===0){
            break;
        }
    }
    return evolutionChainPokemons;
}