import { Schema, model, models } from "mongoose";

const dataSchema = new Schema({

    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    code: {
        type: Array,
        required: true,
        unique: true,
    },
    name: {
        type: Array,
        required: true,
    },
    quantidade: {
        type: Array,
        required: true,
    },
    value: {
        type: Array,
        required: true,
    },
    dataCasdatro: {
        type: Array,
        required: true,
    },

})

const Data = models.Data || model('Data', dataSchema)

export default Data 