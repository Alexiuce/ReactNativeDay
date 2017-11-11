import React, {Component} from 'react'

import {
  View,
  Platform,
  Text,
  StyleSheet,
} from 'react-native'


export  default class  Discover extends Component<{}>{

  render(){
    return(
        <View style={styel.containerStyle}>
          <Text>Discover</Text>
        </View>
    );
  }
}


const styel = StyleSheet.create({
  containerStyle:{
    flex: 1,
    backgroundColor:"gray",
  },
});