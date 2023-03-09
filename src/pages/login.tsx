
import Styles from "@/scss/Login.module.scss";
import Navbar from "@/components/navbar";


export default function Login(){
    return(
        <>  
            <Navbar/>
            <div className={Styles.loginOut}>
                <form className={Styles.form} action="javascript:void(0)">
                    <h1 className={Styles.title}>Login</h1>
                    <h3 className={Styles.subtitle}>E-mail</h3>
                    <input className={Styles.inp} type="text" />
                    <h3 className={Styles.subtitle}>Senha</h3>
                    <input className={Styles.inp} type="text" />
                    <button className={Styles.btForm}>Entrar</button>
                </form>
            </div>
        </>
    )
}