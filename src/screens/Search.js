import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('')
    const [SearchApi, results, errorMessage] = useRestaurants()

    return (
        <View>
            <SearchBar term={searchTerm} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => {SearchApi()}}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Text>Search results : {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 17
    }
})

export default SearchScreen