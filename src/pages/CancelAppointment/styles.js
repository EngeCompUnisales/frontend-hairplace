import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #D4D2D5;
`;

export const PrimeiroCampo = styled.Text`
    color: #000;
    margin: 100px auto 10px;
    font-size: 18px;
`;

export const FieldCliente = styled.Text`
    color: #000;
    margin: 10px auto;
    font-size: 18px;
`;

export const AreaBotao = styled.TouchableOpacity`
    height: 60px;
    background-color: #ff0000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextoBotao = styled.Text`
    font-size: 18px;
    color: #fff;
`;