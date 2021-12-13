import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../Api';
import ServiceItem from '../../components/ServiceItem.js';
import {
  Container,
  Scroller,
  InputArea,
  LoadingIcon,
  CreateButton,
  CreateButtonText,
  ListArea
} from './styles.js';

export default () => {
  const navigation = useNavigation();
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);



  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    setLoading(true)
    setList([])
    let res = await api.get("/api/v1/servicos/");
    if (res != null) {
      setList(res.data)
    } else {
      alert("Oops: DEU RUIM")
    }
    setLoading(false)
  };

  const onRefresh = () => {
    setRefreshing(false)
    getServices()
  }

  return (
    <Container>
      
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}
        <ListArea>
          {list.map((item, key) => (
            <ServiceItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};