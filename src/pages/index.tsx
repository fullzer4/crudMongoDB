import Styles from "@/scss/Login.module.scss";

export default function Login(){


    
  return(
    <>  
      <div className={Styles.loginOut}>
        <form className={Styles.form}>
          <h1 className={Styles.title}>Login</h1>
          <h3 className={Styles.subtitle}>E-mail</h3>
          <input id="email" className={Styles.inp} type="email" placeholder="exemplo@gmail.com"/>
          <h3 className={Styles.subtitle}>Senha</h3>
          <input id="password" className={Styles.inp} type="password" placeholder="123456"/>
          <button className={Styles.btForm}>Entrar</button>
        </form>
      </div>
    </>
  )
}