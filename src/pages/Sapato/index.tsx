import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import topo from '../../../assets/';

const width = Dimensions.get('screen').width;

export default function Sapato() {
   return<> 
   <Image style={estilos.topo} source={topo}/>
   <Text style={estilos.titulo}>Detalhes do Sapato</Text>
   <View style={estilos.sapato}>
   <Text style={estilos.nome}>Carrinho de Sapatos </Text>

   </View>
   </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
    },
    sapato: {
        paddingVertical: 8,
        paddingHorizontal: 16

    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    }

})
