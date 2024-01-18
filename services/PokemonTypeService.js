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
};

export default PokemonTypeService;