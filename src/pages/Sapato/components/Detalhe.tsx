import React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../../assests/Logo.png';

type Props = {
    nome: string,
    nomeSapato: string,
    descricao: string,
    preco: string
}

export default function Detalhe({nome, nomeSapato, descricao, preco}: Props){
    return<>
    
    <Text style={estilos.nome}>{nome}}</Text>

    <View style={estilos.loja}>
        <Image style= {estilos.imagemSapato} source= {logo}/>
        <Text style={estilos.nomeSapato}>{nomeSapato}</Text>
   </View>

   <Text style={estilos.descricao}>{descricao}</Text>
   <Text style={estilos.preco}>{preco}</Text>

    </>
}

const estilos = StyleSheet.create({
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
