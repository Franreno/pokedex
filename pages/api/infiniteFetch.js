
import { useSWRInfinite } from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

const getCallback = (path, isFiltering = false) => {
    const url = `${baseUrl}${path}`;
    const LIMIT = 15;

    if (isFiltering) {
        return () => {
            return url;
        };
    }

    return (index, previousData) => {
        // reached the end
        if (previousData && !previousData.next) return null;

        // first fetch, we don't have previous data
        if (index === 0) return `${url}?offset=0&limit=${LIMIT}`;

        return `${url}?offset=${
            previousData.results.length * index
        }&limit=${LIMIT}`;
    };
};

export const useRequestInfinite = (path, isFiltering = false) => {
    if (!path) {
        throw new Error("Path is required");
    }

    const callback = getCallback(path, isFiltering);

    const { data, error, size, setSize } = useSWRInfinite(callback);

    let pokemons = [];
    let isReachingEnd = false;
    let isLoadingMore = true;

    if (data) {
        pokemons = data.map((group) => {
            if (group.pokemon) {
                isReachingEnd = true;
                isLoadingMore = false;
                return group.pokemon.map(({ pokemon }) => pokemon);
            }

            if (!group.next) isReachingEnd = true;
            const isLoadingInitialData = !data && !error;
            isLoadingMore =
                isLoadingInitialData ||
                (size > 0 && data && typeof data[size - 1] === "undefined");
            return [...group.results];
        });
    }

    return {
        data: isFiltering
            ? pokemons.filter((group, index) => index === 0)
            : pokemons,
        error,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
    };
};