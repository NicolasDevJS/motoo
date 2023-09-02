import { Bar, Inside, Left, ScreenName, Profile } from './styles';
import {
    Entypo, 
    Ionicons 
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


export function Header({ title, screen}) {
    const navigation = useNavigation();
    
    return (
        <Bar>
            <Inside>
                <Left>
                    { screen != 'Home' ? (
                        <>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Entypo name="chevron-thin-left" size={15} color="#010101" />
                            </TouchableOpacity>
                            <ScreenName>{title}</ScreenName>
                        </>
                        ) :(
                            <ScreenName>{title}</ScreenName>
                        )}
                </Left>
                <Profile>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>  
                        <Ionicons name="ios-person-outline" size={20} color="#010101" />
                    </TouchableOpacity>
                </Profile>
            </Inside>
        </Bar>
    );
}