import React,{Component} from 'react'
import {View,Text,Button,SafeAreaView,Image} from  'react-native'
import Panle from '../component/Panle';
import {pxToDp} from '../utils/index'
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
        console.log(this)
        return(
            
            <SafeAreaView>
               <View>
                   <Image source={require('../assets/img/product.png')} style={{
    
                       width:pxToDp(165),height:pxToDp(165)
                   }}/>
               </View>
            </SafeAreaView>
            // <View style={{flex:1,
            //     display:"flex",
            //
            //     justifyContent:"center",
            //     alignItems:'center'}}>
            //     <Text>我是Home</Text>
            //     <Panle/>
            //     <Button title="跳转" onPress={()=>{
            //         this.props.navigation.navigate('detail')
            //     }}></Button>
            //
            // </View>
        )
    }
}
export default  HomePage
