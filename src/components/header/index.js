import { Bar, Inside, Left, ScreenName, Profile } from './styles';

import {
    Entypo, 
    Ionicons 
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function Header({ title, screen}) {
    const navigation = useNavigation();
    
    return (
        <Bar>
            <Inside>
                <Left>
                    { screen != 'Home' ? (
                            <>
                                <Entypo name="chevron-thin-left" size={15} color="#010101" />
                                <ScreenName>{title}</ScreenName>
                            </>
                            
                        ) :(
                            <ScreenName>{title}</ScreenName>
                        )}
                </Left>
                <Profile>
                    <Ionicons name="ios-person-outline" size={20} color="#010101" />
                </Profile>
                
            </Inside>

        </Bar>
);
}