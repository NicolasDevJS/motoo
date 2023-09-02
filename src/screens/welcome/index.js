import { useEffect, useState } from "react";
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles"; 
import { ValidateMobileNumber } from '../../services/user';
import { GetToken } from "../../services/localStorage";


export default function Welcome() {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState("");

    const validateMobile = async () => {
        const isValid = await ValidateMobileNumber({ mobile })
        if (isValid['status'] == 'true') {
            navigation.navigate('InformPassword', { mobile })
        } else {
            Alert.alert('Erro', 'Número não encontrado')
        }
    }

    useEffect(() => {
        (async () => {
            const token = await GetToken();
            if (token) {
                navigation.navigate('Home')
            }
        })();
    }, [])

    return (
        <S.Container>    
            <S.Title>Por favor insira o seu número de celular </S.Title>
            <S.Mobile 
                keyboardType='numeric'
                placeholder='(00) 00000-0000'
                value={mobile}
                onChangeText={setMobile}
            />
            <S.MobileButton onPress={validateMobile}>
                <S.MobileText>Consultar número</S.MobileText>
            </S.MobileButton>
        </S.Container>
    );
}