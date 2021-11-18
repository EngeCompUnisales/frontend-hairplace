import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { 
Container,
Scroller,
ListArea 
} from './styles';
import { RefreshControl } from 'react-native'
import AppointmentsItem from '../../components/AppointmentsItem';

import api from '../../Api';

export default () => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getAppointments()
  },[])

  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    const response = await api.get("/api/v1/agendamento")

    console.log(response.data)

    if(response.data != null) {        
      setList(response.data)
    }else{
      alert("Erro Ao recuperar os Agendamentos ")
    }
    setLoading(false);
  };

  return (
    <Container>
      <Text>Horarios agendado do barbeiro</Text>

      <Scroller refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getAppointments}/>
      }>
        {/*<ListArea>
          {list.map((item, k) => (
            <AppointmentsItem data={item} key={k} />
          ))}
        </ListArea> */}
      </Scroller>

    </Container>
  );
}