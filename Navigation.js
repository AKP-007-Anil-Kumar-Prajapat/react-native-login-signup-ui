import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './screens/SignUp';
import Login from './screens/Login';

const Stack = createStackNavigator();

const Navigation = props => {
  return <Login />;
};

export default Navigation;
