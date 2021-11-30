import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const Cnpj = styled.Text`
  font-size: 17px;
`;
const Endereco = styled.Text`
  font-size: 17px;
`;
const Telefone = styled.Text`
  font-size: 17px;
`;
const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border:1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default ({data}) => {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Establishment', {
            id:data.id,
            name:data.name,
            cnpj:data.cnpj,
            address:data.address,
            numberCellphone:data.numberCellphone
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
                    <SeeProfileButtonText>Ver Mais</SeeProfileButtonText>
                </SeeProfileButton>

        </InfoArea>

    </Area>
  );
};