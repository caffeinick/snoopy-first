import { createStackNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import FindPasswordScreen from '../screens/FindPasswordScreen';

const RouteConfigs = {
  Landing: LandingScreen,
  FindPassword: FindPasswordScreen,
};

const StackNavigatorConfig = {
  mode: 'modal',
  headerMode: 'none',
};

const UnauthorizedNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig,
);

export default UnauthorizedNavigator;
