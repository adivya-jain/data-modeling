import mongoose from "mongoose"

const ItemSchema=mongoose.Schema({
    item:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"Product"
},
count:{
    type:Number,
    required:true,
    default: 0

}})
const orderSchema = mongoose.Schema({
    delivered:{
        type:String,
        enum:["PEDING","DELIVERED","CANCELLED"],
        required:true
    },
    totalItems:{
        type:Number,
        required:"true"
    },
    items:[ItemSchema],
    totalSales:{
        type:Number,
        required:true
    }

},{timestamps:true})