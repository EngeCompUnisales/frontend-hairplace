import React, { useState } from 'react';
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
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

import api from '../../Api';

import SignInput from '../../components/SignInput';

import Logo from "../../assets/logo.png";


export default () => {

    const { dispatch: userDispatch} = useNavigation(UserContext);

    const navigation = useNavigation('');

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    

    const handleSingClick = async () => {
        if(emailField != '' && passwordField != '') {

            try {
                console.log("TESTE")
                const response = await api.get("/api/v1/auth/login", {
                            params : {
                            email: emailField,
                            password: passwordField
                        }
                    })
                
                console.log(response.data)

                if(response.data != null) {
                    
                    const responseEstablishment = await api.get("/api/v1/estabelecimento/responsible/" + response.data.id);

                    console.log("response estabelecimento")
                    console.log(responseEstablishment.data)
                    
                    if(responseEstablishment.data != null){
                        handleMessageButtonClickLoginBarberSucess();
                    }else{
                        handleMessageButtonClickLoginSucess();
                    }
                    //handleMessageButtonClickLoginSucess();//remover dps
                }else{
                    alert('E-mail ou senha errados');
                }
                   
            } catch (err) {
                alert('Erro no Login, Tente novamente!' + err);
            }

        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    const handleMessageButtonClickLoginSucess = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        });
    }

    const handleMessageButtonClickLoginBarberSucess = () => {
        navigation.reset({
            routes: [{name: 'MainTabBarber'}]
        });
    }

    return (
        <Container>

            <InputArea>
            <Image source={require("../../assets/logo.png")} style = {{ width: "100%", height: 160 }}/>
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

                <CustomButton onPress={handleSingClick}>
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