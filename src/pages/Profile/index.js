import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import {
    Container,
    AvatarIcon,
    UserName,
    UserEmail,
    ButtonSignOut,
    ButtonSignOutText
} from './styles.js';

export default () => {
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);
    const handleLogoutClick = async () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    return (
        <Container>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <AvatarIcon source={{ uri: user.avatar }} />
            <ButtonSignOut onPress={handleLogoutClick}>
                <ButtonSignOutText>SAIR</ButtonSignOutText>
            </ButtonSignOut>
        </Container>
    )
}