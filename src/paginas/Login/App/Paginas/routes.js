import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from '../paginas/Login/App/Paginas/Home'
import New from '../paginas/Login/App/Paginas/New'
import Notification from '../paginas/Login/App/Paginas/Notificatin'
import Profile from '../paginas/Login/App/Paginas/Profile'
import Search from '../paginas/Login/App/Paginas/Search'

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