import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img}
        source={require('./logo.png')}/>
        <ImageBackground style={styles.bg}
        source={require('./bg.jpg')}/>
        <Text style={styles.title}>Your Travel Guide</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'white',
            flex: 1, 
            justifyContent: "center", 
            alignItems: "center" 
        },
        title: {
          fontWeight: 'bold',
          fontSize:  24

        },
        img: {
          width:300, height:100, alignContent:'center', justifyContent: "center"
        },

        bg: {
          position:'absolute', top:0, left:0, bottom:0, right:0, opacity:0.3
        }
    }
)
  