// src/routes/AppNavigator.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstGenPokemonsScreen from "../screens/FirstGenPokemonsScreen";
import PokemonTypesScreen from "../screens/PokemonTypeScreen";
import PokemonColorsScreen from "../screens/PokemonColorScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="FirstGenPokemons"
                component={FirstGenPokemonsScreen}
            />
            <Stack.Screen
                name="PokemonTypes"
                component={PokemonTypesScreen}
            />
            <Stack.Screen
                name="PokemonColors"
                component={PokemonColorsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;