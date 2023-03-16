import connect from "../../../utils/mongo"

export default async function addData(req:any, res:any){

    const { userID, codigo, nome, quantidade, value, createDate } = req.body

    await connect()
}