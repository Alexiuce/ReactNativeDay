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
  Image,
  ListView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const Dimensions = require('Dimensions');

const SCREEN_WIDTH = Dimensions.get('window').width;

const  Wine = require('./Wine.json');

export default class Home extends Component<{}> {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource : ds.cloneWithRows(Wine),
    };

  }


  render() {
    return (
          <ListView
              style={{marginTop:20}}
              dataSource={this.state.dataSource}
              renderRow={this.cellForRow}
          />
    );
  }


  cellForRow(rowData,sectionID,rowID,rowHeight){
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert("点击了第"+ rowID+"行")}}>
        <View style={styles.cellStyle}>
          <Image style={styles.leftPicStyle}/>
           <View style={styles.rightViewStyle}>
            <Text style={styles.nameStyle}>{rowData.name}</Text>
             <Text>{"$"+ rowData.money}</Text>
           </View>

        </View>
        </TouchableOpacity>
    );

}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  leftPicStyle: {
    width:80,
    height:80,
    backgroundColor:'red',
  },
  cellStyle: {
    flexDirection:"row",
    borderBottomWidth:0.5,
    borderBottomColor:"#e8e8e8",
  },
  nameStyle:{

    width:SCREEN_WIDTH * 0.7,
    marginBottom:10,

  },
  rightViewStyle:{
    padding:10,
  },
});