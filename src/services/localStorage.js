import AsyncStorage from '@react-native-async-storage/async-storage';


export const StoreToken = async (token) => {
    try {
        await AsyncStorage.setItem('@token', JSON.stringify(token))
    } catch (e) {
        console.log(e)
    }
}


export const GetToken = async (token) => {
    try {
        token = await AsyncStorage.getItem('@token')
        if (token !== null) {
            return JSON.parse(token)
        }
    } catch (e) {
        console.log(e)
    }
}