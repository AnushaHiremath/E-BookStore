const jwt=require('jsonwebtoken')

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN0ZXZlIiwiaWF0IjoxNTkzODU4NzgyLCJleHAiOjE1OTM4OTQ3ODJ9.3tDmJLya2ZK_SNTL2RODixU1dJOTTdhXw2hWfpYVmCw'

// const data=jwt.verify(token,'dct123') //(token, 'secretkey')
// console.log(data) //{ id: 1, name: 'steve', iat: 1593858782, exp: 1593894782 }

let data
try{
    data=jwt.verify(token,'dct123')
    console.log(data)
}
catch(e){
    console.log(e.message)
}
