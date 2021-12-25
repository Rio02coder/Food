import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange}) => {
    return (
        <View style={styles.backgroudStyle}>
            <Feather name="search" size={30} style={styles.searchIconStyle}/>
            <TextInput 
            placeholder="search" 
            style={styles.textInputStyle}
            value={term}
            onChangeText={(newTerm) => onTermChange(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroudStyle: {
        backgroundColor: 'rgb(230,227,227)',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    textInputStyle: {
        flex: 1,
        marginLeft: 7,
        fontSize: 18
    },
    searchIconStyle: {
        marginVertical: 10,
        marginLeft: 5
    }
})

export default SearchBar