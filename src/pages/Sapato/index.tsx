import React from 'react';
import {StyleSheet, View } from 'react-native';


import Detalhe from './components/Detalhe';
import Topo from './components/Topo';
import sapato from '../../mocks/sapato';

export default function Sapato() {
    return<> 
    <Topo titulo={sapato.topo.titulo}/>
   <View style={estilos.sapato}>
        <Detalhe
            nome={sapato.detalhes.nome}
            nomeSapato={sapato.detalhes.nomeSapato}
            descricao={sapato.detalhes.descricao}
            preco={sapato.detalhes.preco}
        />
   </View>
   </>
}

const estilos = StyleSheet.create({
    sapato: {
        paddingVertical: 8,
        paddingHorizontal: 16

    }
})
