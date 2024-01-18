// src/services/PokemonTypeService.js

import api from "../helpers/api";
import createPokemonType from "../models/PokemonType";

const PokemonTypeService = {

    fetchPokemonTypeById: (pokemonTypeId) => {
        const pokeApiQuery = `type/${pokemonTypeId}`;

        return api.getWithEndpoint(pokeApiQuery)
            .then(pokemonTypeData => {
                const pokemonType = createPokemonType({
                    id: pokemonTypeData.id,
                    name: pokemonTypeData.name
                });

                return pokemonType;
            })
            .catch(error => {
                console.log("Error in PokemonTypeService.fetchPokemonTypeById:", error.message);
                throw error;
            })
    },

    fetchPokemonTypeByName: (pokemonTypeName) => {
        const pokeApiQuery = `type/${pokemonTypeName}`;

        return api.getWithEndpoint(pokeApiQuery)
            .then(pokemonTypeData => {
                const pokemonType = createPokemonType({
                    id: pokemonTypeData.id,
                    name: pokemonTypeData.name
                });

                return pokemonType;
            })
            .catch(error => {
                console.log("Error in PokemonTypeService.fetchPokemonTypeById:", error.message);
                throw error;
            })
    },

    fetchAllPokemonTypes: () => {
        const pokeApiQuery = `type`;

        return api.getWithEndpoint(pokeApiQuery)
            .then(pokemonTypesData => {
                const promises = pokemonTypesData.results.map(result => {
                    const typeName = result['name'];
                    const typeUrl = result['url'];
                    const typeId = parseInt(typeUrl.substring(typeUrl.indexOf('type') + 5, typeUrl.lastIndexOf('/')));

                    // createPokemonType({ typeId, typeName });
                    return typeName;
                });

                return Promise.all(promises)
                    .then(results => {
                        return results;
                    })
                    .catch(error => {
                        console.log("Error resolving promises at PokemonTypeService.fetchAllPokemonTypes", error.message);
                        throw error;
                    })
            })
            .catch(error => {
                console.log("Error in PokemonTypeService.fetchPokemonTypeById:", error.message);
                throw error;
            })
    },
};

export default PokemonTypeService;