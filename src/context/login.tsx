import { createContext, useState } from "react";

export const LoginContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    
    return(
        <LoginContext.Provider value={{}}> 
            {children}
        </LoginContext.Provider>
    )
}