import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class WelecomePage extends  Component {
    static navigationOptions={
        title:'欢迎',
        header:null,
        // headerStyle:{
        //     backgroundColor:'skyblue'
        // },
        // headerTintColor:"#ffffff",
        headerTintStyle:{
            fontSize:20,
            fontWeight:"bold"
        }
    }
    render(){
        return(
            <View style={{flex:1,
                display:"flex",
                backgroundColor:'pink',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>欢迎录页 </Text>
            </View>
        )
    }
}
export default  WelecomePage
