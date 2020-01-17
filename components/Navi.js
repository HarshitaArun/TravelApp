import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MyHomeScreen from './homescreen';
import  MyCreatePost from './createscreen'
import MyProfileView from './profileview'
import LogOut from './logout'
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Create: {
      screen: MyCreatePost,
    },
    Profile: {
        screen: MyProfileView
    },
    LogOut: {
        screen: LogOut
    }

  });
  
  const MyNavigator = createAppContainer(MyDrawerNavigator);

  export default class Navi extends Component{
      render(){
          return (<MyNavigator/>)
      }
  }