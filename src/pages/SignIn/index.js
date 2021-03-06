import React, { useState } from 'react';
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import api from '../../Api';
import SignInput from '../../components/SignInput';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

export default () => {
    const { dispatch: userDispatch } = useNavigation(UserContext);
    const navigation = useNavigation('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSingClick = async () => {
        if (emailField != '' && passwordField != '') {
            try {
                const response = await api.get("/api/v1/auth/login", {
                    params: {
                        email: emailField,
                        password: passwordField
                    }
                })
                if (response.data != null) {
                    const responseEstablishment = await api.get("/api/v1/estabelecimento/responsible/" + response.data.id);
                    if (responseEstablishment.data.length > 0) {
                        function sendResponsibleId() {
                            navigation.navigate('MainTabBarber', {
                                screen: 'ProfileBarber',
                                params: {
                                    id: response.data.id,
                                    name: response.data.name
                                },
                            });
                        }
                        sendResponsibleId();
                        //handleMessageButtonClickLoginBarberSucess();
                    } else {
                        //handleMessageButtonClickLoginSucess(response);
                        function gotoMain() {
                            navigation.navigate('MainTab', {
                                screen: 'ProfileUser',
                                params: {
                                    id: response.data.id,
                                    name: response.data.name
                                }
                            });
                        }

                        gotoMain();
                    }
                    //handleMessageButtonClickLoginSucess(); //remover dps
                } else {
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
            routes: [{ name: 'SignUp' }]
        });
    }

    const handleMessageButtonClickLoginSucess = (response) => {
        navigation.navigate('MainTab', {
            params: {
                id: response.data.id,
                name: response.data.name
            }
        });
    }

    const handleMessageButtonClickLoginBarberSucess = () => {
        navigation.reset({
            routes: [{ name: 'MainTabBarber' }]
        });
    }

    return (
        <Container>
            <InputArea>
                <Image source={require("../../assets/logo.png")} style={{ width: "100%", height: 160 }} />
                <SignInput
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    placeholder="Digite sua senha"
                    valeu={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />
                <CustomButton onPress={handleSingClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Ainda n??o possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </InputArea>
        </Container>
    );
}