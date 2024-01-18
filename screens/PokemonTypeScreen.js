// src/screens/PokemonTypeScreen.js

import { StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import PokemonTypeThumbnail from "../components/PokemonThumbnail";
import LoadingScreen from "./LoadingScreen";

import PokemonTypeController from '../controllers/PokemonTypeController';

const PokemonTypesScreen = ({ navigation }) => {

    const [pokemonThumbnails, setPokemonThumbnails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllPokemonTypes = async () => {
            try {
                PokemonTypeController.fetchAllPokemonTypes().then(pokemonTypes => setPokemonThumbnails(pokemonTypes));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllPokemonTypes();
    }, []);

    const renderPokemonType = ({ item }) => <PokemonTypeThumbnail name={item} />;

    if (loading) return <SafeAreaView><LoadingScreen /></SafeAreaView>;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemonThumbnails}
                renderItem={renderPokemonType}
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

export default PokemonTypesScreen;