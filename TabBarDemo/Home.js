import React,{Component} from 'react'
import {
  View,
  TabBarIOS,
  Platform,
  StyleSheet,
} from 'react-native'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});
export  default  class Home extends Component<{}>{

  render(){
    return(
        <View style={homeStyle.containerStyle}>
          <View style={homeStyle.navTopStyle}>
            <text>Home View</text>
          </View>

          <text>{instructions}</text>
        </View>
    )
  }

}


const homeStyle = StyleSheet.create({
  containerStyle:{
    flex:1,
    marginTop:20,

  },
  navTopStyle:{
    height:40,
    backgroundColor:'#00ced1',
  },
});