import connect from "../../../utils/mongo";
import User from "../../../models/userSchema";
import TableData from "../../../models/dataSchema";
import bcrypt from 'bcrypt';


export default async function addUser(req:any, res:any){

    const { email, password } = req.body

    await connect()

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({email, password: hashedPassword})
    
    const userId = user._id;

    const initialData = [
        {"codigo":1,"nome":"Item 1","quantidade":10,"value":100,"createDate":"2023-03-13T07:06:29.253Z"},
        {"codigo":2,"nome":"Item 2","quantidade":20,"value":200,"createDate":"2023-03-13T07:06:29.253Z"},
        {"codigo":3,"nome":"Item 3","quantidade":30,"value":300,"createDate":"2023-03-13T07:06:29.253Z"},
        {"codigo":4,"nome":"Item 4","quantidade":40,"value":400,"createDate":"2023-03-13T07:06:29.253Z"},
        {"codigo":5,"nome":"Item 5","quantidade":50,"value":500,"createDate":"2023-03-13T07:06:29.253Z"}
    ];

    const data = await TableData.create({
        userId: userId,
        data: initialData
    });

    res.status(201).json({user, data});
}