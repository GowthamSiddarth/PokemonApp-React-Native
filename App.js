
import { StyleSheet, SafeAreaView, Platform, ScrollView, FlatList, Text, View } from 'react-native';
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from 'react';

const pokeApiPath = "https://pokeapi.co/api/v2/";
const pokeApiQuery = "pokemon?limit=151&offset=0";

export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  const firstGenPokemonsPath = `${pokeApiPath}${pokeApiQuery}`;
  const [firstGenPokemonsDetails, setFirstGenPokemonsDetails] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirstGenPokemons = async () => {
      try {
        const firstGenPokemonsResponse = await fetch(firstGenPokemonsPath);
        const firstGenPokemonsResponseBody = await firstGenPokemonsResponse.json();

        // const promises = firstGenPokemonsResponseBody.results.map(async result => {
        //   const response = await fetch(result.url);

        //   if (!response.ok) {
        //     throw new Error(`Failed to fetch data from ${api}`);
        //   }

        //   const rawData = await response.json();
        //   return rawData.name;
        // });

        // const results = await Promise.all(promises);
        // const mergedData = results.reduce((acc, result) => acc.concat(result), []);

        // setFirstGenPokemonsDetails(mergedData);

        const firstGenPokemonsNames = firstGenPokemonsResponseBody.results.map(result => result.name);
        setFirstGenPokemonsDetails(firstGenPokemonsNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchFirstGenPokemons();
  }, []);

  const renderPokemon = ({ item }) => <View><Text>{item}</Text></View>;

  if (loading) return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={firstGenPokemonsDetails} renderItem={renderPokemon} />
      {/* <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView> */}
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
