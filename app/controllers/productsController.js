const Product = require('../models/product')
const productsController={}

//create a product
//localhost:3080/products/create
productsController.create=(req,res)=>{
    const body=req.body
    const product=new Product(body)
    product.save()
    .then((product)=>{
        res.json((product))
    })
    .catch((err)=>{
        res.json(err)
    })
}

//list products
//localhost:3080/products/list
productsController.list=(req,res)=>{
    Product.find()
        .then((product)=>{
            res.json(product)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//show by id
//localhost:3080/products/:id
productsController.show=(req,res)=>{
    const id=req.params.id
    Product.findById(id)
        .then((product)=>{
            if(product){
                res.json(product)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

//update a product
//localhost:3080/products/:id
productsController.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Product.findOneAndUpdate(id,body,{new:true,runValidators:true})
             .then((product)=>{
                 if(product){
                     res.json(product)
                 }
                 else{
                     res.json(product)
                 }
             })
             .catch((err)=>{
                 res.json(err)
             })
}

//localhost:3080/products/:id
productsController.destroy=(req,res)=>{
    const id=req.params.id
    Product.findOneAndDelete(id)
        .then((product)=>{
            if(product){
                res.json(product)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })

}
module.exports=productsController