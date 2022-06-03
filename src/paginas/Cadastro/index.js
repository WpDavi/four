import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity, TextInput} from 'react-native'

import * as Animatable from 'react-native-animatable'     

import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation='flipInY'   style={styles.containerimg}>
               <Image
                source={require('../../imagens/logocadastro.png')}                 />
            </Animatable.View> 
            
            <Animatable.View  animation='fadeInUp'  style={styles.containerinf}>
               <Text style={styles.titulo}> Cadastro</Text>

               <TextInput 
               style={styles.input}
               placeholderTextColor='white'
               placeholder="Nome"/>   

               <TextInput 
               style={styles.input}
               placeholderTextColor='white'
               placeholder="Nome de usuário"/> 

               <TextInput 
               style={styles.input}
               
               placeholderTextColor='white'
               placeholder="Senha"/> 

               <TextInput 
               style={styles.input}
               placeholderTextColor='white'
               placeholder="Confirmar senha"/> 

               <TouchableOpacity                             
                style={styles.botao}>
                   <Text style={styles.botaotxt}>Entrar</Text>
               </TouchableOpacity>

               <Text style={styles.login}>Ja e cadastrado?
               <TouchableOpacity
               onPress={() => navigation.navigate('Login')} 
                ><Text style={styles.logi}> Login </Text></TouchableOpacity></Text>

                 
            </Animatable.View>

        
           
         
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#11001C',
        flex:1,
       
        
    },
    containerimg:{
        flex:1.1,
        alignSelf:'center',
        justifyContent:'center'
    },

    containerinf:{
        backgroundColor:'#161820',
        flex:1,
        padding:'6%',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        
    },


    input:{
        marginTop:2,             
        textAlign:'center',        
        borderBottomWidth: 2,
        borderColor:'#6C0F6D',
        color:'white',  
          
        
    },
    titulo:{
        
        fontSize:28,
        fontWeight:'bold',
        alignSelf:'center',
        color:'white',
    },

    botao:{
        marginTop:30,
        backgroundColor:'#6C0F6D',
        padding:7,
        width:200,
        alignSelf:'center',
        borderRadius:40
    },
    botaotxt:{
        alignSelf:'center',
        fontSize:25,
        color:'white'
    },
    login:{
        color:'white',
        alignSelf:'center',
        
        
    },
    logi:{
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        marginTop:15
    }

    
        
})