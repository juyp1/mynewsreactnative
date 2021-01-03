import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class FindPage extends  Component {
    render(){
        return(
            <View style={{flex:1,
                display:"flex",
                backgroundColor:'green',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>我是发现</Text>
            </View>
        )
    }
}
export default  FindPage
