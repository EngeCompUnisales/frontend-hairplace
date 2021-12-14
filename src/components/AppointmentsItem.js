import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Area, Avatar, InfoArea, ServiceName, SeeProfileButton, SeeProfileButtonText} from '../components/styles.js';

export default ({ data }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('CancelAppointment', {
        id: data.id 
    })
}

  return (
    <Area onPress={handleClick}>
      {<Avatar source={{ uri: data.avatar }} />}
      <InfoArea>
        <ServiceName>{data.name}</ServiceName>
      </InfoArea>
    </Area>
  );
};