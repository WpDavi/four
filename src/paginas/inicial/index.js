import React from "react";
import { 
    View,
     Text,
     StyleSheet,
     Image,
     TouchableOpacity
     } from 'react-native'

import * as Animatable from 'react-native-animatable'     

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../imagens/logo.png')}
                    style={{ width: '100%'}}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View delay={700} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                O Four Rabbits é um projeto que visa o compartilhamento de imagens e vídeos de forma anônima
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar 
                </Text>
                <TouchableOpacity
                 style={styles.button}
                 onPress={()=> navigation.navigate('Login')}
                 >
                    <Text style={styles.buttonText}>
                        Fazer login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.cadastro}
                onPress={()=> navigation.navigate('Cadastro')}
                >
                    <Text style={styles.cadastrotxt}>Não sou Cadastrado</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#11001C' 
    },
    containerLogo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',  

    },
    containerForm:{
        flex:1,
        backgroundColor:'#161820',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%',

    },
    title:{
        color:'#a1a1a1',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15,
        textAlign:'center'
    },
    text:{
        color: '#a1a1a1',
        textAlign:'center',
    },
    button:{
        position:'absolute',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf:'center',
        bottom:'25%',
        alignItems:'center',
        justifyContent:'center',  
        backgroundColor:'#6C0F6D',
    },
    buttonText:{
        fontSize:18,
        color: '#a1a1a1',
        fontWeight:'bold'
    },
    cadastro:{
        position:'absolute',
        bottom:'10%',
        alignItems:'center',
        justifyContent:'center', 
        alignSelf:'center',           
      },

      cadastrotxt:{
          color:'white'
      }
})