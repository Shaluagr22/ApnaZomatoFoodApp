import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import React,{useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const SignIn = ({navigation}) => {
  const [mobileNumber,setMobileNumber] = useState('');
  // useEffect(()=>{
  // getData();
  // },[]);
//   const userSignIn = async () => {
//     const users = await firestore().collection('user').get();
//     if (
//       mobileNumber == users.docs[0]._data.MobileNumber
//       ) {
//     navigation.navigate('Home');
//     alert('Welcome to ApnaZomato')
//     }
//     else{
//       alert('wrong Mobile no.');
//     }
//     console.log(users.docs[0]._data);
//   };
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Food Delivery App</Text>
      <Text style={styles.loginText}>Log in or Sign up</Text>
        <TextInput
        placeholder="Enter Phone Number"
        style={styles.input}
        value={mobileNumber}
        onChangeText = {text => setMobileNumber(text)}
        />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <View style={styles.socialBtnView}>
      <View style={styles.socialBtn}>
        <Image style={styles.socialImg} source={require('../../assets/images/google.png')}/>
      </View>
      <View style={[styles.socialBtn,{marginLeft:20}]}>
        <Image style={styles.socialImg} source={require('../../assets/images/dot.png')}/>
      </View>
      </View>
      {/* <Text style={styles.termText}>By continuing,you agree to our Terms of Service Privacy Policy & Content Policy</Text> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    root:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },
    heading:{
        fontSize:30,
        color:'red',
        fontWeight:'600',
        alignItems:'center',
        marginTop:100,
        alignSelf:'center',

    },
    loginText:{
        fontSize:15,
        color:'black',
        fontWeight:'600',
        alignSelf:'center',
        marginTop:30,
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
        backgroundColor:'red',
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
        fontWeight:'700',
    },
    orText:{
        alignSelf:'center',
        marginVertical:20,
        fontWeight:'600',
        color:'black',
    },
    socialBtnView:{
        flexDirection:'row',
        alignSelf:'center',
        // justifyContent:'space-evenly',

    },
    socialBtn:{
        width:60,
        height:60,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#b9b9b9',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    socialImg:{
        width:40,
        height:40,
    },
    termText:{
        alignSelf:'center',
        position:'absolute',
        bottom:0,
        width:'70%',
        textAlign:'center',
        fontWeight:'600',
        color:'black',
    }
});