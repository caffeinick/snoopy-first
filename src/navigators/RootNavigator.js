import { createSwitchNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import AuthStack from './AuthorizedNavigator';

const RouteConfigs = {
  Landing: LandingScreen,
  AuthStack,
};

const SwitchNavigatorConfig = {
  initialRouteName: 'Landing',
};

const RootNavigator = createSwitchNavigator(
  RouteConfigs,
  SwitchNavigatorConfig,
);

export default RootNavigator;
