import Styles from "@/scss/Navbar.module.scss"
import Link from "next/link";

const navbar = ():JSX.Element => {

    const deslogar = () => {
        alert("funcionando")
    }

    return(
        <div className={Styles.navbar}>
            <Link href="/" className={Styles.Dashboard}>Dashboard</Link>
            <button className={Styles.Sair} onClick={() => deslogar()}> Sair </button>
        </div>
    )
}

export default navbar;