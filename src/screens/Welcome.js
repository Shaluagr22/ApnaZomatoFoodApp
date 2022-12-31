import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation =useNavigation();
    const [selected,setSelected] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ApnaZomato</Text>
      <TouchableOpacity style={styles.adminBtn} onPress={()=>{
        navigation.navigate('Login');
      }}>
        <Text style={styles.adminText}>Admin Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.userBtn} onPress={()=>{
        navigation.navigate('SignIn');
      }}>
        <Text style={styles.userText}>User Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

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
    adminBtn:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:50,
        marginTop:100,
        borderRadius:10,
        alignSelf:'center',
    },
    adminText:{
        fontSize:20,
        color:'white',
        fontWeight:'800',
    },
    userText:{
        fontSize:20,
        color:'red',
        fontWeight:'800',
    },
    userBtn:{
        borderWidth:2,
        borderColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:50,
        marginTop:20,
        borderRadius:10,
        alignSelf:'center',
    },
})