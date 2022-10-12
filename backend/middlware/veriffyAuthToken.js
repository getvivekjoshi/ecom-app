
const jwt = require("jsonwebtoken")
const verifyIsLoggedIn = (req, res, next) => {
    try {
       const token = req.cookies.access_token
     if(!token){
        return res.status(403).send("A token is required for authentication")
     }
     try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decode
        next()
     } catch (error) {
        return res.status(401).send("Unauthorized. Invalid token")
     }
    } catch (err) {
        next(err)
    }
}

const verifyIsAdmin = (req, res, next) => {
if(req.user && req.user.isAdmin) {
    next()
}else{
   return res.status (401).send("Unauthorized. Admin required")
}
}


module.exports = {verifyIsLoggedIn, verifyIsAdmin}