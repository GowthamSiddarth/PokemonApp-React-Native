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
    },

    fetchFirstGenPokemons: () => {
        const pokeApiQuery = "pokemon?limit=151&offset=0";

        return api.get(pokeApiQuery)
            .then(firstGenPokemonsResponse => firstGenPokemonsResponse.json()
                .then(firstGenPokemonsResponseBody => {
                    const promises = firstGenPokemonsResponseBody.results.map(result =>
                    (api.get(result.url).then((pokemonResponse) => {
                        if (!pokemonResponse.ok) {
                            throw new Error(`Failed to fetch data from ${pokemonUrl}`);
                        }
                        pokemonResponse.json()
                            .then(pokemonResponseBody => ({
                                "name": result.name.charAt(0).toUpperCase() + result.name.slice(1),
                                "image": pokemonResponseBody.sprites.front_default
                            }))
                    })));

                    return Promise.all(promises).then(responses => responses.reduce((acc, response) => acc.concat(response), []));
                })
                .catch((error) => {
                    console.log("Error in PokemonService.fetchPokemonByName: ", error.message);
                    throw error;
                }));
    }
}

export default PokemonService;
