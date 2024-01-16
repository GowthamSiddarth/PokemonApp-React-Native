// src/services/PokemonService.js

import api from "../helpers/api";
import createPokemon from "../models/Pokemon";

const PokemonService = {

    fetchPokemonById: (pokemonId) => {
        const pokeApiQuery = `pokemon/${pokemonId}`;

        return api.get(pokeApiQuery)
            .then((pokemonData) => {
                const pokemon = createPokemon({
                    id: pokemonData.id,
                    weight: pokemonData.weight,
                    image: pokemonData.sprites.other['official-artwork']['front_default']
                });

                return pokemon;
            })
            .catch((error) => {
                console.log("Error in PokemonService.fetchPokemonById: ", error.message);
                throw error;
            });
    },

    fetchPokemonByName: (pokemonName) => {
        const pokeApiQuery = `pokemon/${pokemonName}`;

        return api.get(pokeApiQuery)
            .then((pokemonData) => {
                const pokemon = createPokemon({
                    id: pokemonData.id,
                    weight: pokemonData.weight,
                    image: pokemonData.sprites.other['official-artwork']['front_default']
                });

                return pokemon;
            })
            .catch((error) => {
                console.log("Error in PokemonService.fetchPokemonByName: ", error.message);
                throw error;
            });
    }
}

export default PokemonService;
