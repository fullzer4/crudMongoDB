
import Styles from "../scss/Dash.module.scss";
import Navbar from "../components/navbar";
import Table from "../components/table";
import Popup from "../components/popup";
import { PopupContext } from "../context/popup";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import EditPopup from "../components/editPop";

export default function Login(){

    const { changePopState } = useContext(PopupContext)

    return(
        <>  
            <Navbar/>
            <Popup/>
            <EditPopup/>
            <div className={Styles.Content}>
                <button className={Styles.bt} onClick={() => changePopState()}> add </button>
                <Table/>
            </div>
        </>
    )
}