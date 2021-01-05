import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'
import {inject,observer} from 'mobx-react'
@inject("RootStore")
@observer
class Panle extends  Component {
    handleChange=()=>{
        this.props.RootStore.changeName('八戒')
    }
    render(){
        console.log(this)
        return(
            <View>
                <Text>
                    我是面板:{this.props.RootStore.name}
                   
                </Text>
                <Button onPress={this.handleChange} title="点我改变"></Button>
            </View>
        )
    }
}
export default  Panle
