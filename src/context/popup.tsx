import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [cover, setCover] = useState("Cover off")
    const [edit, setEdit ] = useState("Edit off")
    const [index, setIndex] = useState(0)

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
            setEdit("Edit")
        }
    }   

    return(
        <PopupContext.Provider value={{
            changePopState,
            cover,
            setEdit,
            edit,
            changeEditState,
            index,
            setIndex
            }}> 
            {children}
        </PopupContext.Provider>
    )
}