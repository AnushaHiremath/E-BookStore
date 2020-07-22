const validator =require('validator')
const isEmail=require('validator/lib/isEmail')

console.log(validator.isEmail('anusha@gmail.com'))
console.log(isEmail('anusha@gmail.com'))