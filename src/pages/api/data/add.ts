import connect from "../../../utils/mongo";
import TableData from "../../../models/dataModel";

export default async function addTableData(req:any, res:any) {
  const { id, item } = req.body;

  await connect();

  const tableData = await TableData.findOne({ userId: id });

  if (!tableData) {
    return res.status(404).json({ message: "Table data not found" });
  }

  tableData.data.push(item);
  await tableData.save();

  res.status(200).json(tableData);
}