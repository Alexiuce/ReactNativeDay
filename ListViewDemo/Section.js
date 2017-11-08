import React ,{Component} from 'react'

import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native'



// 读取json文件
const Cars = require('./Car.json');




export  default class Section extends Component<{}>{


  // 初始化方法
  constructor(props){
    super(props);

    let getSectionData = (dataBlob,sectionID) => {
      return dataBlob[sectionID];
    };

    let getRowCellData = (dataBlob,sectionID,rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    };



    this.state = {
      dataSource : new ListView.DataSource({
        getSectionData:getSectionData,   // 获取组数据
        getRowData: getRowCellData,                 // 获取行数据
        rowHasChanged : (r1, r2)=> r1 !== r2,
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      })
    }

  }

  // 界面渲染方法
  render(){
    return(
        <View>
          <View style={style.navBartyle}>
            <Text style={style.navTitleStyle}>DAOHANG</Text>
          </View>

           <ListView
           dataSource={this.state.dataSource}
           renderRow={this.rowForCell}
           renderSectionHeader={this.sectionForView}
           />
        </View>
    );
  }


  rowForCell(rowData){
    return(
        <View>
          <Image source={{uri: rowData.icon}} style={style.rowCellStyle}/>
          <Text>{rowData.name}</Text>

        </View>
    )
  }
  sectionForView(sectionData,sectionID){
    return(
        <View>
          <Text>{sectionData}</Text>
        </View>
    )
  }


  // 组件加载完毕,处理复杂数据或网络请求 以及定时器
  componentDidMount() {

    var jsonData = Cars.data;
    var dataBlob = {}, sectionIDs =[],rowsIDs = [],_cars = [];

    for (var i = 0 ; i < jsonData.length; i++){
      sectionIDs.push(i)    // 记录组号
      dataBlob[i] = jsonData[i].title;   // 添加组内容
      _cars = jsonData[i].cars;   // 每组的数据
      rowsIDs[i] = [];

      for (var j = 0; j < _cars.length; j++){
        rowsIDs[i].push(j);  // 记录行号
        dataBlob[i +':' + j] = _cars[j];
      }
    }

    // 更新状态

    this.setState({
      dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowsIDs)
    });

  }

}


const  style = StyleSheet.create({
  navBartyle:{
    marginTop:20,
    height:44,
    backgroundColor:'#3c8900',
    justifyContent:'center',
    alignItems:'center',
  },
  navTitleStyle:{
    backgroundColor:'red',
  },
    textViewStyle:{
      marginTop:20,
    },
  rowCellStyle:{
      width:50,
    height:50,
  },
});