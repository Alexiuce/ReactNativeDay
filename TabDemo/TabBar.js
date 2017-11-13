import React,{Component} from 'react'

import {
  View,
  Text,
  Platform,
  TabBarIOS,
  StyleSheet,
  NavigatorIOS,
} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});


export  default  class TabBar extends Component<{}>{



  constructor(props){
    super(props)

    this.state = {
      selectedTabBarItem : 'home',
      topTitle:'Home',
    }
  }


  render(){
    return(
        <View style={style.homeStyle}>
          {/*顶部导航视图*/}
          <View style={style.navTop}>
              <Text>{this.state.topTitle}</Text>
          </View>


          {/*底部TabBar*/}
          <TabBarIOS barTintColor={'black'}>
            {/*home*/}
            <TabBarIOS.Item
                systemIcon={'contacts'}
                selected={this.state.selectedTabBarItem == 'home'}
                onPress={()=>{this.setState({selectedTabBarItem : 'home',topTitle:'Home'})}}>

              <View style={style.homePage}>
                <Text>Home page</Text>
              </View>
            </TabBarIOS.Item>

            {/*bookmark*/}
            <TabBarIOS.Item
                systemIcon={'bookmarks'}
                selected={this.state.selectedTabBarItem == 'book'}
                onPress={()=>{this.setState({selectedTabBarItem : 'book',topTitle:'Book'})}}
            >
              <View style={style.bookPage}>
                <Text>Bookmars page</Text>
              </View>
            </TabBarIOS.Item>
            {/*down*/}
            <TabBarIOS.Item
                systemIcon={'downloads'}
                selected={this.state.selectedTabBarItem == 'down'}
                onPress={()=>{this.setState({selectedTabBarItem : 'down',topTitle:'Down'})}}>
              <View style={style.downPage}>
                <Text>Downloads page</Text>
              </View>
            </TabBarIOS.Item>
            {/*favorite*/}
            <TabBarIOS.Item
                systemIcon={'favorites'}
                selected={this.state.selectedTabBarItem == 'favor'}
                onPress={()=>{this.setState({selectedTabBarItem : 'favor',topTitle:'Favor'})}}>
              <View style={style.favPage}>
                <Text>Favorite page</Text>
              </View>
            </TabBarIOS.Item>

          </TabBarIOS>
        </View>
    )
  }
}

const style = StyleSheet.create({

  homeStyle:{
    flex:1,
  },

  homePage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',

  },
  bookPage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',

  },
  downPage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow',

  },
  favPage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',

  },

  navTop:{

    backgroundColor:'#00ffff',
    height:64,
    justifyContent:'center',
    alignItems:'center',

  },
  tabBarStyle:{

  },

})
