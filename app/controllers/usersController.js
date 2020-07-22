const User=require('../models/user')
const bcryptjs=require('bcryptjs')
const jwt= require('jsonwebtoken')
const usersController={}

//localhost://3080/users/register
usersController.register=(req,res)=>{
    const body=req.body
    const user=new User(body)
    bcryptjs.genSalt()
        .then((salt)=>{
            bcryptjs.hash(user.password,salt)
                .then((encrypted)=>{
                    user.password=encrypted
                    user.save()
                        .then((user)=>{
                            res.json(user)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
        })
    
}


//localhost:3080/users/login
usersController.login=(req,res)=>{
    const body=req.body
    User.findOne({email:body.email})
         .then((user)=>{
             if(!user){
                 res.json({
                     errors:'invalid email or password'
                 })
             }
             bcryptjs.compare(body.password,user.password)
                    .then((match)=>{
                        if(match){
                           // res.json(user)
                           const tokenData={
                               _id:user._id,
                               email:user.email,
                               username:user.username,
                           }
                           const token=jwt.sign(tokenData,'dct123',{expiresIn:'2d'})
                           res.json({
                               token:`Bearer ${token}`
                           })
                        }
                        else{
                            res.json({errors:'invalid email or password'})
                        }
                    })
         })

}

//get user account ////localhost:3080/users/account
usersController.account=(req,res)=>{
    res.json(req.user)
}

//get users list //localhost:3080/users/list
usersController.list=(req,res)=>{
    User.find()
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}


//logout ////localhost:3080/users/logout
usersController.logout=(req,res)=>{
    const {user,tokenData}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:tokenData}}})  
    //The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
    .then((result)=>{
        res.json('logged out successfully')
    })
    .catch((err)=>{
        res.json(err)
    })
}



module.exports=usersController