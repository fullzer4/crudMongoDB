import Styles from "@/scss/Login.module.scss";
import { useRef } from "react";
import User from "@/models/userClass";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Singup(){

    let emailRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
  
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;
  
    let user = new User(email!, password!)

    await user.create()

    router.push("/");
  };
  
  return (
    <div className={Styles.loginOut}>
      <form className={Styles.form}>
        <h1 className={Styles.title}>Singup</h1>
        <h3 className={Styles.subtitle}>E-mail</h3>
        <input id="email" className={Styles.inp} type="email" placeholder="exemplo@gmail.com" ref={emailRef} />
        <h3 className={Styles.subtitle}>Senha</h3>
        <input id="password" className={Styles.inp} type="password" placeholder="123456" ref={passwordRef} />
        <button className={Styles.btForm} onClick={(e) => handleLogin(e)}>Entrar</button>
      </form>
      <Link href="/signup" className={Styles.btForm}>Logar</Link>
    </div>
  );
}