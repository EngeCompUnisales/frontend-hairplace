import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Area, InfoArea, UserName, Endereco, Cnpj, Telefone, SeeProfileButton, SeeProfileButtonText } from '../components/styles.js';

export default ({ data }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Establishment', {
      id: data.id,
      name: data.name,
      cnpj: data.cnpj,
      address: data.address,
      numberCellphone: data.numberCellphone
    })
  }

  return (
    <Area onPress={handleClick}>
      <InfoArea>
        <UserName>Nome: {data.name}</UserName>
        <Endereco>Endereço: {data.address}</Endereco>
        <Cnpj>CNPJ: {data.cnpj}</Cnpj>
        <Telefone>Telefone: {data.numberCellphone}</Telefone>
        <SeeProfileButton>
          <SeeProfileButtonText>Editar</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};