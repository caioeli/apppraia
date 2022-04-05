import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function app() {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}> Melhores praias do brasil </Text>

      <Text style={estilo.frase1}>
O mar é capaz de transmitir calma e sensação de segurança, uma vez que
sua superfície plana transmite estabilidade, afastando a preocupação e o
estresse causados pela imprevisibilidade do ambiente.
      </Text>

      <Text style={estilo.frase2}>Por exemplo: </Text>

<ScrollView style={estilo.fotos}>

      <Text style={estilo.tituloimg}> -Baía do Sancho - Fernando de Noronha (PE) </Text>
      <Image style={estilo.img} source={require('./assets/beach-g8302de1e8_640.jpg')}/>

      <Text style={estilo.tituloimg}> -Praia da Ilha do Amor – Pará (PA) </Text>
      <Image style={estilo.img} source={require('./assets/beach-gd1fd273d4_640.jpg')}/>

      <Text style={estilo.tituloimg}> -Praia de Ipioca – Maceió (AL) </Text>
      <Image style={estilo.img} source={require('./assets/beach-gf1e47d78d_640.jpg')}/>

      <Text style={estilo.tituloimg} > -Segunda Praia – Morro de São Paulo (BA) </Text>
      <Image style={estilo.img} source={require('./assets/lighthouse-g799cdaab9_640.jpg')}/>


       <Text styile={estilo.frase3}> Agora é só aporveitar </Text>

</ScrollView>


    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
  flex:1,
  textAlign:'center',
  backgroundColor:'#FFEFD5',
  },

  titulo: {
  textAlign:'center',
  fontSize:30,
  marginTop:50,
  marginBottom:18,
  fontFamily:'Helvética',
  },

  frase1: {
  fontSize:19,
  marginButtom:15,
  margin:10,
  textAlign:'left',
  },

  frase2: {
  fontSize:19,
  marginTop:20,
  marginBottom:18,
  marginLeft:12,
  },

  tituloimg: {
  fontSize:18,
  marginTop:10,
  marginBottom:10,
  fontFamily:'Courier',
  },

  img: {
  width:300,
  height:200,
  borderRadius:20,
  },

fotos:{
alignItems:'center',
},

frase3:{
  fontSize:25,
  marginTop:20,
  marginBottom:20,
  textAlign:'center',
},

});
