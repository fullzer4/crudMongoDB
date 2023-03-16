import axios from "axios";
import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [cover, setCover] = useState("Cover off")
    const [edit, setEdit ] = useState("Edit off")
    const [data, setData] = useState([])

    const changePopState = () => {
        if(cover === "Cover"){
            setCover("Cover off")
            console.log(data);
            
        }else{
            setCover("Cover")
        }
    }

    const changeEditState = () => {
        if(edit === "Edit"){
            setEdit("Edit off")
            console.log(data);
            
        }else{
            setCover("Edit")
        }
    }

    const getData = async (userId:any) => {
        try {
            const response = await axios.post(`${window.location.origin}/api/data/get`, {
              id: userId
            });
            setData(response.data); 
        } catch (err) { 
            console.error(err);
        }
    }
    
    const addData = async (userId:any, item:any) => {
        try {
            const response = await axios.post(`${window.location.origin}/api/data/add`, {
              id: userId,
              item: item
            });
            setData(response.data);
        } catch (err) { 
            console.error(err);
        }
    }
    
    const deleteData = async (userId:any, index:any) => {
        try {
            const response = await axios.post(`${window.location.origin}/api/data/delete`, {
              id: userId,
              index: index
            });
            console.log(response.data);
            setData(response.data);
        } catch (err) { 
            console.error(err);
        }
    }
    
    const editData = async (userId:any, position:any, newData:any) => {
        try {
            const response = await axios.post(`${window.location.origin}/api/data/edit`, {
              id: userId,
              position: position,
              newData: newData
            });
            setData(response.data); // atualiza o estado data com os dados retornados do backend após a edição do item
        } catch (err) { 
            console.error(err);
        }
    }

    return(
        <PopupContext.Provider value={{
            changePopState,
            cover,
            data,
            setEdit,
            edit,
            changeEditState,
            getData,
            addData,
            deleteData,
            editData
            }}> 
            {children}
        </PopupContext.Provider>
    )
}