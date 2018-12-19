import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,Platform,
        StatusBar,Dimensions,Image,FlatList } from 'react-native';

import {createStackNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Detail from '../Screens/Detail.js';
import Zoom from '../Screens/Views/Zoom';
import Preview from '../Screens/Views/Preview';

class Explore extends React.Component {

   
    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    constructor(props){
        super(props);
        this.state = {
            ImagePreview : []
        }
    }

    reload(){
        this.setState({
            ImagePreview : []
        },()=>{
            fetch("https://nhathuy7996.000webhostapp.com/api/api.php/getAlbum")
            .then((resopnse)=>resopnse.json())
            .then((responJson)=>{
                this.setState({
                    ImagePreview: responJson
                });
            })
        })
    }
    
  render() {
    return (
     <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            {/*Search box*/}
            <View style={{height: this.startHeaderHeight, backgroundColor:'white',borderBottomWidth: 1,
            borderBottomColor: '#dddddd'}}>
                <View style={{flexDirection: 'row', padding: 10,
                    backgroundColor: 'white', marginHorizontal: 20,
                    shadowOffset:{width:0,height: 0},
                    shadowColor: 'black', shadowOpacity: 0.2,
                    elavation: 1,
                    marginTop: Platform.OS == 'android' ? 30: this.startHeaderHeight/3 }}>
                    <Icon name='ios-search' size={24} style={{marginRight: 10}} />
                    <TextInput 
                        placeholder ="Search"
                        placeholderTextColor = "grey"
                        style = {{flex: 1, fontWeight: '700',
                        backgroundColor: 'white'}}
                    />
                </View>
            </View>

             {/*Grid select girls*/}
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center',backgroundColor: 'yellow'}} >
                    <Text style={{fontSize:40,fontWeight: '700'}} >Album mới nhất</Text>
                </View>

                <View style={{flex: 9, alignItems: 'center'}}>
                <FlatList
                       
                        numColumns = {2}
                        data = {this.state.ImagePreview}
                        renderItem={({item}) => 
                        <View>
                             <Preview url={item.link_preview} descr={item.name} album={item.id}
                             navigation={this.props.navigation} width={windowWidth} height={windowHeight}/>
                        </View>
                        }
                    />
                </View>
            </View>

        </View>
     </SafeAreaView>
    );
  }

  componentDidMount(){
      fetch("https://nhathuy7996.000webhostapp.com/api/api.php/getAlbum")
      .then((resopnse)=>resopnse.json())
      .then((responJson)=>{
          this.setState({
            ImagePreview: responJson
          });
      })
  }


}

export default createStackNavigator({
    Explore,
    Zoom,
    Detail
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
