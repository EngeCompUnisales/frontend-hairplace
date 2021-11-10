import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonTextBold,
    HeaderArea,
    HeaderTitle
} from './styles';

import SignInput from '../../components/SignInput';
import api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [precoField, setPrecoField] = useState('');


    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Services'}]
        });
    }

    const handleMessageButtonClickCreateSucess = () => {
        navigation.reset({
            routes: [{name: 'MainTabBarber'}]
        });
    }

    const handleCreateClick = async () => {
        if(nameField != '' && precoField != '' ) {

            try {

                const business = {
                   id : 91
                }

                const dataService = {
                    businessService : business,
                    nome: nameField,
                    preco: precoField
                }   
                console.log(dataService)
                const response = await api.post("/api/v1/servico", dataService) 

                console.log(response.data)
                
                if(response.data != null) {        
                    handleMessageButtonClickCreateSucess()
                } else {
                    alert('Erro no cadastro do serviço!' + err);
                }
                   
            } catch (err) {
                alert('Erro no cadastro do serviço, Tente novamente!' + err);
            }

        } else {
            alert("Preencha os campos");
        }
    }

    return (
        <Container>
            <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Cadastre seu serviço</HeaderTitle>
            </HeaderArea>
            
            <InputArea>
                
                <SignInput 
                        placeholder="Nome serviço"
                        value={nameField}
                        onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                        placeholder="Preço serviço"
                        value={precoField}
                        onChangeText={t=>setPrecoField(t)}
                />

                <CustomButton onPress={handleCreateClick}>
                    <CustomButtonText>Cadastrar serviço</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
                </SignMessageButton>
            
            </InputArea>
        </Container>
    );
}