import styled from 'styled-components/native';

export const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #E3E6FF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
    margin-left: 10px;
`;

export const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

export const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

export const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const Preco = styled.Text`
    font-size: 17px;
`;

export const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border:1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;

export const Cnpj = styled.Text`
    font-size: 17px;
`;

export const Endereco = styled.Text`
    font-size: 17px;
`;

export const Telefone = styled.Text`
    font-size: 17px;
`;

export const TabArea = styled.View`
    height: 60px;
    background-color: #BAB8BA;
    flex-direction: row;

`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

export const ServiceName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;