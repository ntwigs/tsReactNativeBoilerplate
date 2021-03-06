import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import {theme} from '../components/ui/layout'
import {AboutIcon, HomeIcon} from '../components/ui/route-icons'
import {About} from '../screens/about-screen'
import {Welcome} from '../screens/welcome-screen'
import {activeColor, inactiveColor} from '../style/colors'

const labelStyle = {
  fontFamily: theme.fontFamily,
}

export const RootTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'Welcome',
        tabBarIcon: HomeIcon,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: AboutIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      style: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 4,
      },
      labelStyle,
    },
  },
)
