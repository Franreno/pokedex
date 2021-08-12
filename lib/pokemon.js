export async function findEvolutionChainArray(evolution){
    let evolutionChainPokemons = [];
    let evolutionChain = evolution.chain;
    let resPokemonSpecies;
    let res;
    let i = 0;
    while(evolutionChain != undefined){
        res = await fetch(evolutionChain.species.url);
        resPokemonSpecies = await res.json();
        
        res = await fetch("https://pokeapi.co/api/v2/pokemon/"+ resPokemonSpecies.id);
        evolutionChainPokemons[i++] = await res.json();

        evolutionChain = evolutionChain.evolves_to[0];
        
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

export async function getPokemonImages(pokemons) {
    let pokeImages = [];
    let pokeid;
    
    for(let i=0; i<pokemons.length; i++) {
        pokeid = pokemons[i].id
        const paddedId = ('00' + (pokeid)).slice(-3);
        pokeImages[i] = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    }
    

    return pokeImages;
}