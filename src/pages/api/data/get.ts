import connect from "../../../utils/mongo";
import TableData from "../../../models/dataSchema";

export default async function getUserTableData(req:any, res:any) {
  const { id } = req.body;

  await connect();

  const userId = id

  const tableData = await TableData.findOne({ userId });

  if (!tableData) {
    return res.json({ message: "Table data not found" });
  }

  res.status(200).json(tableData.data);
}