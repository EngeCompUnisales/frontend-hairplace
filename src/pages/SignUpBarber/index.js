import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';



export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [nameField, setNameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [addressField, setaddressField] = useState('');
    const [cnpjField, setcnpjField] = useState('');

    

/*    const handleMessageButtonClick = () => {
        
      }
*/
      const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }


    return (
        <Container>

            <InputArea>
                
                <SignInput 
                        placeholder="Digite seu nome"
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

                <SignInput 
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput 
                    placeholder="Digite sua senha"
                    valeu={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton /*onPress={handleMessageButtonClick}*/>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
                </SignMessageButton>
            
            </InputArea>

        </Container>
    );
}