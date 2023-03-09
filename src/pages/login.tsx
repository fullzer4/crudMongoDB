
import Styles from "@/scss/Login.module.scss";

export default function Login(){

    

    class Login {
        #email;
        #pass;
        constructor (){
            this.#email = "joao@gmail.com"
            this.#pass = "123456";
        }

        #warn(e: string){
            alert(e)
        }


        #logar(email: string, pass: string){
            // setar sessão do usuário
            alert("Logado");
        }

        auth(email: string, pass: string){
            // verificação 
            if(!email){
                this.#warn("Coloque um email")
                return;
            }

            if(!pass){
                this.#warn("Informe uma senha");
                return;
            }

            if(email != this.#email || pass != this.#pass){
                this.#warn("Verifique se as informações estão corretas");
                return;
            }

            if(email == this.#email && pass == this.#pass){
                this.#logar(email, pass);
                return;
            }
        }
    }

    function log(): void {
        let emailEl = document.getElementById("email");
        let passEl = document.getElementById("password");

        let email: string = (emailEl as HTMLInputElement).value;
        let pass: string= (passEl as HTMLInputElement).value;

        let logC = new Login();

        logC.auth(email, pass);
    }

    
    return(
        <>  
            <div className={Styles.loginOut}>
                <form className={Styles.form} action="javascript:void(0)">
                    <h1 className={Styles.title}>Login</h1>
                    <h3 className={Styles.subtitle}>E-mail</h3>
                    <input id="email" className={Styles.inp} type="email" placeholder="exemplo@gmail.com"/>
                    <h3 className={Styles.subtitle}>Senha</h3>
                    <input id="password" className={Styles.inp} type="password" placeholder="123456"/>
                    <button onClick={() => log()} className={Styles.btForm}>Entrar</button>
                </form>
            </div>
        </>
    )
}