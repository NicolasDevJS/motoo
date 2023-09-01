import axios from 'axios';
import BACKEND_URL from '../configs';


export const ValidateMobileNumber = async ({ mobile }) => {
    const data = {mobile: mobile }
    try {
        const response = await axios.post('http://localhost:8000/funcionario/numero/', data)
        if (response.status === 200) {
            return response.data
        } else {
            return false
        }
        
        
    } catch (e) {
        console.log(e)
        return  false
    }
}


export const ValidatePassword = async ({ mobile, password }) => {
    const data = { mobile: mobile, password: password }
    try {
        const response = await axios.post('http://localhost:8000/funcionario/loginapp/', data)
        if (response.data["access_token"]) {
            return response.data["access_token"]
        } 
        return response.data
        
    } catch (e) {
        console.log(e)
        return false
    }
}
