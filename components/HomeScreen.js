import React from "react";
import { StyleSheet, View, Text } from "react-native";


const HomeScreen = () => (
    <View style={[styles.container, styles.horizontal]}>
        <Text>Welcome</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default LoadingScreen;