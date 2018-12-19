import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,FlatList,Platform,SafeAreaView,TouchableOpacity } from 'react-native';
import { Component } from "react";



class Saved extends React.Component {
   

    constructor(props){
        super(props);
       
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
     <SafeAreaView style={{flex: 1}}>
      <View style={styles.container} >
        <Text>Chức năng đang phát triển</Text>
       </View>
      </SafeAreaView>
    );
  }
}

export default Saved;



const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
