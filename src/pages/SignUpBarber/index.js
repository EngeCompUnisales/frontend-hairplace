import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    HeaderArea,
    HeaderTitle,
    SignMessageButton,
} from './styles';

import SignInput from '../../components/SignInput';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [addressField, setaddressField] = useState('');
    const [cnpjField, setcnpjField] = useState('');

/*    const handleSignClick = () => {
        
      }
*/

    return (
        <Container>
            <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Cadastre seu estabelecimento</HeaderTitle>
            </HeaderArea>
            
            <InputArea>
                
                <SignInput 
                        placeholder="Digite o nome do estabelecimento"
                        value={nameField}
                        onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                        placeholder="Digite seu CNPJ"
                        value={cnpjField}
                        onChangeText={t=>setcnpjField(t)}
                />

                <SignInput 
                        placeholder="Digite seu endereço"
                        value={addressField}
                        onChangeText={t=>setaddressField(t)}
                />

                <CustomButton /*onPress={handleSignClick}*/>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            
            </InputArea>
        </Container>
    );
}