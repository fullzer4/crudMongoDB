import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [cover, setCover] = useState("Cover off")
    const [edit, setEdit ] = useState("Edit off")

    const changePopState = () => {
        if(cover === "Cover"){
            setCover("Cover off")
        }else{
            setCover("Cover")
        }
    }

    const changeEditState = () => {
        if(edit === "Edit"){
            setEdit("Edit off")
            
        }else{
            setCover("Edit")
        }
    }   

    return(
        <PopupContext.Provider value={{
            changePopState,
            cover,
            setEdit,
            edit,
            changeEditState,
            }}> 
            {children}
        </PopupContext.Provider>
    )
}