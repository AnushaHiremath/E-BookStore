const mongoose=require('mongoose')
const Schema=mongoose.Schema
const orderSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Ordered'
    },
    orderedAt:{
        type:Date,
        default:Date.now()
    }

})

const Order = mongoose.model('Order',orderSchema)
module.exports = Order