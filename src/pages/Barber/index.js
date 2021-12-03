import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Api from '../../Api';
import {
    ButtonAgendamento,
    Container,
    Scroller,
    ButtonAgendamentoText,
    HeaderArea,
    HeaderTitle,
    PageBody,
    UserInfoArea,
    UserInfoAreaText,
    UserContactArea,
    UserContactAreaText
} from './styles.js';

export default (parametros) => {
    const navigation = useNavigation();
    const [BarberInfo, setBarberInfo] = useState({
        id: parametros.route.params.id,
        name: parametros.route.params.name
    })

    const getBarber = async (id) => {
        let res = await Api.get("/api/v1/estabelecimento/" + id);
        if (res.data != null) {
            setBarberInfo(res.data);
        } else {
            alert("Oops: DEU RUIM")
        }
    };
    getBarber(parametros.route.params.id)
    const handleAgendamentoClick = () => {
        navigation.navigate('Services', {
            id: parametros.route.params.id
        })
    }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle >
                        <Text >{BarberInfo.name}</Text>
                    </HeaderTitle>
                </HeaderArea>
                <PageBody>
                    <UserInfoArea>
                        <UserInfoAreaText>
                            <Text >Descrição {"\n"}</Text>
                            <Text >CNPJ: {BarberInfo.cnpj}</Text>
                        </UserInfoAreaText>
                        <   ButtonAgendamento onPress={handleAgendamentoClick}>
                            <ButtonAgendamentoText>Agendar Atendimento</ButtonAgendamentoText>
                        </ButtonAgendamento>
                    </UserInfoArea>
                    <UserContactArea>
                        <UserContactAreaText>
                            <Text >Tell: {BarberInfo.numberCellphone}, {"\n"}</Text>
                            <Text >Endereço: {BarberInfo.address}</Text>
                        </UserContactAreaText>
                    </UserContactArea>
                </PageBody>
            </Scroller>
        </Container>
    );
}
