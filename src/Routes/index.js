import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';




import Welcome from '../paginas/inicial';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro'
import Tabnav from '../paginas/Tabnav';
import Post from '../paginas/Tabnav/Post';





const Stack = createNativeStackNavigator ();



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

            <Stack.Screen
                name='Post'
                component={Post}
                options={{ headerShown: false}}
            />  

            
            
            
        </Stack.Navigator>
        
       
    )
}