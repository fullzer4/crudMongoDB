import connect from "../../../utils/mongo";
import TableData from "../../../models/dataModel";

export default async function editTableData(req:any, res:any) {
  const { id, position, newData } = req.body;

  await connect();

  const userId = id

  const tableData = await TableData.findOne({ userId });

  if (!tableData) {
    return res.status(404).json({ message: "Table data not found" });
  }

  const data = tableData.data;
  const objectToUpdate = data[position];

  if (!objectToUpdate) {
    return res.status(404).json({ message: "Object not found" });
  }

  const updatedObject = Object.assign(objectToUpdate, newData);

  await TableData.findOneAndUpdate(
    { userId },
    { data: [...data.slice(0, position), updatedObject, ...data.slice(position + 1)] }
  );

  res.status(200).json({ message: "Object updated successfully" });
}