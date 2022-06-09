import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'


export default function Post() {
    return(
        <View>

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

            <Image style={{width:25, height: 25,}}
            source={require('../../../imagens/cam.png')} />               

            
        
  
        </View>
    );
}

const styles = StyleSheet.create({
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