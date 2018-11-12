import { createSwitchNavigator } from 'react-navigation';

import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';

const RouteConfigs = {
  UnauthModal: UnauthorizedNavigator,
  AuthStack: AuthorizedNavigator,
};

const SwitchNavigatorConfig = {
  initialRouteName: 'UnauthModal',
};

const RootNavigator = createSwitchNavigator(
  RouteConfigs,
  SwitchNavigatorConfig,
);

export default RootNavigator;
