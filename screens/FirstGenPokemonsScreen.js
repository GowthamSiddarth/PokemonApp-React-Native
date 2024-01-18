// src/screens/FirstGenPokemonsScreen.js

import { StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import PokemonThumbnail from "../components/PokemonThumbnail";
import LoadingScreen from "./LoadingScreen";

import PokemonController from '../controllers/PokemonController';

const FirstGenPokemonsScreen = ({ navigation }) => {

    const [firstGenPokemonsThumbnails, setFirstGenPokemonsThumbnails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            try {
                PokemonController.fetchFirstGenPokemons().then(firstGenPokemons => setFirstGenPokemonsThumbnails(firstGenPokemons));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchFirstGenPokemons();
    }, []);

    const renderPokemon = ({ item }) => <PokemonThumbnail name={item.name} image={item.image} />;

    if (loading) return <SafeAreaView><LoadingScreen /></SafeAreaView>;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={firstGenPokemonsThumbnails}
                renderItem={renderPokemon}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS == 'android' ? 20 : 50
    },
});

export default FirstGenPokemonsScreen;