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
  View,
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App1 extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 你好~~~,RN
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.demoStyle}>
          demo text
        </Text>

        <Image source={{uri: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=4ff791f3542c11dfcadcb771024e09b5/ae51f3deb48f8c54b9c0933f39292df5e0fe7f8a.jpg'}}
               style={{width: 300, height: 300}} />

      </View>
    );
  }
}
/*=======================================================*/
export  class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native! 你好~~~,RN
              </Text>
              <Text style={styles.instructions}>
                To get started, edit App.js
              </Text>
              <Text style={styles.instructions}>
                  {instructions}
              </Text>
              <Text style={styles.demoStyle}>
                demo text
              </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
      // alignItems: 'center',
    backgroundColor: '#F5FCFF',
      flexDirection:'row',
      flexWrap:'wrap'
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
      backgroundColor:'red',
    margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
      backgroundColor:'green',
  },
    demoStyle:{
        color:'green',
        backgroundColor:'yellow',
    },
});
