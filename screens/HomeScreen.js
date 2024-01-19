import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";


const HomeScreen = ({ navigation }) => (
    <SafeAreaView>
        <View>
            <View><Text>Welcome</Text></View>
            <View>
                <Button
                    title="FirstGenPokemons"
                    onPress={() => navigation.navigate('FirstGenPokemons')}
                />
            </View>
            <View>
                <Button
                    title="PokemonTypes"
                    onPress={() => navigation.navigate('PokemonTypes')}
                />
            </View>
            <View>
                <Button
                    title="PokemonColors"
                    onPress={() => navigation.navigate('PokemonColors')}
                />
            </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS == 'android' ? 20 : 50
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});


export default HomeScreen;