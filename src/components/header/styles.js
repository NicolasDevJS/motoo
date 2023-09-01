import styled from 'styled-components/native';

export const Bar = styled.View`
    height: 120px;
    background-color: #F1F3F5;
`

export const Inside = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
    margin-right: 20px;
    margin-left: 20px;    
    height: 30px;
`

export const Left = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const ScreenName = styled.Text`
    padding-left: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #010101;
`

export const Profile = styled.TouchableOpacity`
    width: 32px;
    height: 20px;
`
