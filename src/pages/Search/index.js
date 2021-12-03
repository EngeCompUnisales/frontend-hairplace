import React, { useState } from 'react';
import BarberItem from '../../components/BarberItem';
import ServiceItem from '../../components/ServiceItem';
import Api from '../../Api';
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
  HeaderTitle,
} from './styles';

export default () => {
  const [searchText, setSearchText] = useState('');
  const [loadingE, setLoadingE] = useState(false);
  const [loadingS, setLoadingS] = useState(false);
  const [listE, setListE] = useState([]);
  const [listS, setListS] = useState([]);
  const [emptyListE, setEmptyListE] = useState(false);
  const [emptyListS, setEmptyListS] = useState(false);

  const searchBarbers = async () => {
    setEmptyListE(false);
    setEmptyListS(false);
    setLoadingE(true);
    setLoadingS(true);
    setListE([]);
    setListS([]);
    if (searchText != '') {
      let res = await Api.get("/api/v1/estabelecimento/find/" + searchText);
      console.log(res.data)
      if (res.data != null) {
        setListE(res.data);
      } else {
        setEmptyListE(true);
      }
    }
    setLoadingE(false);
    if (searchText != '') {
      let res2 = await Api.get("/api/v1/servico/find/" + searchText);
      console.log(res2.data)
      if (res2.data != null) {
        setListS(res2.data);
      } else {
        setEmptyListS(true);
      }
    }
    setLoadingS(false);
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do estabelecimento"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autofocus
          selectTextOnFocus
        />
      </SearchArea>
      <Scroller>
        {loadingE && <LoadingIcon size="large" color="#000000" />}
        {emptyListE && (
          <EmptyWarning>
            "{searchText}" não encontrado(a)
          </EmptyWarning>
        )}
        <HeaderTitle>
          Estabelecimentos
        </HeaderTitle>
        <ListArea>
          {listE.map((item, k) => (
            <BarberItem data={item} key={k} />
          ))}
        </ListArea>
      </Scroller>
      <Scroller>
        {loadingS && <LoadingIcon size="large" color="#000000" />}
        {emptyListS && (
          <EmptyWarning>
            "{searchText}" não encontrado(a)
          </EmptyWarning>
        )}
        <HeaderTitle>
          Serviços
        </HeaderTitle>
        <ListArea>
          {listS.map((item, k) => (
            <ServiceItem data={item} key={k} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};