import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text } from 'react-native';
import api from '../../Api';
import SignInput from '../../components/SignInput';
import { 
Container, 
InputArea, 
CustomButton, 
CustomButtonText, 
ButtonSignOut, 
ButtonSignOutText,
} from './styles';

export default ({route}) => {
    console.log(route.params)

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [cnpjField, setCnpjField] = useState('');
    const [enderecoField, setEnderecoField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');

    const handleLogoutClick = async () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
     }

    const handleMessageButtonClickCreateSucess = () => {
        navigation.reset({
            routes: [{name: 'ProfileBarber'}]
        });
    }


    const handleEditClick = async () => { //Salvar
        if(nameField != '' && cnpjField != '' && enderecoField != '' && telefoneField != '' ) {
            try {
                const dataService = {
                    id : id,
                    nome: nameField,
                    cnpj: cnpjField,
                    endereco: enderecoField,
                    telefone: telefoneField
                }
                console.log(dataService)
                const response = await api.put("/api/v1/estabelecimento/" + id, dataService) 
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
            
            <Text>Bem vindo {route.params?.name}</Text>
            <InputArea>
 
                <SignInput 
                        placeholder= {"Nome"}
                        value={nameField}
                        onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                        placeholder="CNPJ"
                        value={cnpjField}
                        onChangeText={t=>setCnpjField(t)}
                />

                <SignInput 
                        placeholder="Endereço"
                        value={enderecoField}
                        onChangeText={t=>setEnderecoField(t)}
                />

                <SignInput 
                        placeholder="Telefone"
                        value={telefoneField}
                        onChangeText={t=>setTelefoneField(t)}
                />

                <CustomButton onPress={handleEditClick}>
                    <CustomButtonText>Salvar</CustomButtonText>
                </CustomButton>

                <ButtonSignOut onPress={handleLogoutClick}>
                    <ButtonSignOutText>Sair</ButtonSignOutText>
                </ButtonSignOut>
            
            </InputArea>
        </Container>
    );
}
