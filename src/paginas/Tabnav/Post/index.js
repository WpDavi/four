import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'


export default function Post() {
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.containerheader}>

            <TouchableOpacity>

                <Image style={{width: 25, height: 25,}}
                source={require('../../../imagens/back.png')}/>

            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.posttxt}>Post</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Linha}></View>


            <TextInput style={styles.textimput}
            placeholder='Oque tem a dizer'>
                                
            
            </TextInput>

            <Image style={{width:30, height: 30, position:'absolute', bottom:550, right: 40}}
            source={require('../../../imagens/cam.png')} />  


            
            <View style={{width: 370, alignSelf:'center',  marginTop:170, alignItems:'flex-start'}}>

            <Image style={{width:370, resizeMode:'contain', alignItems:'flex-start', alignSelf:'center',  }}
            source={require('../../../imagens/wall.png')} /> 

            

            </View>   
            

            
        
  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    

    containerheader:{
        marginHorizontal: 30,
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Linha:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'red'

    },

    posttxt:{
        fontWeight:'bold',
        fontSize:20
    },

    textimput:{
        marginLeft: 60
      
    }
})