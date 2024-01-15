import { View, Text, StyleSheet, Platform, Image } from "react-native";

const PokemonThumbnail = ({
    name,
    image
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>

            <Image
                style={styles.image}
                source={{ uri: image }}
                accessibilityLabel={name}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    }
})

export default PokemonThumbnail;