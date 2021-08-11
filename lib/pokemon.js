export async function findEvolutionChainArray(evolution){
    let evolutionChainPokemons = [];
    let evolutionChain = evolution.chain;
    let res;
    let i = 0;
    while(1){

        res = await fetch('https://pokeapi.co/api/v2/pokemon/'+evolutionChain.species.name);
        evolutionChainPokemons[i++] = await res.json();
        evolutionChain = evolutionChain.evolves_to[0];
        if(evolutionChain===undefined){
            break;
        }
    }
    return evolutionChainPokemons;
}
export async function findTypesInformation(types){
    let typesInformation = [];
    let res;
    for(let i = 0; i<types.length; i++){
        res = await fetch(types[i].type.url);
        typesInformation[i]= await res.json();
    }
    
    return typesInformation;
}