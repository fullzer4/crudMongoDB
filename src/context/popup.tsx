import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [cover, setCover] = useState("Cover off")
    const [edit, setEdit ] = useState("Edit off")
    const [data, setData] = useState([{"codigo":1,"nome":"Item 1","quantidade":10,"value":100,"createDate":"2023-03-13T07:06:29.253Z"},{"codigo":2,"nome":"Item 2","quantidade":20,"value":200,"createDate":"2023-03-13T07:06:29.253Z"},{"codigo":3,"nome":"Item 3","quantidade":30,"value":300,"createDate":"2023-03-13T07:06:29.253Z"},{"codigo":4,"nome":"Item 4","quantidade":40,"value":400,"createDate":"2023-03-13T07:06:29.253Z"},{"codigo":5,"nome":"Item 5","quantidade":50,"value":500,"createDate":"2023-03-13T07:06:29.253Z"}])



    const changePopState = () => {
        if(cover === "Cover"){
            setCover("Cover off")
            console.log(data);
            
        }else{
            setCover("Cover")
        }
    }

    const addItem = (newItem:any) => {
        setData([...data, newItem]);
    };

    const removeItem = (codigo:any) => {
        setData(data.filter(item => item.codigo !== codigo));
    };

    const editItem = (codigo:any, newValues:any) => {
        setData(data.map(item => {
            if (item.codigo === codigo) {
                return { ...item, ...newValues };
            } else {
                return item;
            }
        }));
    };

    return(
        <PopupContext.Provider value={{
            changePopState,
            cover,
            data,
            addItem,
            removeItem,
            editItem,
            setEdit,
            edit
            }}> 
            {children}
        </PopupContext.Provider>
    )
}