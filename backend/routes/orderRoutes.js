const express = require ('express')

const router = express.Router()
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middlware/veriffyAuthToken")

const {getUserOrders, getOrder, createOrder, updateOrderToPaid, updateOrderToDelivered, getOrders, getOrderForAnalysis} = require('../controllers/orderController')

//user rotues
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)
router.get("/user/:id", getOrder)
router.post("/", createOrder)
router.put("/paid/:id", updateOrderToPaid)


//admin rotues
router.use(verifyIsAdmin)
router.put("/delivered/:id", updateOrderToDelivered)
router.get("/admin", getOrders)
router.get("/anyalysis/:date", getOrderForAnalysis)


module.exports = router