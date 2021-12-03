import React, { useState, useEffect } from 'react';
import AppointmentsItem from '../../components/AppointmentsItem';
import { RefreshControl } from 'react-native';
import Api from '../../Api';
import {
  Container,
  HeaderTitle,
  HeaderArea,
  Scroller,
  LoadingIcon,
  ListArea
} from './styles.js';

export default (route) => {
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAppointments()
  }, [])

  const getAppointments = async () => {
    setLoading(true)
    setList([])
    let res = await Api.get("/api/v1/agendamentos/cliente/" + route.params.userId);
    if (res.data != null) {
      setList(res.data)
    } else {
      alert("Oops: DEU RUIM")
    }
    setLoading(false)
  };

  const onRefresh = () => {
    setRefreshing(false)
    getAppointments()
  }
  
  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Esses são os seus Agendamentos
          </HeaderTitle>
        </HeaderArea>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}
        <ListArea>
          {list.map((item, key) => (
            <AppointmentsItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};