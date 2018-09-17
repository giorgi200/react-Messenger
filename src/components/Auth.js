import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import Icon from 'react-native-ionicons'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


const remote = 'https://i.pinimg.com/originals/66/2c/72/662c72d2d83dc5d327652536ff672513.jpg';

export default class Auth extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* ===== IMAGE container ===== */}
        <View style={styles.imgContainer}>
          <Image
            style={styles.LoginBgImg}
            source={{ uri: remote }}
          />
        </View>
        
        {/* ===== IMAGE container ===== */}
        <View style={styles.loginContainer} >
          <FormLabel labelStyle={{color: "#fff"}}>სახელი</FormLabel>
          <FormInput 
            inputStyle={{color: "#fff", paddingLeft: 20 }} placeholder='ჩაწერე სახელი' />
          <FormLabel labelStyle={{color: "#fff"}}>პაროლი</FormLabel>
          <FormInput 
            inputStyle={{color: "#fff", paddingLeft: 20, marginBottom: 20 }} 
            placeholder='ჩაწერე პაროლი' 
          />
          <Button
            buttonStyle={{
              backgroundColor: "teal",
              width: "70%",
              height: 45,
              marginLeft: "auto",
              marginRight: "auto",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 50,
            }}
            title='შესვლა'
          />  


          </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  imgContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  LoginBgImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loginContainer:{
    flex: 1,
    backgroundColor: 'rgba(232, 232, 232, 0.4)',
    justifyContent: 'center',
    paddingRight: "8%",
    paddingLeft: "8%",
  },
  formLabel: {
    color: "#fff"
  }
});

// AppRegistry.registerComponent('Login', () => Login);