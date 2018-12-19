import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,FlatList,Platform,SafeAreaView,TouchableOpacity } from 'react-native';
import { Component } from "react";



class Detail extends React.Component {
    componentWillMount(){
        this.headerBar = 80;
    }

    constructor(props){
        super(props);
        this.state = {
            ImageList: [],
            descr: this.props.navigation.state.params.descr
        }
    }


  render() {
    const {navigate} = this.props.navigation;

    return (
     <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center',backgroundColor: 'yellow'}} >
                        
                        <Text style={{fontSize:40,fontWeight: '700'}} >{this.state.descr}</Text>
  
                    </View>
      <View style={styles.container}>
        <FlatList
            data={this.state.ImageList}
            renderItem={({item}) => 
    
            <TouchableOpacity onPress={()=>{
                navigate('Zoom',{link:item.link})
              }}>
            <Image style={{height: windowHeight, width: windowWidth}}
                                            resizeMode = "contain"
                                            source={{uri:item.link}} 
                                             />
             <View style={{ alignItems: 'center'}} >
                        <Text style={{fontSize:20,fontWeight: '200'}} >{item.key}/{this.state.ImageList.length}</Text>
                    </View>
            </TouchableOpacity>
            }
            />
      </View>
      </SafeAreaView>
    );
  }

  componentDidMount(){
    fetch("https://nhathuy7996.000webhostapp.com/api/api.php/getImageFrom/"+ this.props.navigation.state.params.album)
    .then((resopnse)=>resopnse.json())
    .then((responJson)=>{
        this.setState({
            ImageList: responJson
        });

        console.log(this.props.navigation.state.params.descr);
    })
}
}

export default Detail;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const src1 = "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/32399168_1092837130871051_9847024274898944_o.jpg?_nc_cat=102&_nc_oc=AQlQVdI2QilRRqS3n9aCy1I-HCpgAXPKZDYpMhCuXocoeSD-XtiMihca5VBv8d9OE2k&_nc_ht=scontent.fhan5-2.fna&oh=b9418999fe409ae1571be0f6b216277b&oe=5C9B9ABF";
const src2 = "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/48064340_1264463247041771_8134607508175060992_n.jpg?_nc_cat=105&_nc_oc=AQnMueq5qFVsDv58LmIX-1YjHImF-MKu5aR-KIsiD4sJCfisS1aVuvNxV6iXzwHeMTA&_nc_ht=scontent.fhan5-6.fna&oh=cebb1fc7f31ed7a470c23b22fa07a142&oe=5CA7A44C";




const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex:9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
