import React, {Component} from  'react'

import {
  View,
  TabBarIOS,
  StyleSheet,
  NavigatorIOS,
} from 'react-native'


import HomeView from "../Home/Home"
import DiscoverView from "../Discover/discover"
import MessageView from "../Message/Message"
import ProfileView from "../Profile/Profile"

export default class AppMain extends Component<{}>{



  constructor(props){
    super(props)

    this.state = {
      selectedItme : 'home'
    }
  }



  render(){
    return(
        <View style={style.mainViewStyle}>


          <TabBarIOS
              // barTintColor={''}
              tintColor={'orange'}

          >
            {/*首页*/}
            <TabBarIOS.Item
                title="首页"
                icon={require("./TabBar/tabbar_home.png")}
                selected={this.state.selectedItme == "home"}
                onPress={()=>{this.setState({selectedItme:'home'})}}
            >

              {/*导航控件*/}
              <NavigatorIOS
                  tintColor={"orange"}
                  style={{flex:1}}
                  initialRoute={
                    {component:HomeView,
                      title:"首页",
                      leftButtonIcon:require('./NavigationBar/navigationbar_friendattention.png'),
                      rightButtonIcon:require('./NavigationBar/navigationbar_pop.png'),
                    }
                  }
              />


            </TabBarIOS.Item>

            {/*消息*/}
            <TabBarIOS.Item
                title="消息"
                icon={require("./TabBar/tabbar_message_center.png")}
                selected={this.state.selectedItme == "message"}
                onPress={()=>{this.setState({selectedItme:'message'})}}
            >

              {/*导航控件*/}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute={
                    {component:MessageView,
                      title:"消息"
                    }
                  }
              />
            </TabBarIOS.Item>

            {/*发现*/}
            <TabBarIOS.Item
                title="发现"
                icon={require("./TabBar/tabbar_discover.png")}
                selected={this.state.selectedItme == "discover"}
                onPress={()=>{this.setState({selectedItme:'discover'})}}
            >
              {/*导航控件*/}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute={
                    {component:DiscoverView,
                      title:"发现"
                    }
                  }
              />
            </TabBarIOS.Item>

            {/*我*/}
            <TabBarIOS.Item
                title="我"
                icon={require("./TabBar/tabbar_profile.png")}
                selected={this.state.selectedItme == "profile"}
                onPress={()=>{this.setState({selectedItme:'profile'})}}
            >
              {/*导航控件*/}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute={
                    {component:ProfileView,
                      title:"我"
                    }
                  }
              />

            </TabBarIOS.Item>

          </TabBarIOS>
        </View>
    );
  }

}



const  style = StyleSheet.create({
  mainViewStyle:{
    flex:1,
    // backgroundColor:'#00ffff',
  },
  demoStyle:{
    height:100,
    width:100,
  },
});