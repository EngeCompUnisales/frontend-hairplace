import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Appointments from '../pages/Appointments';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import SignUpBarber from '../pages/SignUpBarber';
import GetAppointments from '../pages/GetAppointments';
import ServicesList from '../pages/ServicesList';
const Tab = createBottomTabNavigator();

export default (parametros) => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} initialParams={parametros} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="ServicesList" component={ServicesList} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="GetAppointments" component={GetAppointments} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="SignUpBarber" component={SignUpBarber} />
    </Tab.Navigator>
);

