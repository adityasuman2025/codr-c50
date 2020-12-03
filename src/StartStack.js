import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import BottomNav from './BottomNav';
import Login from "./Login";
import SignUp from "./SignUp";
import Landing from "./Landing";
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

export default function StartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerNav} options={{ headerShown: false }}/>
      <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

