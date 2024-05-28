import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    details:{
        type:String
    },
});

export const Category = mongoose.model("Category",categorySchema);