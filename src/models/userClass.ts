import axios from 'axios';

class UserC {
    protected email: string;
    protected password: string;
    public token: string = ""
    public id: string = ""
  
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
            const response = await axios.post(`${window.location.origin}/api/auth/logUser`, {
              email: this.email,
              password: this.password,
            });
            this.id = response.data.user._id
            this.token = response.data.token
            console.log('Usuário logado com sucesso!');
        } catch (err) { console.error('Erro ao logar usuário:', err)}
    }

    public logout(){
        
    }

}
  
export default UserC;