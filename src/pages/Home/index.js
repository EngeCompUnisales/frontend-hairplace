import React, {useState, useEffect} from 'react';
import {Platform, RefreshControl} from 'react-native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LoadingIcon,
  ListArea
} from './styles.js';

import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../../assets/search.svg';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem.js'

export default () => {
  const navigation = useNavigation();

  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(()=>{
    getBarbers()
  },[])

  const getBarbers = async () => {
    setLoading(true)
    setList([])

    let res = await Api.get("/api/v1/estabelecimento");
      if(res != null){
          setList(res.data)
      } else {
        alert("Oops: DEU RUIM")
      }
      setLoading(false)
  };

  const onRefresh = () => {
    setRefreshing(false)
    getBarbers()
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o Estabelecimento.
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};