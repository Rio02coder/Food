import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";

const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('')
    return (
        <View>
            <SearchBar term={searchTerm} onTermChange={(newTerm) => setTerm(newTerm)}/>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen