import React,{Component} from 'react'
import {View,Text,StyleSheet} from  'react-native'
import {inject,observer} from 'mobx-react'
@inject("store")
@observer
class FindPage extends  Component {
    render(){
        return(
            <View style={{flex:1,
                display:"flex",
                backgroundColor:'green',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>我是发现</Text>
                <Text>{this.props.store.car.carname}</Text>
            </View>
        )
    }
}
export default  FindPage
