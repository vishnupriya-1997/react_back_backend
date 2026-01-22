/*const jwt=require('jsonwebtoken')
exports.protect=(req ,res,next)=>{//next using finished middleware next function using move to next function 

    const token=req.headers.authorization.split(' ')[1];
    if(!token)//not nearer not vaild
    {
        res.status(401).json({msg:"Not authorized"})   
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()//using only middeleWare //middleware illana catch ku move agum
    }
    catch(err)
    {
        res.send("Invaild token")
    }
}*/
const jwt = require('jsonwebtoken')

exports.protect = (req, res, next) => {

    // 1️⃣ Check header exists
    if (!req.headers.authorization) {
        return res.status(401).json({ msg: "No token provided" })
    }

    const token = req.headers.authorization.split(' ')[1]

    // 2️⃣ Check token exists
    if (!token) {
        return res.status(401).json({ msg: "Not authorized" })
    }

    try {
        // 3️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        next() // ✅ go to controller
    }
    catch (err) {
        return res.status(401).json({ msg: "Invalid token" })
    }
}
