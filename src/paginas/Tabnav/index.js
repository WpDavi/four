import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import Home from './Home';
import New from './New';
import Notificatin from './Notificatin';
import Profile from './Profile';
import Search from './Search';



const Tab = createBottomTabNavigator();

export default function Tabnav(){
    return(


        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='New' component={New}/>
            <Tab.Screen name='Notificatin' component={Notificatin}/>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Search' component={Search}/>            

            
        </Tab.Navigator>
    );
}