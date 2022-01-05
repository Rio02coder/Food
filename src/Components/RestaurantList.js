import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ImageComponent from './Image Component'
import { withNavigation } from 'react-navigation'

const RestaurantList = ({title, restaurants, navigation}) => {
    if(restaurants.length === 0) {
        return null
    }
    else {
        return (
            <View style={styles.componentStyle}>
                <Text style={styles.titleText}>{title}</Text>
                <FlatList
                    horizontal={true}
                    data={restaurants}
                    keyExtractor={restaurant => restaurant.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('RestaurantScreen', {
                                id: item.id
                            })}>
                                <ImageComponent 
                                url={item.image_url}
                                name={item.name}
                                rating={item.rating}
                                review_count={item.review_count}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 5
    },
    componentStyle: {
        marginVertical: 10
    }
})

export default withNavigation(RestaurantList)