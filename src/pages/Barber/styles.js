import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #D4D2D5;
    justify-content: center;
    
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    background-color: #D4D2D5;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #D4D2D5;
    margin:20px auto;
`;
export const HeaderTitle = styled.Text`
    width: 850px;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
`;
export const ButtonAgendamento = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #000000;
  
  margin:50px auto;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const ButtonAgendamentoText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;
export const PageBody = styled.View`


`;

export const UserContactArea = styled.View`
`;

export const UserInfoArea = styled.View`
width: 300px;
height: 40px;
background-color: #000000;

margin:50px auto;
border-radius: 30px;
justify-content: center;
align-items: center;

`;
export const UserInfoAreaText = styled.Text`
font-size: 18px;
color: #FFF;
`;

