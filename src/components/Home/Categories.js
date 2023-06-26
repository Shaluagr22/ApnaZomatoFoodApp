import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react';

const Categories = () => {
    const data = [
        {
            id: 1,
            name: 'fastest delivery',
        },
        {
            id: 2,
            name: 'rating 4.0+',
        },
        {
            id: 3,
            name: 'offers',
        },
        {
            id: 4,
            name: 'cuisines',
        },
        {
            id: 5,
            name: 'pro',
        },
    ]
    return (
        <View style={{marginTop:6}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
                data={data}
                renderItem={({ item }) => (
                    <Pressable style={{backgroundColor:'#E25822',margin:7,padding:5,borderRadius:5}}>
                        <Text style={{color:'#fff'}}>{item.name}</Text>
                    </Pressable>
                )
                } />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row'
    }
})