import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Items from '../components/tabs/Items';
import Transaction from '../components/tabs/Transaction';
import Add from '../components/tabs/Add';
import Orders from '../components/tabs/Orders';
import Notification from '../components/tabs/Notification';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.root}>
      {selectedTab == 0 ? (
        <Items/>
        ) : selectedTab == 1 ? (
        <Transaction />
        ) : selectedTab == 2 ? (
        <Add />
        ) : selectedTab == 3 ? (
        <Orders />
        ) : (
        <Notification />
        )}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab}
        onPress={()=>setSelectedTab(0)}>
          <Image source={require('../assets/images/items.png')}
            style={[styles.tabIcons,{tintColor:selectedTab ==0 ?'red':'black'}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
         onPress={()=>setSelectedTab(1)}>
          <Image source={require('../assets/images/transaction.png')}
           style={[styles.tabIcons,{tintColor:selectedTab ==1 ?'red':'black'}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
         onPress={()=>setSelectedTab(2)}>
          <Image source={require('../assets/images/add1.png')}
            style={[styles.tabIcons, { width: 33, height: 33 },{tintColor:selectedTab ==2 ?'red':'black'}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
         onPress={()=>setSelectedTab(3)}>
          <Image source={require('../assets/images/orders.png')}
            style={[styles.tabIcons,{tintColor:selectedTab ==3 ?'red':'black'}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
         onPress={()=>setSelectedTab(4)}>
          <Image source={require('../assets/images/notification.png')}
            style={[styles.tabIcons,{tintColor:selectedTab ==4 ?'red':'black'}]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '20%',
  },
  tabIcons: {
    height: 30,
    width: 30,
  }
})