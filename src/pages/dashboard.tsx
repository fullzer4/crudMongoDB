
import Styles from "@/scss/Dash.module.scss";
import Navbar from "@/components/navbar";
import Table from "@/components/table";
import Popup from "@/components/popup";

export default function Login(){
    return(
        <>  
            <Navbar/>
            <div className={Styles.Content}>
                <Popup/>
            </div>
        </>
    )
}