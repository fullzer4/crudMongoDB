import { createContext, useState } from "react";

export const ErrorsContext = createContext<any>(()=>{})

export const ErrorsProvider = ({ children }: any) => {

    const [inputEmail, setInputEmail] = useState("inp")

    return(
        <ErrorsContext.Provider value={{
            inputEmail,
            setInputEmail
            }}> 
            {children}
        </ErrorsContext.Provider>
    )
}