const User = require("../models/UserModel")

const getUsers = async (req, res, next) => {   
    try {

        const users = await User.find({}).select("")
        return res.json(users)
        
    } catch (err) {
        next(err)
    }
}


const registerUser = async (req, res, next) => {
    try {
        const {name, lastName, email, password} = req.body
        if(!(name && lastName && email && password)) {
            return res.status(400).send("All inputs are required")
        }

        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(400).json({error:"User Exits"})
        }else {
            const user = await User.create({
                name, lastName, email: email.toLowerCase(),
                password: password
            })
            res.status(201).send(user)
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {getUsers, registerUser}