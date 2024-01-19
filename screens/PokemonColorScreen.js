// src/screens/PokemonTypeScreen.js

import { StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import PokemonColorThumbnail from "../components/PokemonColorThumbnail";
import LoadingScreen from "./LoadingScreen";

import PokemonColorController from '../controllers/PokemonColorController';

const PokemonColorsScreen = ({ navigation }) => {

    const [pokemonColorsThumbnails, setPokemonColorsThumbnails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllPokemonColors = async () => {
            try {
                PokemonColorController.fetchAllPokemonColors().then(pokemonColors => setPokemonColorsThumbnails(pokemonColors));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllPokemonColors();
    }, []);

    const renderPokemonColor = ({ item }) => <PokemonColorThumbnail name={item} />;

    if (loading) return <SafeAreaView><LoadingScreen /></SafeAreaView>;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemonColorsThumbnails}
                renderItem={renderPokemonColor}
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

export default PokemonColorsScreen;