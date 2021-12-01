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

    let res;

    const paramID = 147;

    const getAgendamento = async (id) => {
        res = await Api.get("/api/v1/agendamento/" + id);

        console.log(res.data);
        console.log("========================");
        console.log(res.data.startService);
        console.log(res.data.client.name);
        console.log(res.data.client.email);
        console.log(res.data.client.numberCellphone);
        console.log(res.data.client.cpf);
        console.log(res.data.service.nome);
    };

    getAgendamento(paramID);

    const handleAgendamentoCancelar = () => {
        Api.put("/api/v1/agendamento/cancel/" + paramID);
    }

    const handleAgendamentoConcluir = () => {
        const hora = "2021-12-01T02:26:35.488+00:00";
        // Problema em finalizar, codigo 415
        Api.put("/api/v1/agendamento/completed/" + paramID, hora);
    }

    // Colocar os dados no lugar dos campos
    return (
        <Container>
            <PrimeiroCampo>res.data.startService</PrimeiroCampo>
            <FieldCliente>res.data.client.name</FieldCliente>
            <FieldCliente>res.data.client.email</FieldCliente>
            <FieldCliente>res.data.client.numberCellphone</FieldCliente>
            <FieldCliente>res.data.client.cpf</FieldCliente>
            <FieldCliente>res.data.service.nome</FieldCliente>

            <AreaBotaoFinalizar onPress={handleAgendamentoConcluir}>
                <TextoBotao>Finalizar Atendimento</TextoBotao>
            </AreaBotaoFinalizar>
            <AreaBotaoCancelar onPress={handleAgendamentoCancelar}>
                <TextoBotao>Cancelar</TextoBotao>
            </AreaBotaoCancelar>
        </Container>
    );

}