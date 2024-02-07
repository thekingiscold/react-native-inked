
import React, { useState } from 'react';
import { View, Image,Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Title from '../components/Title';

const Login = () => {

  // const imageBackground = require("../assets/grey-black-bg.jpg")
  const emailIcon = require("../assets/EmailIcon.png")
  const lockIcon = require("../assets/lockIcon.png")
  const instaIcon = require("../assets/insta_signup_icon.png")
  const pinterestIcon = require("../assets/Pinterest-logo.png")

  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} >
        <Title fontSize={60} textAlign="center"/>
      </View>
      <View style={styles.inputFieldContainer}>
        <View style={{flex: 0.15, marginHorizontal: 10,}}>
          <Text style={{color: 'white', fontWeight: 300, fontSize: 20,}}>Please login to continue</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 0.25, margin: 10, borderWidth: 1, borderColor: 'red', backgroundColor: 'black'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', margin: 10, }}>
            <Image source={emailIcon} resizeMode='contain' style={{ flex: 1, width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }}/>
          </View>
          <View style={{ flex: 0.8, backgroundColor: 'black', justifyContent: 'center', margin: 5 }}>
            <TextInput
            style={{flex: 1}}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email ID"
            keyboardType="default"
            placeholderTextColor='white'
            color='white'
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 0.25, margin: 10, borderWidth: 1, borderColor: 'red', backgroundColor: 'black'}}>
          <View style={{ flex: 0.2, justifyContent: 'center', margin: 10, }}>
            <Image source={lockIcon} resizeMode='contain' style={{ flex: 1, width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }}/>
          </View>
          <View style={{ flex: 0.8, backgroundColor: 'black', justifyContent: 'center', margin: 5 }}>
            <TextInput
            style={{flex: 1}}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor='white'
            color='white'
            secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{color: 'white', fontWeight: 500, fontSize: 12, margin: 10}}>Forget password ?</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 0.20, backgroundColor: 'white', borderRadius: 25, justifyContent: 'center', margin: 10}}>
          <Text style={{color: 'black', fontWeight: 900, fontSize: 20, textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <View style={{ flexDirection: 'row', flex: 0.4, marginHorizontal: 30, backgroundColor: 'black'}}>
          <TouchableOpacity style={{ flex: 0.5, flexDirection: 'row', borderWidth: 0.5, borderColor: 'grey', marginHorizontal: 10, borderRadius: 20 }}>
            <View style={{ flex: 0.5, justifyContent: 'center'}}>
              <Image source={instaIcon} resizeMode='contain' style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }}/>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center'}}>
              <Text style={{color: "white"}}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.5, flexDirection: 'row', borderWidth: 0.5, borderColor: 'grey', marginHorizontal: 10, borderRadius: 20 }}>
            <View style={{ flex: 0.5, justifyContent: 'center'}}>
              <Image source={pinterestIcon} resizeMode='contain' style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }}/>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center'}}>
              <Text style={{color: "white"}}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 0.4, justifyContent: 'center', margin:20, backgroundColor: 'black'}}>
          <Text style={{color: 'white', margin: 12, fontSize: 15, fontWeight: 700}}>Don't have an account? Create <Text onPress={console.log('pressed')} style={{color: 'red'}}>Here</Text></Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    
  },
  titleContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 3
  },
  inputFieldContainer: {
    flex: 0.5,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  signInContainer: {
    flex: 0.2,
    marginHorizontal: 20,
  }

});
export default Login;
