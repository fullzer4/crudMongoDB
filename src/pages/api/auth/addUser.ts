import connect from "@/utils/mongo"
import User from "@/models/userModel";

export default async function addUser(req:any, res:any){
    const { email } = req.body

    console.log("Tentando conectar");

    await connect()

    const user = await User.create(req.body)

    res.json({user})
}