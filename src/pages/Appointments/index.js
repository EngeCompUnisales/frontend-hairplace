import React ,{ useState } from 'react';
import {
  Container,
  HeaderTitle,
  HeaderArea,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonTextBold

} from './styles.js';
import SignInput from '../../components/SignInput';

import api from '../../Api';

export default () => {

  const [serviceField, setServiceField] = useState('');
 
  const handleMessageButtonClick = () => {
    navigation.reset({
        routes: [{name: 'Home'}]
    });
  }


  const handleCreateClick = async () => {
    if(serviceField != '' ) {
        try {
            const business = {
                id : 66
            }

            const client = {
              id : 28
            }   

            const service = {
              id : 144
            }   

            const dataAgendamento = {
              businessService : business,
              client : client,
              service : service,
              startService: "2021-11-17T23:53:14.538Z"
            }   
            
            const response = await api.post("api/v1/agendamento", dataAgendamento) 

            if(response.data != null) {        
                
            } else {
                alert('Erro no agendamento do serviço!' + err);
            }
        } catch (err) {
            alert('Erro no agendamento, Tente novamente!' + err);
        }
    } else {
        alert("Preencha os campos");
    }
}

  return (
    <Container>
      
      <HeaderArea>
              <HeaderTitle numberOfLines={2}>Fazer Agendamento</HeaderTitle>
      </HeaderArea>
      
      <InputArea>
          
          <SignInput 
                  placeholder="Serviço desejado"
                  value={serviceField}
                  onChangeText={t=>setServiceField(t)}
          />

          <CustomButton onPress={handleCreateClick}>
              <CustomButtonText>Agendar</CustomButtonText>
          </CustomButton>

          <SignMessageButton onPress={handleMessageButtonClick}>
              <SignMessageButtonTextBold>Voltar</SignMessageButtonTextBold>
          </SignMessageButton>
      
      </InputArea>
  
    </Container>
  );
};