import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
  import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const [emailfocus, setEmailfocus] = useState(false) // false means it is not selected
  const [email, setEmail] = useState('');
  const [passwordfocus, setPasswordfocus] = useState(false)
  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState('');

  return (
    <View>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.inputView}>
        <AntDesign name="user" size={24} color={emailfocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={showpassword === false ? true : false}
          onFocus={() => {
            setPasswordfocus(true);
            setEmailfocus(false);
          }}
        />
        <Octicons name={showpassword === false ? 'eye-closed' : 'eye'} size={24} color={'gray'}
          onPress={() =>
            setShowpassword(!showpassword)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
       navigation.navigate('Home')
      }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.or}>or</Text>
      <Text style={styles.signwithText}>Sign In with</Text>
      <View style={styles.socialBtnView}>
        <View style={styles.socialBtn}>
          <Image style={styles.socialImg} source={require('../../assets/images/google.png')} />
        </View>
        <View style={[styles.socialBtn, { marginLeft: 20 }]}>
          <Image style={styles.socialImg} source={require('../../assets/images/facebook.png')} />
        </View>
      </View>
      <View style={styles.hrLine}/>
      <Text style={styles.signup}>Don't have an account?
          <TouchableOpacity onPress = {() => 
          {
          navigation.navigate('SignUp');
          }}>
        <Text style={{color:'red',fontWeight:'bold'}}> Sign Up</Text>
        </TouchableOpacity>
      </Text>

    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'red',
    fontWeight: '700',
    alignItems: 'center',
    marginTop: 100,
    alignSelf: 'center',
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 20,
    borderRadius: 10,
  },
  input: {
    paddingLeft: 10,
    fontSize: 18,
    width: '80%',
  },
  btn: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
  },
  forgot: {
    alignSelf: 'center',
    color: 'grey',
    marginTop: 10,
  },
  or: {
    alignSelf: 'center',
    marginVertical: 10,
    color: 'red',
    fontWeight: '700',
  },
  signwithText: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'grey',
    marginVertical: 10,
  },
  socialBtnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,

  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor:'white',
    elevation:20,
    // borderWidth: 1,
    // borderColor: '#b9b9b9',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialImg: {
    width: 40,
    height: 40,
  },
  hrLine:{
    width:'80%',
    borderWidth:1,
    borderColor:'#e0e0e0',
    marginVertical:20,
    alignSelf:'center',
  },
  signup:{
    alignSelf:'center',
    color:'black',
  },
});
