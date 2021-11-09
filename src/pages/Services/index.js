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

export default () => {

  const navigation = useNavigation()

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