import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(()=>{})

export const AuthProvider = ({ children }: any) => {

    return(
        <AuthContext.Provider value={{
 
        }}> 
            {children}
        </AuthContext.Provider>
    )
}