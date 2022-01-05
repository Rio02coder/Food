import React, {useState} from "react";
import { Text, StyleSheet, View , ScrollView} from "react-native";
import SearchBar from "../Components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../Components/RestaurantList";
import {filterRestaurantsWithPrice} from "../Utilities/PriceFilter";

const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('')
    const [SearchApi, results, errorMessage] = useRestaurants()

    return (
        <View style={styles.viewStyle}> 
            <SearchBar term={searchTerm} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => {SearchApi(searchTerm)}}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList title="Cost Effective"
                restaurants={filterRestaurantsWithPrice(results,'$')}
                />
                <RestaurantList title="Bit Pricier"
                restaurants={filterRestaurantsWithPrice(results,'$$')}
                />
                <RestaurantList title="Big Spender"
                restaurants={filterRestaurantsWithPrice(results,'$$$$')}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 17
    },
    viewStyle:{
        flex: 1
    }
})

export default SearchScreen