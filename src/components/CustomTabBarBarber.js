import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Image } from "react-native";
import { UserContext } from '../contexts/UserContext';


import TodayIcon from '../assets/today.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #BAB8BA;
    flex-direction: row;
    
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('AppointmentsBarber')}>
                <TodayIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('ProfileBarber')}>
                <AccountIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                {/*
                {user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    :
                    <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                }*/}
            </TabItem>
            <TabItem onPress={()=>goTo('Services')}>
                <Image source={require("../assets/logo.png")} style={{opacity: state.index===2? 1 : 0.5 , width:24 , height:24}} fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}