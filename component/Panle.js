import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'
import {inject,observer} from 'mobx-react'
@inject("store")
@observer
class Panle extends  Component {
    handleChange=()=>{
        this.props.store.home.ChangeName('八戒')
    }
    render(){
       
        return(
            <View>
                <Text>
                    我是面板:{this.props.store.home.homename}
                   
                </Text>
                <Button onPress={this.handleChange} title="点我改变"></Button>
            </View>
        )
    }
}
export default  Panle
