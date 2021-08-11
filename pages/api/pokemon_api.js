import { useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon";

export async function getAllPokemon() {
    //Get the limit ammount for pokemons
    const countRes = await fetch(`${url}`)
    const countData = await countRes.json()
    const limit = countData.count;
    
    //gets all pokemons
    const res = await fetch(`${url}?limit=${limit}`)
    const data = await res.json();
    const pokemons = data.results;

    return pokemons;
}

export async function getPokemon(name) {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();

    return data;
}
