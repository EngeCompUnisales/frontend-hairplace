import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #D4D2D5;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #4EADBE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const SearchArea = styled.View`
  background-color: #4EADBE;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 20px;
  margin-bottom: 0px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const EmptyWarning = styled.Text`
    text-align:center;
    margin-top:30px;
    color:#FFFFFF;
    font-size:25px;
`;