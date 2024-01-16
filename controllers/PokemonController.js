import PokemonService from "../services/PokemonService";


const PokemonController = () => {

    fetchPokemonById: (pokemonId) => PokemonService.fetchPokemonById(pokemonId)
        .then(pokemon => pokemon)
        .catch((error) => {
            console.log("Error in PokemonController.fetchPokemonById:", error);
            throw error;
        });

    fetchPokemonByName: (pokemonName) => PokemonService.fetchPokemonByName(pokemonName)
        .then(pokemon => pokemon)
        .catch((error) => {
            console.log("Error in PokemonController.fetchPokemonById:", error);
            throw error;
        });
}

export default PokemonController;