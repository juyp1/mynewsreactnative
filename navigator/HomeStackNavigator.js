import { createStackNavigator } from 'react-navigation-stack'
import HomePage from '../pages/Home';
import DetailPage from '../pages/Detail';
const HomeRootStack = createStackNavigator(
    {
        home:HomePage,
        detail:DetailPage
    },{
        initialRouteName:'home',
        navigationOptions:({navigation})=>(
            {
                tabBarVisible:navigation.state.index===0?true:false
            }
        )
    }
)
export default  HomeRootStack
