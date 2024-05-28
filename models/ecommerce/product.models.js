import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    category:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        default:0
    }
},{timestamps:true})