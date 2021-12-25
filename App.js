import { createAppContainer } from "react-navigation";
import  { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from "./src/screens/Search";

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Buissiness Search"
  }
})

export default createAppContainer(navigator)
