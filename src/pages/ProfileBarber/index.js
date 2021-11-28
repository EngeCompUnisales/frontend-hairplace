import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  Scroller,
  LoadingIcon,
  ButtonSignOut, 
  ButtonSignOutText,
  ListArea
} from './styles.js';

import { useNavigation } from '@react-navigation/native';
import api from '../../Api';
import EstablishmentItem from '../../components/EstablishmentItem.js';

export default ({route}) => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

  

    useEffect(()=>{
        getEstablishment()
    },[])

    const getEstablishment = async () => {
        setLoading(true)
        setList([])

        let res = await api.get("/api/v1/estabelecimento/responsible/" + route.params?.id);
            if(res != null){
                setList(res.data)
        } else {
            alert("Oops: DEU RUIM")
        }
        setLoading(false)
    };

    const onRefresh = () => {
        setRefreshing(false)
        getEstablishment()
    }

    const handleLogoutClick = async () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
     }

    return (
        <Container>

            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
        
            {loading && <LoadingIcon size="large" color="#FFFFFF" />}

            <ListArea>
                {list.map((item, key) => (
                    <EstablishmentItem key={key} data={item} />
                ))}
            </ListArea>

            </Scroller>

            <ButtonSignOut onPress={handleLogoutClick}>
                <ButtonSignOutText>Sair</ButtonSignOutText>
            </ButtonSignOut>

        </Container>
  );
};