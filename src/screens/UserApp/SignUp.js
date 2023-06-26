import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  // const navigation = useNavigation();
  const [fullnamefocus, setFullnamefocus] = useState(false);
  const [emailfocus, setEmailfocus] = useState(false)
  const [mobilefocus, setMobilefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [confirmpasswordfocus, setConfirmpasswordfocus] = useState('');
  const [showpassword, setShowpassword] = useState(false);
  const [showconfirmpassword, setShowconfirmpassword] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputView}>
        <AntDesign name="user" size={24} color={fullnamefocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Full name"
          style={styles.input}
          value={fullnamefocus}
          onChangeText={text => setFullnamefocus(text)}
          onFocus={() => {
            setFullnamefocus(true);
            setEmailfocus(false);
            setMobilefocus(false);
            setPasswordfocus(false);
            setConfirmpasswordfocus(false);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <FontAwesome name="envelope-o" size={24} color={emailfocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onFocus={() => {
            setFullnamefocus(false);
            setEmailfocus(true);
            setMobilefocus(false);
            setPasswordfocus(false);
            setConfirmpasswordfocus(false);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <AntDesign name="mobile1" size={24} color={mobilefocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Mobile number"
          style={styles.input}
          onFocus={() => {
            setFullnamefocus(false);
            setEmailfocus(false);
            setMobilefocus(true);
            setPasswordfocus(false);
            setConfirmpasswordfocus(false);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={showpassword === false ? true : false}
          onFocus={() => {
            setFullnamefocus(false);
            setEmailfocus(false);
            setMobilefocus(false);
            setPasswordfocus(true);
            setConfirmpasswordfocus(false);
            setShowpassword(true);
          }}
        />
        <Octicons name={showpassword === false ? 'eye-closed' : 'eye'} size={24} color={'gray'}
          onPress={() =>
            setShowpassword(!showpassword)}
        />
      </View>
      <View style={styles.inputView}>
        <MaterialCommunityIcons name="lock-outline" size={24} color={confirmpasswordfocus === true ? 'red' : 'gray'} />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={showconfirmpassword === false ? true : false}
          onFocus={() => {
            setFullnamefocus(false);
            setEmailfocus(false);
            setMobilefocus(false);
            setPasswordfocus(false);
            setConfirmpasswordfocus(true);
            setShowconfirmpassword(true);
          }}
        />
        <Octicons name={showconfirmpassword === false ? 'eye-closed' : 'eye'} size={24} color={'gray'}
          onPress={() =>
            setShowconfirmpassword(!showconfirmpassword)}
        />
      </View>
      <Text style={styles.addressText}>Please enter you address</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter your address"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
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
      <View style={styles.hrLine} />
      <Text style={styles.SignUp}>Already an account?
        <TouchableOpacity onPress={() => {

        }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}> Sign Up</Text>
        </TouchableOpacity>
      </Text>

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'red',
    fontWeight: '700',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginVertical:8,
    paddingHorizontal: 10,
    height: 50,
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
  addressText:{
    fontSize:18,
    alignSelf:'center',
  },
  btn: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    marginTop:5,
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
    marginVertical:5,
    color: 'red',
    fontWeight: '700',
  },
  signwithText: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'grey',
    // marginVertical: 10,
  },
  socialBtnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:5,

  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    elevation: 20,
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
  hrLine: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 20,
    alignSelf: 'center',
  },
  SignUp: {
    alignSelf: 'center',
    color: 'black',
  },
});
