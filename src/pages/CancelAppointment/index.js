import React, {useState, useEffect} from 'react';
import {
  Container,
  PrimeiroCampo,
  FieldCliente,
  AreaBotao,
  TextoBotao
} from './styles.js';

import Api from '../../Api';

export default () => {

    

    return (
        <Container>
            <PrimeiroCampo>2021-11-17 23:53:14</PrimeiroCampo>
            <FieldCliente>Nome do Cliente</FieldCliente>
            <FieldCliente>Email do Cliente</FieldCliente>
            <FieldCliente>Telefone do Cliente</FieldCliente>
            <FieldCliente>Cpf do Cliente</FieldCliente>
            <FieldCliente>Serviço</FieldCliente>

            <AreaBotao>
                <TextoBotao>Cancelar</TextoBotao>
            </AreaBotao>
        </Container>
    );

}