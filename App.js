/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";

import {StackNavigator} from 'react-navigation';

//returns a component
const Router = StackNavigator({
    //routes
    Home: {
      screen: Home
    },

    About: {
      screen: About
    },

    "Contact": {
      screen: Contact
    }
  },
  {
    //options
    initialRouteName:'Home'
  }
);



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Router />

        {/* <About />

        <Contact /> */}

        {/* {
          Platform.select({
            ios: <Text> IoS Text Selected</Text>,
            android: <Text> Android text selected</Text>
          })
        }
        
        <Text style={styles.welcome}>
          Welcome to React App 8!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
