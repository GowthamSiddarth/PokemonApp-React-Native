// src/services/PokemonService.js

import api from "../helpers/api";

const fetchPokemonById = async (pokemonId) => {
    const pokeApiQuery = `pokemon/${pokemonId}`;

    return api.get(pokeApiQuery)
        .then((pokemonData) => ({ id: pokemonData.id, weight: pokemonData.weight, image: pokemonData.image }))
        .catch((error) => {
            console.log("Error in fetchPokemonById: ", error.message);
            throw error;
        });
}

const fetchPokemonByName = async (pokemonName) => {
    const pokeApiQuery = `pokemon/${pokemonName}`;

    return api.get(pokeApiQuery)
        .then((pokemonData) => ({ id: pokemonData.id, weight: pokemonData.weight, image: pokemonData.image }))
        .catch((error) => {
            console.log("Error in fetchPokemonById: ", error.message);
            throw error;
        });
}

export { fetchPokemonById, fetchPokemonByName };
