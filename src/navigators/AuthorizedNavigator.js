import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const RouteConfigs = {
  Home: HomeScreen,
  Details: DetailsScreen,
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

const AuthorizedNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig,
);

export default AuthorizedNavigator;
