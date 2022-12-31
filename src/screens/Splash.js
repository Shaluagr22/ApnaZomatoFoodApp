import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';


const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Welcome');
        },2000);
    },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ApnaZomato</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        fontSize:30,
        color:'red',
        fontWeight:'800',
    },
});
