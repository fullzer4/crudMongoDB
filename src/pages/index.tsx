import Styles from "../scss/Login.module.scss";
import { useContext, useRef } from "react";
import UserC from "../models/userClass";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorsContext } from "../context/errors";


export default function Login(){

  const { inputEmail, setInputEmail } = useContext(ErrorsContext)

  let emailRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
  
    let email:any = emailRef.current?.value;
    let password = passwordRef.current?.value;
    
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email)
    const validacao = () => {
      result ? console.log("correto") : setInputEmail("inp errors")}
    validacao()
    
    let user = new UserC(email!, password!)

    await user.login();
    
    const token = user.token
    const id = user.id

    if(token.length > 1){
      await localStorage.setItem('token', token);
      await localStorage.setItem('id', id);
      router.push('/dashboard');
    }else{
      alert("Verifique os campos")
    }
  };
  
  return (
    <div className={Styles.loginOut}>
      <form className={Styles.form}>
        <h1 className={Styles.title}>Login</h1>
        <h3 className={Styles.subtitle}>E-mail</h3>
        <input id="email" className={inputEmail} type="email" placeholder="exemplo@gmail.com" ref={emailRef} />
        <h3 className={Styles.subtitle}>Senha</h3>
        <input id="password" className={Styles.inp} type="password" placeholder="123456" ref={passwordRef} />
        <button className={Styles.btForm} onClick={(e) => handleLogin(e)}>Entrar</button>
      </form>
      <Link href="/signup" className={Styles.btForm}>Cadastrar</Link>
    </div>
  );
}