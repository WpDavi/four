import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Welcome from '../paginas/inicial';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro'

import Tabnav from '../paginas/Tabnav';





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

             <Stack.Screen
                name='Tabnav'
                component={Tabnav}
                options={{ headerShown: false}}
            />  

            
            
            
        </Stack.Navigator>
        
       
    )
}