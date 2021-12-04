import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Area, InfoArea, UserName, Preco, SeeProfileButton, SeeProfileButtonText, ServiceName } from './styles.js';

export default ({ data }) => {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Barber', {
            id: data.businessService.id,
            name: data.businessService.name
        })
    }

    return (
        <Area onPress={handleClick}>
            <InfoArea>
                <ServiceName>Serviço: {data.nome}</ServiceName>
                <UserName>Estabelecimento: {data.businessService.name}</UserName>
                <Preco>R$ {data.preco}</Preco>
                <SeeProfileButton>
                    <SeeProfileButtonText>ir Para</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
};