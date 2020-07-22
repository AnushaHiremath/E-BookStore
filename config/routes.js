const express=require('express')
const router=express.Router()
const {authenticateUser}=require('../app/middlewares/authentication')
const usersController=require('../app/controllers/usersController')
const productsController=require('../app/controllers/productsController')
const ordersController = require('../app/controllers/ordersController')

//user auth router
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.get('/users/list',usersController.list)
router.delete('/users/logout',authenticateUser,usersController.logout)


//product router
router.post('/products/create',productsController.create)
router.get('/products/list',productsController.list)
router.get('/products/:id',productsController.show)
router.put('/products/:id',productsController.update)
router.delete('/products/:id',productsController.destroy)

//order router
router.post('/orders/create',ordersController.create)
router.get('/orders/list',ordersController.list)

module.exports=router