import axios from 'axios';

class User {
    protected email: string;
    protected password: string;
  
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public async create(){
        try {
            await axios.post(`${window.location.origin}/api/auth/addUser`, {
              email: this.email,
              password: this.password,
            });
            console.log('Usuário criado com sucesso!');
        } catch (err) { console.error('Erro ao criar usuário:', err)}
    }

    public async login(){
        try {
            await axios.post(`${window.location.origin}/api/auth/logUser`, {
              email: this.email,
              password: this.password,
            });
            console.log('Usuário logado com sucesso!');
        } catch (err) { console.error('Erro ao logar usuário:', err)}
    }

    public logout(){
        
    }
}
  
export default User;