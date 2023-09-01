import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import * as SC from './styles';
import { ValidatePassword } from '../../services/user';
import StoreToken from '../../services/localStorage';


export default function InformPassword({ route }) {
    const mobile = route.params.mobile;
    const navigation = useNavigation();
    const [password, setPassword] = useState('')

    const validatePassword = async () => {
        const result = await ValidatePassword({ mobile, password })
        if (result['status'] != 'error') {
            await StoreToken(result['status'])
            navigation.navigate('Home')
        } else {
            Alert.alert('Erro', 'Problemas com a senha')
        }        
    }

    return (
        <SC.Container>
            <SC.Title>Número encontrado, por favor insira a senha </SC.Title>
            <SC.Mobile 
                secureTextEntry={true}
                placeholder='Sua senha'
                value={password}
                onChangeText={setPassword}
            />
            <SC.MobileButton onPress={validatePassword}>
                <SC.MobileText>Entrar</SC.MobileText>
            </SC.MobileButton>
        </SC.Container>
    );
}