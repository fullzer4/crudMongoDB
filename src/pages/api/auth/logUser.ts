import connect from "../../../utils/mongo";
import User from "../../../models/userSchema";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function login(req:any, res:any){
    
    const { email, password } = req.body

    const JWT = String(process.env.JWT_SECRET)

    await connect()

    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, JWT, { expiresIn: '1h' });
        res.json({ token, user });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
}