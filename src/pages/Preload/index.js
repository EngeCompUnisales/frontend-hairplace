import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from "../../assets/barberlogo.svg";

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            navigation.navigate('SignIn');
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo alt='BarberLogo' width="100%" height="160" />
            <LoadingIcon size="large" color="#000000" />
        </Container>
    );
}