import React, {useState, useEffect} from 'react';
import {
  Container,
  PrimeiroCampo,
  FieldCliente,
  AreaBotaoFinalizar,
  AreaBotaoCancelar,
  TextoBotao
} from './styles.js';

import Api from '../../Api';

export default () => {

    const paramID = 147;

    const getAgendamento = async (id) => {
        //res = await Api.get("/api/v1/agendamento/" + id);

        console.log("========================");
        //console.log(res);
    };

    getAgendamento(paramID);

    const handleAgendamentoCancelar = () => {
        Api.put("/api/v1/agendamento/cancel/" + paramID);
    }

    // Colocar os dados no lugar dos campos
    return (
        <Container>
            <PrimeiroCampo>nome do serviço</PrimeiroCampo>
            <FieldCliente>preco do servico</FieldCliente>
            <FieldCliente>nome do estabelecimento</FieldCliente>

            <AreaBotaoCancelar onPress={handleAgendamentoCancelar}>
                <TextoBotao>Cancelar</TextoBotao>
            </AreaBotaoCancelar>
        </Container>
    );

}