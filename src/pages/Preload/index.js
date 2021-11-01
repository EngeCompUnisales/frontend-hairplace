import React, { useEffect } from 'react';
import { Image } from "react-native";
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

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
            <Image source={require("../../assets/logo.png")}style = {{ width: "100%", height: 160 }}/>
            <LoadingIcon size="large" color="#000000" />
        </Container>
    );
}