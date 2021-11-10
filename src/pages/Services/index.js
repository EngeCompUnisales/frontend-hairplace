import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CreateButton,
    CreateButtonText,
    HeaderArea,
    HeaderTitle
} from './styles';

import SignInput from '../../components/SignInput';

export default (parametros) => {

  const navigation = useNavigation()

  console.log(parametros.route.params.id)

  const CreateMessageButton = () => {
    navigation.reset({
        routes: [{name: 'ServicesC'}]
    });
  }


  return (
    <Container>
      <Text>Serviços</Text>

      <InputArea> 
        <CreateButton onPress={CreateMessageButton}>
            <CreateButtonText>Criar</CreateButtonText>
        </CreateButton>
      </InputArea>

    </Container>
  );
}