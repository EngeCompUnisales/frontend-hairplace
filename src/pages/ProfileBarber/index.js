import React, {useState, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import api from '../../Api';
import SignInput from '../../components/SignInput';
import {Container, InputArea, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonTextBold,
} from './styles';

export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [cnpjField, setCnpjField] = useState('');
    const [enderecoField, setEnderecoField] = useState('');
    const [telefoneField, setTelefoneField] = useState('');

    const { state: user } = useContext(UserContext);
    console.log(user.name)
    console.log(user.id)
    
    const handleMessageButtonClickCreateSucess = () => {
        navigation.reset({
            routes: [{name: 'ProfileBarber'}]
        });
    }

    const getEstabelecimento = async (id) => {
        let res = await api.get("/api/v1/estabelecimento/" + id);
        if(res.data != null){
            console.log(res.data)
        } else {
            alert("Oops: DEU RUIM")
        }
        console.log("FIM: getEstabelecimento")
    };

    const handleEditClick = async () => { //Editar
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
            <InputArea>
                
                <SignInput 
                        placeholder="Nome"
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
            
            </InputArea>
        </Container>
    );
}
