import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Area, Avatar, InfoArea, UserName, SeeProfileButton, SeeProfileButtonText } from '../components/styles.js';

export default ({ data }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars
    })
  }

  return (
    <Area onPress={handleClick}>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <SeeProfileButton>
          <SeeProfileButtonText>Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};