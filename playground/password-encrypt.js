const bcryptjs=require('bcryptjs')
const password='secret123'

bcryptjs.genSalt()
    .then((salt)=>{
            console.log('salt',salt)
            //using salt value we will now generate a hashed string/in our case its encrypted password
            //salt value will always be present within encrypted password
            bcryptjs.hash(password,salt)
                .then((encrypted)=>{
                    console.log('encrypted',encrypted)
                })
    })