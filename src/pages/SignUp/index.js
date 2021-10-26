import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from "../../assets/barberlogo.svg";


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    

/*    const handleMessageButtonClick = () => {
        
      }
*/
      const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }


    return (
        <Container>

            <InputArea>
                
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
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            
            </InputArea>

        </Container>
    );
}