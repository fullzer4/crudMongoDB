import connect from "../../../utils/mongo";
import TableData from "../../../models/dataModel";

export default async function deleteTableData(req:any, res:any) {
  const { id, index } = req.body;

  await connect();

  const userId = id;

  const tableData = await TableData.findOne({ userId });

  if (!tableData) {
    return res.status(404).json({ message: "Table data not found" });
  }

  tableData.data.splice(index, 1);
  const updatedData = await TableData.findOneAndUpdate(
    { userId },
    { $set: { data: tableData.data } },
    { new: true }
  );

  res.status(200).json(updatedData);
}