import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(()=>{})

export const AuthProvider = ({ children }: any) => {

    const [token, setToken] = useState<string>(localStorage.getItem('token') || '');

    useEffect(() => {
        localStorage.setItem('token', token);
      }, [token]);

    const login = (token:any) => {
        setToken(token);
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return(
        <AuthContext.Provider value={{
            token,
            login,
            setToken,
            logout
            }}> 
            {children}
        </AuthContext.Provider>
    )
}