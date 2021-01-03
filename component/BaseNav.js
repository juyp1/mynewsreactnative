import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
class HomeScreen extends Component {
    static navigationOptions={
        title:'react native 学院',
        headerStyle:{
            backgroundColor:"skyblue"
        },
        headerTintColor:"#ffffff"
    }
    render() {
        return (
            <View style={{flex:1,
                display:"flex",
                background:'gray',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text>首页</Text>
                <Button title="打开详情页" onPress={()=>{
                    this.props.navigation.navigate('Detail',{
                        id:'001',
                        title:'元旦佳节'
                    })
                }}></Button>
            </View>
        );
    }
}
class DetailScreen extends Component {
    static navigationOptions={
        title:'学院详情',
        headerLeft: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="返回"
                color="gary"
            />
        ),
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="扫一扫"
                color="gary"
            />
        ),
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1,
                display:"flex",
                background:'red',
                justifyContent:"center",
                alignItems:'center'}}>
                <Text style={{fontSize:16}}>详情页</Text>
                <View>
                    <Text>
                        参数id:{navigation.getParam('id')}
                    </Text>
                    <Text>
                        参数标题:{navigation.getParam('title','默认标题')}
                    </Text>
                    <Text>
                        所有参数:{JSON.stringify(navigation.state.params)}
                    </Text>
                </View>
                <Button title="继续跳转详情页" onPress={()=>{this.props.navigation.push('Detail')}}></Button>
                <Button title="返回首页" onPress={()=>{this.props.navigation.navigate('Home')}}></Button>
                <Button title="返回上一级" onPress={()=>{this.props.navigation.goBack()}}></Button>
            </View>
        );
    }
}
const TabNavigator= createBottomTabNavigator({
    Home:HomeScreen,
    Detail:DetailScreen
})
const AppContainer = createAppContainer(TabNavigator)
export default  AppContainer
