import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';



export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
       /*drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./home.png')}
          style={[styles.img, { tintColor: tintColor }]}
        />
      )*/
    };
  
    render() {
      return ( 
          <View>
            <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}>
            <Image
                source={require('./Menu.png')}
                style={styles.img}
            />
               
            </TouchableOpacity>
        <Text>Home screen</Text>
        </View>  
      )
    }
  }