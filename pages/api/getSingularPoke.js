import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const api_url = "https://pokeapi.co/api/v2/pokemon";

export default function getOnePokemon(name) {
    //gets one pokemon
    const res = `${api_url}/${name}`;
    const { data: result, error } = useSWR(res, fetcher);

    return { result, error };
}