import connect from "@/utils/mongo"
import User from "@/models/userSchema";
import Data from "@/models/dataModel";
import bcrypt from 'bcrypt';
import cors from 'cors';

const corsMiddleware = cors({
  origin: 'https://crudbrunomernstack.netlify.app',
  optionsSuccessStatus: 200,
});

export default async function addUser(req:any, res:any, next:any){

    await corsMiddleware(req!, res!, next!);

    const { email, password } = req.body

    await connect()

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({email, password: hashedPassword})
    
    let userId = user._id.toString()!
    let code: Array<number> = []
    let nome: Array<string> = []
    let quantidade: Array<number> = []
    let valor: Array<number> = []
    let dataCasdatro: Array<number> = []

    let data = await Data.create({userId, code, nome, quantidade, valor, dataCasdatro})

    res.status(201).json({user})
}