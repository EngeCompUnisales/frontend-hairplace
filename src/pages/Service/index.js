import React, {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../Api';
import SignInput from '../../components/SignInput';
import {Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonTextBold,
} from './styles';

export default (parametros) => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [precoField, setPrecoField] = useState('');
    const id = parametros.route.params.id

    const handleMessageButtonClickCreateSucess = () => {
        navigation.reset({
            routes: [{name: 'Services'}]
        });
    }

    const getService = async (id) => {
        let res = await api.get("/api/v1/servicos/" + id);
        if(res.data != null){
            console.log(res.data)
        } else {
            alert("Oops: DEU RUIM")
        }
        console.log("FIM: getService")
    };
    const handleMessageButtonClick = () => { //Botão Voltar
        navigation.reset({
            routes: [{name: 'Services'}]
        });
    }

    const handleEditClick = async () => { //Editar
        if(nameField != '' && precoField != '' ) {
            try {
                const dataService = {
                    id : id,
                    nome: nameField,
                    preco: precoField
                }
                console.log(dataService)
                const response = await api.put("/api/v1/servico/" + id, dataService) 
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

    const handleDeletClick = async () => { //Deletar
                try {
                    const response = await api.delete("/api/v1/servico/"+ id) 
                    console.log(response.data)
                    if(response.data != null) {        
                        handleMessageButtonClickCreateSucess()
                    } else {
                        alert('Erro na exclusão do serviço!' + err);
                    }
                } catch (err) {
                    alert('Erro na exclusão do serviço, Tente novamente!' + err);
                }
            }

    return (
        <Container>
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

                <CustomButton onPress={handleEditClick}>
                    <CustomButtonText>Editar serviço</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleDeletClick}>
                    <CustomButtonText>Deletar serviço</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
                </SignMessageButton>
            
            </InputArea>
        </Container>
    );
}
