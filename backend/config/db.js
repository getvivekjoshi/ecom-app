require("dotenv").config()

const mongoose = require('mongoose')

const connectDB = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongiDB Connection Success")
    } catch (error) {
        console.log("MongiDB Connection Error")
        process.exit(1)
    }
}

module.exports = connectDB