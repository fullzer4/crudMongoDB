import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [cover, setCover] = useState("Cover")
    
    const changePopState = () => {
        if(cover === "Cover"){
            setCover("Cover off")
        }else{
            setCover("Cover")
        }
    }

    return(
        <PopupContext.Provider value={{
            changePopState,
            cover
            }}> 
            {children}
        </PopupContext.Provider>
    )
}