
import Styles from "../scss/Dash.module.scss";
import Navbar from "../components/navbar";
import Table from "../components/table";
import Popup from "../components/popup";
import { PopupContext } from "../context/popup";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login(){

    const { changePopState } = useContext(PopupContext)

    return(
        <>  
            <Navbar/>
            <Popup/>
            <div className={Styles.Content}>
                <button className={Styles.bt} onClick={() => changePopState()}> add </button>
                <Table/>
            </div>
        </>
    )
}