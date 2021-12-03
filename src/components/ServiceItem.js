import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Area, InfoArea, UserName, Preco, SeeProfileButton, SeeProfileButtonText } from '../components/styles.js';

export default ({ data }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Service', {
      id: data.id,
      name: data.name,
      preco: data.preco
    })
  }

  return (
    <Area onPress={handleClick}>
      <InfoArea>
        <UserName>{data.nome}</UserName>
        <Preco>R$ {data.preco}</Preco>
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Mais</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};