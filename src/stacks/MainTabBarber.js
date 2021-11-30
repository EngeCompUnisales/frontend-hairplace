import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBarBarber from '../components/CustomTabBarBarber';

import AppointmentsBarber from '../pages/AppointmentsBarber';
import ProfileBarber from '../pages/ProfileBarber';
import Services from '../pages/Services';
import ServicesC from '../pages/ServicesC';
import Service from '../pages/Service';
import Establishment from '../pages/Establishment';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBarBarber {...props} />}>
        <Tab.Screen name="AppointmentsBarber" component={AppointmentsBarber} />
        <Tab.Screen name="ProfileBarber" component={ProfileBarber} />
        <Tab.Screen name="Establishment" component={Establishment} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="ServicesC" component={ServicesC} />
        <Tab.Screen name="Service" component={Service} />

    </Tab.Navigator>
);