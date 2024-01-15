import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstGenPokemons from "./components/FirstGenPokemonsScreen";
import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
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
}
