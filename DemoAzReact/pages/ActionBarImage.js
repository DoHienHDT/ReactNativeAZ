import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, Button } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
         source={require('../Images/backButton.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            marginLeft: 15,
          }}
         
        />
      </View>
    );
  }
}