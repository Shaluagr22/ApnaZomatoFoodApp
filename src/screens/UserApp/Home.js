import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Categories from '../../components/Home/Categories';
import FoodCategories from '../../components/Home/FoodCategories';
import Restaurant from '../../components/Home/Restaurant';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.h1}>
          <Ionicons name='location-sharp' color={"#E52B50"} size={35} style={{ alignSelf: 'center' }} />
          <View style={styles.h2}>
            <View style={styles.h3}>
              <Text style={styles.hText1}>Home</Text>
              <MaterialIcons name='keyboard-arrow-down' size={25} color="black" style={{ alignSelf: 'center' }} />
            </View>
            <Text style={styles.hText2}>235,Silver Crown...</Text>
          </View>
        </View>
        <Ionicons name='person-circle' size={55} color={"#b9b9b9"} />
      </View>
      <View style={styles.searchBar}>
        <View style={styles.sb}>
          <Ionicons name='ios-search' color={"#E52B50"} size={30} style={{ alignSelf: 'center' }} />
          <TextInput placeholder='Restaurant name,cuisines,or a dish'
            style={{ paddingLeft: 5 }} />
        </View>
        <FontAwesome name='microphone' color={"#E52B50"} size={25} style={{ alignSelf: 'center' }} />
      </View>
      <Categories/>
      <FoodCategories/>
      <Restaurant/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  h1: {
    flexDirection: 'row',
  },
  h2: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  h3: {
    flexDirection: 'row',
  },
  hText1: {
    fontSize: 23,
    color: '#000',
    fontWeight: 'bold',
  },
  hText2: {
    fontWeight: '600',
  },
  searchBar: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor:'#D8D8D8',
  },
  sb: {
    flexDirection: 'row',
    
  }

})