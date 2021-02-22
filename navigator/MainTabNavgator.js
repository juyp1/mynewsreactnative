import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {Image, StyleSheet} from 'react-native';
// import HomePage from '../pages/Home';
import HomeRootStack from './HomeStackNavigator';
import MyRootStack from './MyStackNavigator';
import FindPage from '../pages/FInd';
import NeabyPage from '../pages/Neaby';




const tabs = {

    home: {
        screen: HomeRootStack,
        navigationOptions: {
            tabBarLabel: '商品',
            tabBarIcon: ({focused}) => {
                if (!focused) {
                    return <Image source={require('../assets/tab/product.png')} style={styles.bottomTabIcon}/>;
                } else {
                    return <Image source={require('../assets/tab/producthighlight.png')}
                                  style={styles.bottomTabIcon}/>;
                }
            },
        },
    },
    find: {
        screen: FindPage,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({focused}) => {
                if (!focused) {
                    return <Image source={require('../assets/tab/car.png')} style={styles.bottomTabIcon}/>;
                } else {
                    return <Image source={require('../assets/tab/carhighlight.png')}
                                  style={styles.bottomTabIcon}/>;
                }
            },
        },
    },

    nearby: {
        screen: NeabyPage,
        navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({focused}) => {
                if (!focused) {
                    return <Image source={require('../assets/tab/order.png')} style={styles.bottomTabIcon}/>;
                } else {
                    return <Image source={require('../assets/tab/orderhighlight.png')}
                                  style={styles.bottomTabIcon}/>;
                }
            },
        },
    },
    my: {
        screen: MyRootStack,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
                if (!focused) {
                    return <Image source={require('../assets/tab/shop.png')} style={styles.bottomTabIcon}/>;
                } else {
                    return <Image source={require('../assets/tab/shophighlight.png')}
                                  style={styles.bottomTabIcon}/>;
                }
            },
        },
    },
};
//const TabBarComponent = (props) => <BottomTabBar {...props} activeTintColor="red" />;
class MainTabNavigator extends  Component {

    _tabNavigator(){
    const {home,find,nearby,my} = tabs
    const _tabs={

        home,
        find,
        nearby,
        my,
    }
    if(!this.tabNavigator){
        this.tabNavigator=createAppContainer(createBottomTabNavigator(
            _tabs,{
                tabBarComponent: (props) => (
                    <BottomTabBar {...props} activeTintColor="#CFBC9D" />
                ),
            }
        ))
    }
    return this.tabNavigator;
}
    render(){
        const TabNavigator=this._tabNavigator()
        return <TabNavigator/>
    }
}
export default  MainTabNavigator
const styles = StyleSheet.create({
    bottomTabIcon: {
        width: 23,
        height: 23,
    },
});
