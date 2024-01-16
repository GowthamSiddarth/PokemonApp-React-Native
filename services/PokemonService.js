// src/services/PokemonService.js

import { POKEMON_API_PATH } from "../assets/constants/API";

const fetchPokemonById = async (pokemonId) => {
    const pokeApiQuery = `pokemon/${pokemonId}`;

    return fetch(`${POKEMON_API_PATH}${pokeApiQuery}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch Pokemon data");
            }

            return response.json();
        })
        .then((pokemonData) => ({ id: pokemonData.id, weight: pokemonData.weight, image: pokemonData.image }))
        .catch((error) => {
            console.log("Error in fetchPokemonById: ", error.message);
            throw error;
        });
}

export { fetchPokemonById };
