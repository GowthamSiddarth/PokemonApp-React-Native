// src/services/PokemonService.js

import api from "../helpers/api";
import createPokemon from "../models/Pokemon";

const PokemonService = {

    fetchPokemonById: (pokemonId) => {
        const pokeApiQuery = `pokemon/${pokemonId}`;

        return api.getWithEndpoint(pokeApiQuery)
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

        return api.getWithEndpoint(pokeApiQuery)
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

        return api.getWithEndpoint(pokeApiQuery)
            .then(firstGenPokemonsResponseBody => {
                const promises = firstGenPokemonsResponseBody.results.map(result =>
                    api.get(result.url)
                        .then(pokemonResponseBody => {
                            const pokemon = {
                                "name": result.name.charAt(0).toUpperCase() + result.name.slice(1),
                                "image": pokemonResponseBody.sprites.front_default
                            };
                            return pokemon;
                        })
                );

                return Promise.all(promises)
                    .then(responses => responses.reduce((acc, response) => acc.concat(response), []))
                    .catch(error => {
                        console.log(error);
                        throw error;
                    });
            })
            .catch((error) => {
                console.log("Error in PokemonService.fetchPokemonByName: ", error.message);
                throw error;
            });
    }
}

export default PokemonService;
