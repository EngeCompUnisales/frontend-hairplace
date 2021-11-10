import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Api from '../../Api';

import { Container } from './styles.js';

export default (parametros) => {
    const navigation = useNavigation();

    const getBarber = async (id) => {
        let res = await Api.get("/api/v1/estabelecimento/" + id);
        
        if(res.data != null){
            console.log(res.data)
        } else {
            alert("Oops: DEU RUIM")
        }
        console.log("FIM: getBarber")
    };

    getBarber(parametros.route.params.id)
    
    return (
        <Container>
            <Text style = {{ top: "50%" }}>Barbeiro: {parametros.route.params.id}</Text>
        </Container>
    );
}
