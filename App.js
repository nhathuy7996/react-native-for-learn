import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './Screens/Explore';
import Saved from './Screens/Saved';
import Trips from './Screens/Trips';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore:{
    screen:Explore,
    navigationOptions:{
      tabBarLabel: 'EXPLORE', 
      tabBarIcon: ({tintColor})=>(
        <Icon name = "ios-search" color={tintColor}
        size = {24} />
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions:{
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor})=>(
        <Icon name = "ios-heart" color={tintColor}
        size = {24} />
      )
    }
  },
  Trips:{
    screen:Trips,
    navigationOptions:{
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor})=>(
        <Image source={require('./assets/icon.png')} style={{
          height:24, width:24
        }}/>
      )
    }
  }
},
{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white',
      borderTopWidth:0,
      shadowOffset: {width: 5, heigh: 3},
      shadowColor:'green',
      shadowOpacity: 0.5,
      elavation: 5
    }
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
