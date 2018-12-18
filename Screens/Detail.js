import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

class Detail extends React.Component{

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text>{this.props.navigation.state.params.test}</Text>
            </View>
        );
    }
}

export default Detail;