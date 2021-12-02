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

export default (res) => {
    const [AppointmentInfo, setAppointmentInfo] = useState({
        id: res.route.params.id,
        clientNome: res.route.params.res.client.name,
        serviceNome: res.route.params.res.service.nome,
        clientNumber: res.route.params.res.cliente.numberCellphone,
    })

    const getAgendamento = async (id) => {
        let ret = await Api.get("/api/v1/agendamento/" + id);
        if(ret.data != null){
            setAppointmentInfo(ret.data);
            return ret
        }else{
            console.log('Deu Ruim!')
        }
    };
    let data = getAgendamento(AppointmentInfo.id);
    
    const handleAgendamentoCancelar = () => {
        Api.put("/api/v1/agendamento/cancel/" + paramID);
    }

    const handleAgendamentoConcluir = () => {
        Api.put("/api/v1/agendamento/completed/" + paramID);
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