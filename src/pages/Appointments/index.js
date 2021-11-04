import React, {useEffect, useState} from 'react';
import {
  Container,
  HeaderTitle,
  Scroller,
  ListArea
} from './styles.js';
import {RefreshControl} from 'react-native'
import AppointmentsItem from '../../components/AppointmentsItem';

import Api from '../../Api';

export default () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getAppointments()
  },[])

  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    const response = await Api.get("/api/v1/agendamento")

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
       
      <Scroller refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getAppointments}/>
      }>
        <ListArea>
          {list.map((item, k) => (
            <AppointmentsItem data={item} key={k} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};