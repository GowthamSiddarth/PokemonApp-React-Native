// src/controllers/PokemonTypeController.js

import PokemonColorService from "../services/PokemonColorService";


const PokemonColorController = {

    fetchPokemonColorById: (pokemonColorId) => PokemonColorService.fetchPokemonColorById(pokemonColorId)
        .then(pokemonColor => pokemonColor)
        .catch((error) => {
            console.log("Error in PokemonColorController.fetchPokemonColorById:", error);
            throw error;
        }),

    fetchPokemonColorByName: (pokemonColorName) => PokemonColorService.fetchPokemonColorByName(pokemonColorName)
        .then(pokemonColor => pokemonColor)
        .catch((error) => {
            console.log("Error in PokemonColorController.fetchPokemonColorByName:", error);
            throw error;
        }),

    fetchAllPokemonColors: () => PokemonColorService.fetchAllPokemonColors()
        .then(pokemonColors => pokemonColors)
        .catch((error) => {
            console.log("Error in PokemonColorController.fetchAllPokemonColors:", error);
            throw error;
        }),
}

export default PokemonColorController;