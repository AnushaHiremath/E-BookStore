const Order=require('../models/order')
const ordersController={}

//to create order
//localhost:3080/orders/create
ordersController.create=(req,res)=>{
    const body=req.body
    const order=new Order(body)
    order.save()
        .then((order)=>{
            res.json(order)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//list orders
//localhost:3080/orders/list
ordersController.list=(req,res)=>{
    Order.find()
        .then((order)=>{
            res.json(order)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports=ordersController