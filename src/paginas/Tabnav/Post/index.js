import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import {launchImageLibrary } from 'react-native-image-picker';


export default function Post() {


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

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.containerheader}>

            <TouchableOpacity>

                <Image style={{width: 35, height: 25,}}
                source={require('../../../imagens/back.png')}/>

            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.posttxt}>Postar</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.Linha}></View>

            <View style={{ flexDirection:'row', marginTop: 20, marginHorizontal:20  }}>               
                                 
            <TouchableOpacity>
                <Image style={{ width:50, height:50, }}
                source={require('../../../imagens/perfil.png')} />
            </TouchableOpacity>

            <TextInput style={styles.textimput}
            placeholder='Oque tem a dizer?'
            multiline={true}
            placeholderTextColor={'#6C0F6D'}
             />    
            </View>


            <TouchableOpacity  onPress={()=>{launchImageLibrary({}, imagePickerCallback )} } >

            <Image style={{width:30, height: 30, position:'absolute', bottom:-130, right: 30}}
            source={require('../../../imagens/cam.png')} />
                
            </TouchableOpacity>   

              
            
 


            
            <View style={{width: 370, alignSelf:'center',  marginTop:170, alignItems:'flex-start'}}>

            <Image style={{width:370, resizeMode:'contain', alignItems:'flex-start', alignSelf:'center'  }}
            source={require('../../../imagens/wall.png')} /> 

            </View>   
            

            
        
  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
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
        borderBottomColor: '#6C0F6D'

    },

    posttxt:{
        fontWeight:'bold',
        fontSize:20,
        color: '#6C0F6D'
        
    },

    textimput:{
        marginLeft: 20
        
    }

    
})