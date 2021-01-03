import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from  'react-native'
class HomePage extends  Component {
    static navigationOptions={
        title:'首页',
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
                backgroundColor:'red',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>我是Home</Text>
                <Button title="跳转" onPress={()=>{
                    this.props.navigation.navigate('detail')
                }}></Button>
            </View>
        )
    }
}
export default  HomePage
