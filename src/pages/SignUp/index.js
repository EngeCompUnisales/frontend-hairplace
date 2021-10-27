import React, { useState, useContext } from 'react';
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
import api from '../../Api';



export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [nameField, setNameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [cpfField, setCpfField] = useState('');
    const [numberField, setNumberField] = useState('');
    const [birthDateField, setBirthDateField] = useState('');

    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleMessageButtonClickLoginSucess = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        });
    }


    const handleSingClick = async () => {
        if(emailField != '' && nameField != '' && passwordField != '' && cpfField != '' && numberField != '' ) {

            try {

                const dataProfile = {
                    email: emailField,
                    password: passwordField,
                    birthDate : "2021-10-27T23:31:10.352+00:00",
                    cpf: cpfField,
                    name: nameField,
                    numberCellphone: numberField
                }

                console.log("TESTE")
                const response = await api.post("/api/v1/user", dataProfile) 

                console.log(response.data)

                if(response.data != null) {        
                    handleMessageButtonClickLoginSucess()
                }
                   
            } catch (err) {
                alert('Erro no Login, Tente novamente!' + err);
            }

        } else {
            alert("Preencha os campos");
        }
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

                <SignInput  
                        placeholder="Digite seu cpf"
                        value={cpfField}
                        onChangeText={t=>setCpfField(t)}
                />
                
                <SignInput 
                        placeholder="Numero de Celular "
                        value={numberField}
                        onChangeText={t=>setNumberField(t)}
                />
                
                
                {/* <DateInput 
                    value={birthDateField}
                /> */}
                

                <CustomButton onPress={handleSingClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
                </SignMessageButton>
            
            </InputArea>

        </Container>
    );
}