import React, {useState} from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, Image, Alert, StyleSheet, TouchableOpacity} from 'react-native'
import {launchImageLibrary } from 'react-native-image-picker';
import {useNavigation } from '@react-navigation/native'

import Home from './Home';
import Pesquisa from './New'; 
import Notificatin from './Notificatin';
import Profile from './Profile';
import Search from './Search';








const Tab = createBottomTabNavigator();




export default function Tabnav(){
    const navigation = useNavigation();

    const [avatar, setAvatar] = useState();

    function imagePickerCallback(data){
        console.log(data);
    if (data.didCancel) {
      Alert.alert(
        "Cancelado",
        "Envio de Image ou video cancelado",)
    }
    if (data.error) {
        Alert.alert(
            "Erro",
            "Algo inesperado aconteceu",)
    }
    if (!data.uri){
      return;
    }
    setAvatar(data);
  }



    const CustomtabBarButton = ({children, onPress}) => (
       
        <TouchableOpacity
        style={{
            top:-40,
            justifyContent:'center',
            alignItems:'center',
        }}
        onPress={()=>{launchImageLibrary({}, imagePickerCallback ), navigation.navigate('Post')} } 
         
         >



            
            <View style={{
                width:70,
                height:70,
                borderRadius: 35,
                backgroundColor:'#e32f45',
            }}>
                {children}
            </View>
        </TouchableOpacity >
       
    )

    return(


        <Tab.Navigator
        screenOptions={{            
            tabBarActiveTintColor:'#6C0F6D',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#161820',
                position:'absolute',
                bottom: 15,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 70,        
                
             },
            
            
                        
          }}                
        >

            <Tab.Screen
            name='Inicio'
            component={Home}
           options={{               
               tabBarIcon:({focused}) => (
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Image
                       source={require('../../imagens/tabbar/home.png')}
                       
                       style={{
                           width: 25,
                           height: 25,
                           tintColor: focused ? '#6C0F6D' : 'white',
                       }}
                       />
                       <Text
                       style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                       >Início</Text>
                   </View>
               )
           }}
            />

            <Tab.Screen
            name='Pesquisar'
            component={Pesquisa}
            options={{               
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../imagens/tabbar/procurar.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Pesquisar</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen
            name='Notificatin'
            component={Notificatin}
            options={{               
                tabBarIcon:({focused}) => (
                   
                        <Image
                        source={require('../../imagens/tabbar/centro.png')}
                        
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                        }}
                        />                  
                ),
                tabBarButton: (props) => (
                    <CustomtabBarButton {...props} />
                )
            }}
            
            />

            <Tab.Screen
            name='Notificação'
            component={Profile}
            options={{               
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../imagens/tabbar/notification.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Notificação</Text>
                    </View>
                )
            }}
            
            />



            <Tab.Screen
            name='Perfil'
            component={Search}
            options={{               
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../imagens/tabbar/perfil.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Perfil</Text>
                    </View>
                )
            }}
            />            

            
        </Tab.Navigator>
        
    );
    const style = StyleSheet.create({
       
    })
}
