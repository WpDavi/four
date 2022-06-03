import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Welcome from '../paginas/inicial';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro'

import Home from '../paginas/Login/App/Paginas/Home'
import New from '../paginas/Login/App/Paginas/New'
import Notificatin from '../paginas/Login/App/Paginas/Notificatin'
import Profile from '../paginas/Login/App/Paginas/Profile'
import Search from '../paginas/Login/App/Paginas/Search'



const Stack = createNativeStackNavigator ();
const Tab = createBottomTabNavigator ();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false}}
            />
        
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false}}
            />                        
            
            
            
        </Stack.Navigator>
        
       
    )
}