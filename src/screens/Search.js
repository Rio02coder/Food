import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";

const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('')
    return (
        <View>
            <SearchBar term={searchTerm} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermEnter={(term) => {console.log(`${term} was added.`)}}
            />
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen