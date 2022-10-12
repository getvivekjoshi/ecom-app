const express = require ('express')
const router = express.Router()
const {getProducts, getProductById, getBestSellers, adminGetProducts, 
    admindDeleteProduct, admindCreateProduct, admindUpdateProduct, adminUpload, adminDeleteProductImage} = require('../controllers/productController')


const {verifyIsLoggedIn, verifyIsAdmin} = require("../middlware/veriffyAuthToken")

router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestSellers)
router.get("/get-one/:id", getProductById)


//admin-routes

router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get("/admin", adminGetProducts)

router.delete("/admin/:id", admindDeleteProduct)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.put("/admin/:id", admindUpdateProduct)

router.post("/admin/upload", adminUpload)
router.post("/admin", admindCreateProduct)


module.exports = router