import { createStackNavigator } from 'react-navigation-stack'
 import MyPage from '../pages/My';
import SigninPage from '../pages/Signin';
const MyRootStack = createStackNavigator(
    {
       my:MyPage,
       signin:SigninPage
    },{
        initialRouteName:'my',
        navigationOptions:({navigation})=>(
            {
                tabBarVisible:navigation.state.index===0?true:false
            }
        ),
        defaultNavigationOptions: {    //禁止手势操作
            gesturesEnabled: false,
        },
    }
)
export default  MyRootStack
