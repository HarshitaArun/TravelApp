import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

export default class MyCreatePost extends React.Component {
    static navigationOptions = {
      /*drawerLabel: 'Create',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./create.png')}
          style={[styles.img, { tintColor: tintColor }]}
        />
      )*/
    }

  
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
            <Text>Other Screen </Text>
        </View>
      );
    }
  }