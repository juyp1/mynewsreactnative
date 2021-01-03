import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class DetailPage extends  Component {
    static navigationOptions={
        title:'详情',
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
                backgroundColor:'gary',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>详情 </Text>
            </View>
        )
    }
}
export default  DetailPage
