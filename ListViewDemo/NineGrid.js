import React, {Component} from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,

} from 'react-native'



const ShareData = require('./shareData.json');

const SharePicture = [
  require('./ShareImage/icon1.png'),
  require('./ShareImage/icon2.png'),
  require('./ShareImage/icon3.png'),
  require('./ShareImage/icon4.png'),
  require('./ShareImage/icon5.png'),
  require('./ShareImage/icon6.png'),
  require('./ShareImage/icon7.png'),
  require('./ShareImage/icon8.png'),
  require('./ShareImage/icon9.png'),
  require('./ShareImage/icon10.png')];

const Dimensions = require('Dimensions');
const SCREEN_WIDTH = Dimensions.get('window').width;
const COL = 3;
const CELL_WIDTH = 100;
const H_MARGIN = (SCREEN_WIDTH - COL * CELL_WIDTH) / (COL + 1);



export  default  class NineGrid extends Component<{}>{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(ShareData.data),
    }
  }


  render(){
    return(
       <ListView
           dataSource={this.state.dataSource}
           renderRow={this.configCell}
           contentContainerStyle={style.contentViewStyle}
       />
    );

  }

  configCell(rowData,sectionID,rowID){
    return(
        <TouchableOpacity activeOpacity={0.5}>
        <View style={style.cellViewStyle}>
          <Image source={SharePicture[rowID]} style={style.picStyle}/>
          <Text> {rowData.title} </Text>
        </View>
        </TouchableOpacity>
    );
  }

}

const style = StyleSheet.create({
  contentViewStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:25,
  },
  cellViewStyle:{
    // flexDirection:'row',
    width:CELL_WIDTH,
    height:CELL_WIDTH,
    marginBottom:20,
    marginLeft:H_MARGIN,

    justifyContent:'center',
    alignItems:'center',

  },
  picStyle:{
    width:50,
    height:50,
  },
});