import connect from "../../../utils/mongo";
import TableData from "../../../models/dataSchema";

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

  console.log(objectToUpdate);

  if (!objectToUpdate) {
    return res.status(404).json({ message: "Object not found" });
  }

  const updatedData = [...data];
    updatedData[position] = {
      ...objectToUpdate,
      ...newData
  };

  await TableData.findOneAndUpdate(
    { userId },
    { data: updatedData }
  );

  res.status(200).json({ message: "Object updated successfully", objectToUpdate });
}