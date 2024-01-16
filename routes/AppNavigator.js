// src/routes/AppNavigator.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstGenPokemons from "../screens/FirstGenPokemonsScreen";
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
                component={FirstGenPokemons}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;