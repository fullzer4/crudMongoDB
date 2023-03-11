import connect from "@/utils/mongo"
import User from "@/models/userModel";
import bcrypt from 'bcrypt';

export default async function addUser(req:any, res:any){
    const { email, password } = req.body

    await connect()

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({email, password: hashedPassword})

    res.json({user})
}