import { createContext, useState } from "react";

export const MenuContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    
    

    return(
        <MenuContext.Provider value={{
 
            }}> 
            {children}
        </MenuContext.Provider>
    )
}