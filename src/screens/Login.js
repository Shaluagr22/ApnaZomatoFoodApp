import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // useEffect(()=>{
  // getData();
  // },[]);
  const adminLogin = async () => {
    const users = await firestore().collection('admin').get();
    if (
      email == users.docs[0]._data.Email &&
      password == users.docs[0]._data.password
      ) {
    navigation.navigate('Home');
    alert('Welcome to ApnaZomato')
    }
    else{
      alert('wrong email or password');
    }
    console.log(users.docs[0]._data);
  };
  return (
    <View>
      <Text style={styles.heading}>Admin Login</Text>
        <TextInput
        placeholder="Enter your Email"
        style={styles.input}
        value={email}
        onChangeText = {text => setEmail(text)}
        />
        <TextInput
        placeholder="Enter Password"
        style={styles.input}
        value={password}
        onChangeText = {text => setPassword(text)}
        />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        if (email!== '' && password!== '') {
          adminLogin();
        }
        else{
          alert('Please enter your Data')
        }
      }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontSize:20,
        color:'#000',
        fontWeight:'800',
        alignItems:'center',
        marginTop:100,
        alignSelf:'center'

    },
    input:{
        paddingLeft:20,
        height:50,
        alignItems:'center',
        marginTop:30,
        borderWidth:1.5,
        borderRadius:10,
        width:'90%',
        alignSelf:'center',
        fontSize:18,
    },
    btn:{
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:50,
        marginTop:50,
        borderRadius:10,
        alignSelf:'center',
    },
    btnText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'800',
    }
});