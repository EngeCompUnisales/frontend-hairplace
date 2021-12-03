import React, { useState, useEffect } from 'react';
import Api from '../../Api';
import {
    Container,
    PrimeiroCampo,
    FieldCliente,
    AreaBotaoFinalizar,
    AreaBotaoCancelar,
    TextoBotao
} from './styles.js';

export default (res) => {
    const [AppointmentInfo, setAppointmentInfo] = useState({
        id: res.route.params.id,
        clientNome: res.route.params.res.client.name,
        serviceNome: res.route.params.res.service.nome,
        clientNumber: res.route.params.res.cliente.numberCellphone,
    })

    const getAgendamento = async (id) => {
        let ret = await Api.get("/api/v1/agendamento/" + id);
        if (ret.data != null) {
            setAppointmentInfo(ret.data);
            return ret
        } else {
            alert("Oops: DEU RUIM")
        }
    };

    let data = getAgendamento(AppointmentInfo.id);

    const handleAgendamentoCancelar = (id) => {
        Api.put("/api/v1/agendamento/cancel/" + id);
    }
    const handleAgendamentoConcluir = (id) => {
        Api.put("/api/v1/agendamento/completed/" + id);
    }
    // Colocar os dados no lugar dos campos
    return (
        <Container>
            <PrimeiroCampo>{AppointmentInfo.id}</PrimeiroCampo>
            <FieldCliente>{AppointmentInfo.clientNome}</FieldCliente>
            <FieldCliente>{AppointmentInfo.serviceNome}</FieldCliente>
            <FieldCliente>{AppointmentInfo.clientNumber}</FieldCliente>
            <AreaBotaoFinalizar onPress={handleAgendamentoConcluir}>
                <TextoBotao>Finalizar Atendimento</TextoBotao>
            </AreaBotaoFinalizar>
            <AreaBotaoCancelar onPress={handleAgendamentoCancelar}>
                <TextoBotao>Cancelar</TextoBotao>
            </AreaBotaoCancelar>
        </Container>
    );
}