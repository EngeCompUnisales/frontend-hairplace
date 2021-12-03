import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

export default ({ route }) => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [cnpjField, setCnpjField] = useState('');
    const [enderecoField, setEnderecoField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');
    const id = route.params?.id;

    const handleMessageButtonClickCreateSucess = () => {
        navigation.reset({
            routes: [{ name: 'ProfileBarber' }]
        });
    }

    const handleLogoutClick = async () => {
        navigation.reset({
            routes: [{ name: 'ProfileBarber' }]
        });
    }

    const handleEditClick = async () => { //Editar
        if (nameField != '' && cnpjField != '' && enderecoField != '' && telefoneField != '') {
            try {
                const dataEstablishment = {
                    id: id,
                    name: nameField,
                    cnpj: cnpjField,
                    address: enderecoField,
                    numberCellphone: telefoneField
                }
                const response = await api.put("/api/v1/estabelecimento/" + id, dataEstablishment)
                if (response.data != null) {
                    handleMessageButtonClickCreateSucess()
                } else {
                    alert('Erro no cadastro do estabelecimento!' + err);
                }
            } catch (err) {
                alert('Erro no cadastro do estabelecimento, Tente novamente!' + err);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    return (
        <Container>
            <InputArea>
                <SignInput
                    placeholder="nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput
                    placeholder="CNPJ"
                    value={cnpjField}
                    onChangeText={t => setCnpjField(t)}
                />
                <SignInput
                    placeholder="Endereço"
                    value={enderecoField}
                    onChangeText={t => setEnderecoField(t)}
                />
                <SignInput
                    placeholder="Telefone"
                    value={telefoneField}
                    onChangeText={t => setTelefoneField(t)}
                />
                <CustomButton onPress={handleEditClick}>
                    <CustomButtonText>Salvar</CustomButtonText>
                </CustomButton>
                <ButtonSignOut onPress={handleLogoutClick}>
                    <ButtonSignOutText>Voltar</ButtonSignOutText>
                </ButtonSignOut>
            </InputArea>
        </Container>
    );
}
