import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
class MyPage extends  Component {
    componentDidMount() {
        console.log('1111')
        this.props.navigation.navigate('signin')
    }
    
    render(){
        return(
            <View style={{flex:1,
                display:"flex",
                backgroundColor:'gary',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>我的 </Text>
            </View>
        )
    }
}
export default  MyPage
