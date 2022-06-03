import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from './Home'
import New from './New'
import Notification from './Notificatin'
import Profile from './Profile'
import Search from './Search'

const Tab =  createBottomTabNavigator();

export default function Routestab(){
    return(
        <Tab.Navigator>

            <Tab.Screen nome="Home" component={Home} />
            <Tab.Screen nome="New" component={New} />
            <Tab.Screen nome="Notification" component={Notification} />
            <Tab.Screen nome="Profile" component={Profile} />
            <Tab.Screen nome="Search" component={Search} />

        </Tab.Navigator>
    );
}