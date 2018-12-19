import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';

class Preview extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <TouchableOpacity onPress={()=>{
                navigate('Detail',{album:this.props.album,descr:this.props.descr})
              }}>
                  <View style={{borderColor: 'black',borderWidth: 1,borderRadius: 15,width: this.props.width /2 -40, height: this.props.height/2 -40, margin: 10}}>
                    <View style={{flex: 2}}>
                        <Image source={{uri: this.props.url}} style={{flex: 1,borderRadius: 15, width: null,height: null,resizeMode:'cover'    }}/>
                    </View>
                    <View style={{flex:1,borderRadius: 15, alignItems: 'center', backgroundColor: 'white'}} >
                        <Text>{this.props.descr}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          
        );
    }


}

export default Preview;