// src/controllers/PokemonTypeController.js

import PokemonTypeService from "../services/PokemonTypeService";


const PokemonTypeController = {

    fetchPokemonTypeById: (pokemonTypeId) => PokemonTypeService.fetchPokemonTypeById(pokemonTypeId)
        .then(pokemonType => pokemonType)
        .catch((error) => {
            console.log("Error in PokemonController.fetchPokemonById:", error);
            throw error;
        }),

    fetchPokemonTypeByName: (pokemonTypeName) => PokemonTypeService.fetchPokemonTypeByName(pokemonTypeName)
        .then(pokemonType => pokemonType)
        .catch((error) => {
            console.log("Error in PokemonController.fetchPokemonById:", error);
            throw error;
        }),

    fetchAllPokemonTypes: () => PokemonTypeService.fetchAllPokemonTypes()
        .then(pokemonTypes => pokemonTypes)
        .catch((error) => {
            console.log("Error in PokemonController.fetchFirstGenPokemons:", error);
            throw error;
        }),
}

export default PokemonTypeController;