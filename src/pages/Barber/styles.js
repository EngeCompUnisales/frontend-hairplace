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
  width: 50%;
  height: 20px;
  background-color: #000;
  
  margin:50px auto;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const ButtonAgendamentoText = styled.Text`
    font-size: 13px;
    color: #FFF;
    margin-top: -5px;
`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    
    border-radius: 30px;


`;

export const UserContactArea = styled.View`
    width: 300px;
    height: 100px;
    background-color: #D4D2D5;

    margin:50px auto;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 170px;
    margin-bottom: 30px;

`;
export const UserContactAreaText = styled.Text`
   
    font-size: 18px;
    color: #FFF;


`;


export const UserInfoArea = styled.View`
width: 300px;
height: 100px;
background-color: #FFF;

margin:10% auto;
border-radius: 30px;
justify-content: center;
align-items: center;
margin-top: 10px;

`;
export const UserInfoAreaText = styled.Text`
font-size: 12px;
color: #000;
margin-top: 50px;
`;