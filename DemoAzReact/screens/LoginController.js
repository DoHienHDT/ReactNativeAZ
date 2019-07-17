import React from "react";
import { Image, StyleSheet, View, Switch, TextInput, Dimensions, ImageBackground, TouchableOpacity, Text} from "react-native";
import {Component} from 'react'
import colors from "../config/colors";
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window')

export default class LoginController extends Component { 
    render() {
        return (
            <ImageBackground  source={require('../Images/unnamed.jpg')} style ={styles.backgroundContainer}>
                                    <View style={styles.logoContainer}>
                                    <Image source={require('../Images/app_mobile_02.png')} style={styles.logo} />
                                    </View>
                                    
                                    <View style = {styles.inputContainer}>
                                        {/* <Icon name={'person'} size= {28} color={'rgba(255,255,255,0.7)'}
                                            style={styles.inputIcon}
                                        /> */}
                                        <TextInput 
                                            style={styles.input}
                                            placeholder={'Tài khoản'}
                                            placeholderTextColor = {'rgba(255,255,255,0.7)'}
                                            underlineColorAndroid = 'transparent'
                                        />
                                    </View>
                                    <View style = {styles.inputContainer}>
                                        {/* <Icon name={'person'} size= {28} color={'rgba(255,255,255,0.7)'}
                                            style={styles.inputIcon}
                                        /> */}
                                        <TextInput 
                                            style={styles.input}
                                            placeholder={'Mật khẩu'}
                                            placeholderTextColor = {'rgba(255,255,255,0.7)'}
                                            underlineColorAndroid = 'transparent'
                                            secureTextEntry = {true}
                                        />
                                    </View>
                                  
                                        <TouchableOpacity style={styles.btnLogin}>
                                            <Text style={styles.text}>Đăng nhập</Text>
                                        </TouchableOpacity>

                                        <Text style={styles.contact}>Bạn chưa có tài khoản đăng nhập?</Text>
                                   
                                    
            </ImageBackground>
        
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoContainer: {
        alignItems:'center'
    },
    container: {
      flex: 1,
      width: null,
      height: null,
      alignItems: "center",
      justifyContent: "center"
    },
    inputContainer: {
        marginBottom: 10
    },
    logo: {
     marginBottom: 150,
      width: 200,
      height: 200
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    },
    switch: {
      left: 250,
      bottom: 50
    },
    input: {
        width: WIDTH - 55,
        height: 50,
        borderRadius: 25,
        fontSize: 16,
        
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top:10,
        left: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 80
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    },
    contact: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        marginTop:80,
        marginLeft:10
    }
  });
