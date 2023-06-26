import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Items = () => {
  const isFocused = useIsFocused();
const navigation = useNavigation();
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   getItems();
  // }, [isFocused]);
  // const getItems = () => {
  //   firestore()
  //     .collection('items')
  //     .get()
  //     .then(querySnapshot => {
  //       console.log('Total users: ', querySnapshot.size);
  //       let tempData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //         tempData.push({
  //           id: documentSnapshot.id,
  //           data: documentSnapshot.data(),
  //         });
  //       });
  //       setItems(tempData);
  //       console.log(tempData)
  //     });
  // };
  // const deleteItems = () => {
  //   firestore()
  //     .collection('items')
  //     .doc('docId')
  //     .delete()
  //     .then(() => {
  //       console.log('Item deleted!');
  //       getItems();
  //     });
  // }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image source={{ uri: item.data.imageURL }}
                style={styles.itemImage} />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item.data.name}</Text>
                <Text style={styles.descText}>{item.data.description}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>{'$' + item.data.price}</Text>
                  <Text style={styles.discPriceText}>{'$' + item.data.discountPrice}</Text>
                </View>
              </View>
              <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={()=>{
                           navigation.navigate('EditItems',{
                            data:item.data,
                            id:item.id,
                           });
                }}>
                  <Image style={styles.icon}
                    source={require('../../assets/images/edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  // deleteItems(item.id);
                   }
                }>
                  <Image style={[styles.icon, { marginTop: 30 }]}
                    source={require('../../assets/images/delete.png')} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>

  )
}

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 20,
    borderRadius: 10,
    height: 110,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    width: '50%',
    margin: 10,
  },

  nameText: {
    fontSize: 18,
    fontWeight: '700',
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceView: {
    alignItems: 'center',
    flexDirection: 'row',

  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'green',
  },
  discPriceText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  icon: {
    width: 24,
    height: 24,
  }

});
