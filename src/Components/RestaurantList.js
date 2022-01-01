import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const RestaurantList = ({title}) => {
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default RestaurantList