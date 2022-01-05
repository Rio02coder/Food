import { createAppContainer } from "react-navigation";
import  { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from "./src/screens/Search";
import restaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantScreen: restaurantScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Buissiness Search"
  }
})

export default createAppContainer(navigator)
