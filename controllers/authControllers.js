const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')

exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const existingUser =await User.findOne({email})//find collection email
    if(existingUser)
    {
        return res.status(400).send({message:"email already existing"})//status 400 client side error manual ah show pantrathu
    }
    const hashedPassword=await bcrypt.hash(password,10) //1024 times run agum ex ABC *3 => change DEF
    
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({msg:"user create successfully"}) //data create status code is 201
    //message ah send pananuma json orelse test ah send pannanuna send use pannikalam
    }
 exports.login=async(req,res)=>{
     try{
         const{email,password}=req.body
         const existingUser=await User.findOne({email})
         if(!existingUser)
        {
            res.status(400).send("email not register")
         }
         const isMatching=await bcrypt.compare(password,existingUser.password)
        if(!isMatching)
         {
            res.status(400).send("Invaild credencials")
         }
         const token =jwt.sign(
            {id:existingUser._id },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
         )
         res.json({token})
        res.status(200).send("Login successfull")

     }
     catch(err){
         return res.status(500).send(err.message)
   }
 }
