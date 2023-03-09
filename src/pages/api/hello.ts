import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const userDb = process.env.dbUser
const senhaDb = process.env.dbSenha

const uri = `mongodb+srv://${userDb}:${senhaDb}@lojinha.smpfkqn.mongodb.net/?retryWrites=true&w=majority`

export async function DbInicializer() {
    mongoose.connect(uri).then(() => {
        console.log("Conectou");
    }).catch((err) => {return err})
}
