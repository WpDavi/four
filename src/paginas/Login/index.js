import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {useNavigation } from '@react-navigation/native'





export default function Login() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft'delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>
                    Bem-Vindo(a)
                </Text>
            </Animatable.View>
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                Email
                </Text>
                <TextInput
                placeholderTextColor={'white'}
                placeholder='Digite um email...'
                style={styles.input}
                />

                <Text style={styles.title}>
                Senha
                </Text>
                <TextInput
                placeholderTextColor={'white'}
                placeholder='Digite uma senha...'
                style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}                
                 style={styles.buttonRegister}>
                    <Text style={styles.RegisterText}>
                        Não possui uma conta? Registre-se
                    </Text>
                </TouchableOpacity>

                <Image style={styles.logologin}
                source={require('../../imagens/login.png')}
                />
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#11001C'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'#fff'
    },
    containerForm:{
        backgroundColor:'#161820',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize: 20,
        marginTop:28,
        color:'white',        
    },
    input:{
        borderBottomWidth: 2,
        borderColor:'#6C0F6D',
        height: 40,
        marginBottom:12,
        fontSize:16,    
        color:'white',
      
                
        
    },

    button:{
        backgroundColor:'#6C0F6D',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
    },
    RegisterText:{
        color:'#a1a1a1'
    },
    logologin:{
        alignSelf:'center',
        marginTop:100
    }


})