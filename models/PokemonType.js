// src/models/PokemonType.js

const createPokemonType = ({ id, name }) => {
    let _id = id;
    let _name = name;

    // getter methods
    const getId = () => _id;
    const getName = () => _name;

    // setter methods
    const setName = (name) => {
        _name = name;
    }

    return {
        getId,
        getName,
        setName
    };
};

export default createPokemonType;

