import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.backgroudColor}>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroudColor: {
        backgroundColor: 'rgb(230,227,227)',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default SearchBar