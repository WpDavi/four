import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Search(){
    return(
        <View style={stiles.container}>
            <Text style={stiles.text}>Pagina Perfil</Text>
        </View>
    );
}

const stiles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
    
})