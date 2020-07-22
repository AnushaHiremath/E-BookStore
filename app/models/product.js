const mongoose=require('mongoose')
const Schema=mongoose.Schema
const productSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true  
    },
    description:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    image:{
        type:String //ObjectId
    },
    totalQuantity:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports=Product