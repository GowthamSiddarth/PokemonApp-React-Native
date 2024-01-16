// src/models/Pokemon.js

const createPokemon = (id, weight, image) => {

    let _id = id;
    let _weight = weight;
    let _image = image;

    // Getter methods
    const getId = () => _id;
    const getWeight = () => _weight;
    const getImage = () => _image;

    // Setter methods (if needed)
    const setWeight = (weight) => {
        _weight = weight;
    }

    const setImage = (image) => {
        _image = image;
    }

    return {
        getId,
        getWeight,
        getImage,
        setWeight,
        setImage
    };
};

export default createPokemon;
