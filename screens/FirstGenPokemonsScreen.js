
import { StyleSheet, SafeAreaView, Platform, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';

import PokemonThumbnail from "../components/PokemonThumbnail";
import LoadingScreen from "./LoadingScreen";

const pokeApiPath = "https://pokeapi.co/api/v2/";
const pokeApiQuery = "pokemon?limit=151&offset=0";

const FirstGenPokemons = ({ navigation }) => {

    const firstGenPokemonsPath = `${pokeApiPath}${pokeApiQuery}`;
    const [firstGenPokemonsThumbnails, setFirstGenPokemonsThumbnails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            const firstGenPokemonsResponse = await fetch(firstGenPokemonsPath);
            const firstGenPokemonsResponseBody = await firstGenPokemonsResponse.json();
            try {
                const promises = firstGenPokemonsResponseBody.results.map(async result => {
                    const pokemonUrl = result.url;
                    const pokemonResponse = await fetch(pokemonUrl);

                    if (!pokemonResponse.ok) {
                        throw new Error(`Failed to fetch data from ${pokemonUrl}`);
                    }

                    const pokemonResponseBody = await pokemonResponse.json();
                    return {
                        "name": result.name.charAt(0).toUpperCase() + result.name.slice(1),
                        "image": pokemonResponseBody.sprites.front_default
                    };
                });

                const responses = await Promise.all(promises);
                const mergedResponse = responses.reduce((acc, response) => acc.concat(response), []);
                setFirstGenPokemonsThumbnails(mergedResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchFirstGenPokemons();
    }, []);

    const renderPokemon = ({ item }) => <PokemonThumbnail name={item.name} image={item.image} />;

    if (loading) return <SafeAreaView style={styles.container}><LoadingScreen /></SafeAreaView>;

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

export default FirstGenPokemons;