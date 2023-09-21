import React from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';

import topo from '../../../../assests/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo(){
    return<>
     <Image style={estilos.topo} source={topo}/>
    <Text style={estilos.titulo}>Detalhes do Sapato</Text>
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
    }
})