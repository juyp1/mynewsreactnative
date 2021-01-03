import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class NeabyPage extends  Component {
    render(){
        return(
            <View style={{flex:1,
                display:"flex",
                backgroundColor:'pink',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>我是附近 </Text>
            </View>
        )
    }
}
export default  NeabyPage
