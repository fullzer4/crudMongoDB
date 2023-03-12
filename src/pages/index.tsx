import Styles from "@/scss/Login.module.scss";
import { useRef } from "react";
import UserC from "@/models/userClass";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login(){

  let emailRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
  
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;
  
    let user = new UserC(email!, password!)

    await user.login();
    
    const token = user.token

    if(token.length > 1){
      await localStorage.setItem('token', token);
      router.push('/dashboard');
    }
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
      <Link href="/signup" className={Styles.btForm}>Cadastrar</Link>
    </div>
  );
}