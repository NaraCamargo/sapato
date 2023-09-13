import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import topo from '../../../assests/Topo.png';
import logo from '../../../assests/Logo.png';

const width = Dimensions.get('screen').width;

export default function Sapato() {

    return<> 
   <Image source={logo} style={estilos.topo}/>
   <Text style={estilos.titulo}>Detalhes do Sapato</Text>
   <View style={estilos.sapato}>
   <Text style={estilos.nome}>Promoção de Sapatos </Text>

   <View style={estilos.loja}>
        <Image style= {estilos.imagemSapato} source= {topo}/>
        <Text style={estilos.nomeSapato}>Sapato Cristal</Text>
   </View>

   <Text style={estilos.descricao}>Uma variedade de modelos de sapatos selecionados aqui na loja para o seu conforto. </Text>
   
   <Text style={estilos.preco}>R$ 189,90 </Text>

   </View>
   </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "black",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
        fontFamily: 'MontserratBold'
    },
    sapato: {
        paddingVertical: 8,
        paddingHorizontal: 16

    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: 'MontserratBold'
    },
    loja: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemSapato:{
        width: 32,
        height: 32
    },
    nomeSapato: {
        fontSize: 16,
        fontFamily: "MontserratBold",
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontserratItalic"
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontserratRegular",
        color: "#A10000",
        marginTop: 8
    }

})
