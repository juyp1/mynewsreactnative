import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class SigninPage extends  Component {
    static navigationOptions={
        title:'登录',
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
                backgroundColor:'blue',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>登录页 </Text>
            </View>
        )
    }
}
export default  SigninPage
