import React, { useContext } from 'react';
import { Image } from "react-native";
import { UserContext } from '../contexts/UserContext';
import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';
import { TabArea, TabItem } from '../components/styles.js';

export default ({ state, navigation }) => {
    const { state: user } = useContext(UserContext);
    const goTo = (screenName) => {
        navigation.navigate(screenName, {
            userId: 28
        })
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{ opacity: state.index === 1 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('GetAppointments')}>
                <TodayIcon style={{ opacity: state.index === 2 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
                {/*<TabItem onPress={()=>goTo('Favorites')}>
                    <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                </TabItem>*/}
            <TabItem onPress={() => goTo('Profile')}>
                <AccountIcon style={{ opacity: state.index === 3 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            {/*
                {user.avatar != '' ?
                <AvatarIcon source={{uri: user.avatar}} />
                :
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            }*/}
            </TabItem>
            <TabItem onPress={() => goTo('SignUpBarber')}>
                <Image source={require("../assets/logo.png")} style={{ opacity: state.index === 4 ? 1 : 0.5, width: 24, height: 24 }} fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}