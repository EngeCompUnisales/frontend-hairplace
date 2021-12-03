import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import preload from "../pages/Preload";
import signin from "../pages/SignIn";
import signup from "../pages/SignUp";
import MainTab from './MainTab';
import MainTabBarber from './MainTabBarber';
import Barber from '../pages/Barber';
import Services from '../pages/Services';
import Appointments from '../pages/Appointments';
import GetAppointments from '../pages/GetAppointments';
import CancelAppointment from '../pages/CancelAppointment';
import CancelAppointmentUser from '../pages/CancelAppointmentUser';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={preload} />
        <Stack.Screen name="SignIn" component={signin} />
        <Stack.Screen name="SignUp" component={signup} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="MainTabBarber" component={MainTabBarber} />
        <Stack.Screen name="Barber" component={Barber} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="GetAppointments" component={GetAppointments} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="CancelAppointment" component={CancelAppointment} />
        <Stack.Screen name="CancelAppointmentUser" component={CancelAppointmentUser} />

    </Stack.Navigator>
);