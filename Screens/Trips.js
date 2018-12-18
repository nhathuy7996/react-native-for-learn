import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,ScrollView } from 'react-native';
import { Component } from "react";


class Trips extends React.Component {

  render() {
    return (
      <ScrollView scrollEventThrottle={20}>
      <View style={styles.container}>
         <Image
         style={{ height: windowHeight, width: windowWidth}}
         resizeMode= 'contain'
         source={{uri:src1}} />
         <Image
         style={{ height: windowHeight, width: windowWidth}}
         resizeMode= 'contain'
         source={{uri:src2}} />
      </View>
      </ScrollView>
    );
  }
}

export default Trips;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const src1 = "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/32399168_1092837130871051_9847024274898944_o.jpg?_nc_cat=102&_nc_oc=AQlQVdI2QilRRqS3n9aCy1I-HCpgAXPKZDYpMhCuXocoeSD-XtiMihca5VBv8d9OE2k&_nc_ht=scontent.fhan5-2.fna&oh=b9418999fe409ae1571be0f6b216277b&oe=5C9B9ABF";
const src2 = "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/48064340_1264463247041771_8134607508175060992_n.jpg?_nc_cat=105&_nc_oc=AQnMueq5qFVsDv58LmIX-1YjHImF-MKu5aR-KIsiD4sJCfisS1aVuvNxV6iXzwHeMTA&_nc_ht=scontent.fhan5-6.fna&oh=cebb1fc7f31ed7a470c23b22fa07a142&oe=5CA7A44C";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
