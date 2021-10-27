import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import preload from "../pages/Preload";
import signin from "../pages/SignIn";
import signup from "../pages/SignUp";
import home from "../pages/Home";
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={preload} />
        <Stack.Screen name="SignIn" component={signin} />
        <Stack.Screen name="SignUp" component={signup} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);