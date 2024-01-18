// src/models/PokemonStats.js

const creatPokemonStats = ({ hp, attack, defense, specialAttack, specialDefense, speed }) => {
    let _hp = hp;
    let _attack = attack;
    let _defense = defense;
    let _specialAttack = specialAttack;
    let _specialDefense = specialDefense;
    let _speed = speed;

    // setter methods
    const setHp = (hp) => {
        _hp = hp;
    }

    const setAttack = (attack) => {
        _attack = attack;
    }

    const setDefense = (defense) => {
        _defense = defense;
    }

    const setSpecialAttack = (specialAttack) => {
        _specialAttack = specialAttack;
    }

    const setSpecialDefense = (specialDefense) => {
        _specialDefense = specialDefense;
    }

    const setSpeed = (speed) => {
        _speed = speed;
    }

    // getter method
    const getHp = () => _hp;
    const getAttack = () => _attack;
    const getDefense = () => _defense;
    const getSpecialAttack = () => _specialAttack;
    const getSpecialDefense = () => _specialDefense;
    const getSpeed = () => _speed;

    return {
        setHp,
        setAttack,
        setDefense,
        setSpecialAttack,
        setSpecialDefense,
        getHp,
        getAttack,
        getDefense,
        getSpecialAttack,
        getSpecialDefense,
    };
};

export default creatPokemonStats;