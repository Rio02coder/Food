import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData'

const ImageComponent = ({url, name, rating, review_count}) => {
    return (
        <View>
            <Image
                style={styles.imageStyle}
                source={{uri: url}}
            />
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.reviewRatingStyle}> {rating} stars, {review_count} reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginLeft: 5,
        marginTop: 10
    },
    textStyle: {
        fontSize: 18,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    reviewRatingStyle: {
        fontSize: 15,
        color: 'rgb(130, 125, 125)'
    }
})

export default ImageComponent