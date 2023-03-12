import Styles from "@/scss/Login.module.scss";
import { useRef } from "react";
import User from "@/models/userClass";

export default function Login(){

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e:any) => {
    e.preventDefault();
  
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
  
    const user = new User(email!, password!)

    await user.create()
  };
  
  return (
    <div className={Styles.loginOut}>
      <form className={Styles.form}>
        <h1 className={Styles.title}>Login</h1>
        <h3 className={Styles.subtitle}>E-mail</h3>
        <input id="email" className={Styles.inp} type="email" placeholder="exemplo@gmail.com" ref={emailRef} />
        <h3 className={Styles.subtitle}>Senha</h3>
        <input id="password" className={Styles.inp} type="password" placeholder="123456" ref={passwordRef} />
        <button className={Styles.btForm} onClick={(e) => handleLogin(e)}>Entrar</button>
      </form>
    </div>
  );
}