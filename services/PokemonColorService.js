// src/services/PokemonColorService.js

import { POKEMON_API_PATH } from "../assets/constants/API";

import api from "../helpers/api";
import createPokemonColor from "../models/PokemonColor";

const PokemonColorService = {
    fetchPokemonColorById: (pokemonColorId) => {
        const pokeApiQuery = `pokemon-color/${pokemonColorId}`;

        return api.getWithEndpoint(pokeApiQuery)
            .then((pokemonColorData) => {
                const pokemonColor = createPokemonColor({ id: pokemonColorData.id, name: pokemonColorData.name })
                return pokemonColor;
            }).catch((error) => {
                console.log("Error in PokemonColorService.fetchPokemonColorById", error.message);
                throw error;
            })
    },

    fetchPokemonColorByName: (pokemonColorName) => {
        const pokeApiQuery = `pokemon-color/${pokemonColorName}`;

        return api.getWithEndpoint(pokeApiQuery)
            .then((pokemonColorData) => {
                const pokemonColor = createPokemonColor({ id: pokemonColorData.id, name: pokemonColorData.name })
                return pokemonColor;
            }).catch((error) => {
                console.log("Error in PokemonColorService.fetchPokemonColorById", error.message);
                throw error;
            })
    },

    fetchAllPokemonColors: () => {
        const pokeApiQuery = `pokemon-color`;

        return api.getWithEndpoint(pokeApiQuery)
            .then(pokemonColorsData => {
                const promises = pokemonColorsData.results.map(result => {
                    const colorName = result['name'];
                    const colorUrl = result['url'];
                    const colorId = parseInt(colorUrl.substring(colorUrl.indexOf('pokemon-color') + 14, colorUrl.lastIndexOf('/')));

                    const pokemonColor = createPokemonColor({ colorId, colorName });
                    console.log(pokemonColor);
                    return pokemonColor;
                });

                return Promise.all(promises)
                    .then(results => results)
                    .catch(error => {
                        console.log("Error resolving promises at PokemonTypeService.fetchAllPokemonTypes", error.message);
                        throw error;
                    })
            });
    },
};