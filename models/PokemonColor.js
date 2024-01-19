// src/models/PokemonColor.js

const createPokemonColor = ({ id, name, url }) => {
    let _id = id;
    let _name = name;
    let _url = url;

    // getter methods
    const getId = () => _id;
    const getName = () => _name;
    const getUrl = () => _url;

    // setter methods
    const setName = (name) => {
        _name = name;
    }

    const setUrl = (url) => {
        _url = url;
    }

    return {
        getId,
        getName,
        getUrl,
        setName,
        setUrl,
    };
}

export default createPokemonColor;