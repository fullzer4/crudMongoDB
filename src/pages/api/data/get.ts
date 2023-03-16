import connect from "../../../utils/mongo";
import TableData from "../../../models/dataModel";

export default async function getUserTableData(req:any, res:any) {
  const { id } = req.body;

  await connect();

  const userId = id

  const tableData = await TableData.findOne({ userId });

  if (!tableData) {
    return res.status(404).json({ message: "Table data not found" });
  }

  res.status(200).json(tableData);
}