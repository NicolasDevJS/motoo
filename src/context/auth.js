import { createContext, useState } from "react";

export const AuthContext = createContext({});


function AuthProvider({ children }) {
    const [locationEnabled, setLocationEnabled] = useState(false);

    const handleLocationEnabled = ({ locationStatus }) => {
        setLocationEnabled(locationStatus);
    }

    return (
        <AuthContext.Provider value={{ 
            name: "ERICO", 
            locationEnabled,
            handleLocationEnabled,
        }}>
            {children}
        </AuthContext.Provider> 
    );
}

export default AuthProvider;