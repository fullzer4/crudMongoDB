import connect from "@/utils/mongo"
import User from "@/models/userModel";
import Data from "@/models/dataModel";
import bcrypt from 'bcrypt';

export default async function addUser(req:any, res:any){
    const { email, password } = req.body

    await connect()

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({email, password: hashedPassword})

    const userId = user._id.toString()!
    const code: Array<number> = []
    const nome: Array<string> = []
    const quantidade: Array<number> = []
    const valor: Array<number> = []
    const dataCasdatro: Array<number> = []

    const data = await Data.create({userId, code, nome, quantidade, valor, dataCasdatro})

    res.json({user},{data})
}