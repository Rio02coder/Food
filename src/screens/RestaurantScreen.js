import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView, Dimensions} from 'react-native';
import yelp from '../api/yelp'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

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
                <View style={{flex:1}}>
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
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: restaurant.coordinates.latitude,
                        longitude: restaurant.coordinates.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}>
                            <Marker coordinate={{ latitude : restaurant.coordinates.latitude , longitude : restaurant.coordinates.longitude }} />
                    </MapView>
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
    map: {
        height: 250,
        width: Dimensions.get('window').width,
        marginTop: 20,
        marginHorizontal: 5,
        borderRadius: 5,
        flex: 1
    }
})

export default restaurantScreen