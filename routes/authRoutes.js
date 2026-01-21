const express=require('express')
const router=express.Router()
const {register,login}=require('../controllers/authControllers')//exports la multuple export use pantrathunala {register} athe modules.exports la irukarathu single expports so no {} brackets
//const {register}=require('../controllers/authControllers')
router.post('/register',register)
router.post('/login',login)
module.exports=router