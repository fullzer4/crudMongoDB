import Styles from "@/scss/Popup.module.scss"
import Link from "next/link";

const navbar = ():JSX.Element => {

    const deslogar = () => {

    }

    return(
        <div className={Styles.cover}>
            <div className={Styles.popup}>
                <Link href="/"/>
                <button onClick={() => deslogar()}> Sair </button>
            </div>
        </div>
    )
}

export default navbar;