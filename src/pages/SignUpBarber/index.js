import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SignInput from '../../components/SignInput';
import api from '../../Api';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    HeaderArea,
    HeaderTitle
} from './styles';

export default () => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [addressField, setaddressField] = useState('');
    const [celphoneField, setcelphoneField] = useState('');
    const [cnpjField, setcnpjField] = useState('');
    const handleMessageButtonClickLoginSucess = () => {
        navigation.reset({
            routes: [{ name: 'MainTabBarber' }]
        });
    }

    const handleBusinessClick = async () => {
        if (nameField != '' && cnpjField != '' && addressField != '' && celphoneField != '') {
            try {
                const responsible = {
                    id: 81
                }
                const dataBusiness = {
                    address: addressField,
                    cnpj: cnpjField,
                    name: nameField,
                    numberCellphone: celphoneField,
                    responsible: responsible
                }
                const response = await api.post("/api/v1/estabelecimento", dataBusiness)
                if (response.data != null) {
                    handleMessageButtonClickLoginSucess()
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
            <HeaderArea>
                <HeaderTitle numberOfLines={2}>Cadastre seu estabelecimento</HeaderTitle>
            </HeaderArea>
            <InputArea>
                <SignInput
                    placeholder="Digite o nome do estabelecimento"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput
                    placeholder="Digite seu CNPJ"
                    value={cnpjField}
                    onChangeText={t => setcnpjField(t)}
                />
                <SignInput
                    placeholder="Digite o telefone"
                    value={celphoneField}
                    onChangeText={t => setcelphoneField(t)}
                />
                <SignInput
                    placeholder="Digite seu endereço"
                    value={addressField}
                    onChangeText={t => setaddressField(t)}
                />
                <CustomButton onPress={handleBusinessClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    );
}