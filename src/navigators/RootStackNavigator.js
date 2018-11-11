import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const routeConfig = {
  Home: HomeScreen,
  Details: DetailsScreen,
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
};

const RootStackNavigator = createStackNavigator(
  routeConfig,
  StackNavigatorConfig,
);

export default RootStackNavigator;
