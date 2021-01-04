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
    state={
        ishow:true
    }
    componentDidMount() {
        console.log('页面渲染')
    }
    componentWillUnmount() {
        console.log('页面卸载')
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
