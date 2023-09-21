import React from 'react';
import {StyleSheet, View } from 'react-native';


import Detalhe from './components/Detalhe';
import Topo from './components/Topo';

export default function Sapato() {

    return<> 
    <Topo/>
   <View style={estilos.sapato}>
        <Detalhe/>
   </View>
   </>
}

const estilos = StyleSheet.create({
    sapato: {
        paddingVertical: 8,
        paddingHorizontal: 16

    }
})
