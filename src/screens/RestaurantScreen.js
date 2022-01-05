import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import yelp from '../api/yelp'

const restaurantScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const [restaurant, setRestaurant] = useState(null)

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`)
        setRestaurant(response.data)
    }
    useEffect(() => {
        getResults(id)
    }, [])
    if(restaurant === null){
        return null
    }
    else {
        return(
            <ScrollView>
                <View>
                    <Text style={styles.restaurantNameStyle}>{restaurant.name}</Text>
                    <FlatList
                        data={restaurant.photos}
                        keyExtractor={item => item}
                        style={{marginBottom:10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => {
                            return <Image source={{uri:item}} style={styles.imageStyle}/>
                        }}
                    />
                    {restaurant.is_closed ? <Text style={styles.closedStyle}>Closed</Text> : <Text style={styles.openStyle}>Open</Text>}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    errorString: {
        color: 'red',
        fontSize: 35,
        fontWeight: 'bold'
    },
    restaurantNameStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 5
    },
    openStyle: {
        fontSize: 15,
        color: 'green',
        marginLeft: 5
    },
    closedStyle: {
        fontSize: 15,
        color: 'red',
        marginLeft: 5
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginLeft: 5,
        marginTop: 10
    },
})

export default restaurantScreen