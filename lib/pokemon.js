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

export function createRelation(name, mult){
    const relation = {
        "name":name,
        "mult":mult
    }

    return relation;
}

export function haveType(typeRelations, type){
    for(let i = 0; i<typeRelations.length; i++){
        if(typeRelations[i].name===type){
            return true;
        }
    }
    return false;
}

export function indexType(typeRelations, type){
    for(let i = 0; i<typeRelations.length; i++){
        if(typeRelations[i].name===type){
            return i;
        }
    }
}

export function getTypeRelations(types){
    let typeRelations = [];
    types.map(type =>{
        type.damage_relations.double_damage_from.map(typeDouble=>{
            if(haveType(typeRelations,typeDouble.name)){
                typeRelations[indexType(typeRelations, typeDouble.name)].mult*=2;
            }
            else{
                typeRelations.push(createRelation(typeDouble.name, 2));
            }
        })
        type.damage_relations.half_damage_from.map(typeHalf=>{
            if(haveType(typeRelations,typeHalf.name)){
                typeRelations[indexType(typeRelations, typeHalf.name)].mult*=0.5;
            }
            else{
                typeRelations.push(createRelation(typeHalf.name, 0.5));
            }
        })
        type.damage_relations.no_damage_from.map(typeNo=>{
            if(haveType(typeRelations,typeNo.name)){
                typeRelations[indexType(typeRelations, typeNo.name)].mult*=0;
            }
            else{
                typeRelations.push(createRelation(typeNo.name, 0));
            }
        })
        typeRelations = typeRelations.filter(typeRelation=>{
            return typeRelation.mult!==1;
        })
    })

    return typeRelations;        
}