import { Schema, model } from "mongoose";

const tableDataSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  data: [
    {
      codigo: {
        type: Number,
        required: true,
      },
      nome: {
        type: String,
        required: true,
      },
      quantidade: {
        type: Number,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      createDate: {
        type: Date,
        required: true,
      },
    },
  ],
});

const TableData = model("TableData", tableDataSchema);

export default TableData;