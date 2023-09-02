import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { Header } from '../../components/header'
import { DeleteToken } from "../../services/localStorage";


export default function Profile() {
    const navigation = useNavigation()

    const deleteToken = async () => {
        await DeleteToken()
        navigation.navigate('Welcome')
    }

    return (
        <S.Container>
            <Header title="Perfil" />
            <S.ExitButton onPress={deleteToken}>
                <S.ExitText>
                    Sair do aplicativo
                </S.ExitText>
            </S.ExitButton>
        </S.Container>
    );
}