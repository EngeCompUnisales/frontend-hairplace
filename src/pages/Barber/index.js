import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Api from '../../Api';

import { ButtonAgendamento, 
    Container,
    Scroller,
    ButtonAgendamentoText,
    HeaderArea,
    HeaderTitle,
    PageBody,
    UserInfoArea,
    UserInfoAreaText,
    UserContactArea
} from './styles.js';

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


    const handleAgendamentoClick = () => { 
        console.log(parametros.route.params.id)
        navigation.navigate('Appointments', {
            id: parametros.route.params.id

        })
    }


    
    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle >
                        <Text >{parametros.route.params.name}</Text>
                    </HeaderTitle>

                </HeaderArea>
       
                <PageBody>
                <   ButtonAgendamento onPress={handleAgendamentoClick}>
                        <ButtonAgendamentoText>Fazer Agendamento</ButtonAgendamentoText>
                    </ButtonAgendamento>
                    <UserInfoArea>
                            <UserInfoAreaText>
                            <Text >Descrição</Text>
                            </UserInfoAreaText>
                    </UserInfoArea>
                    
                    <UserContactArea>
                        
                    </UserContactArea>
                </PageBody>

            </Scroller>
        </Container>
    );
}
