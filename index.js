const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const sessionController = require("./controller/session-controller");
const rolesController = require("./controller/role-controller");
const userController = require("./controller/user-controller");
const categoryController = require("./controller/category-controller");
const brandController = require("./controller/brand-controller");
const subcategoryController = require("./controller/subcategory-controller");
const stateController = require("./controller/state-controller");
const cityController = require("./controller/city-controller");
const vendorDetailController = require("./controller/vendorDetail-controller");
const cardController = require("./controller/card-controller");
const customerAddressController = require("./controller/customer_address-controller");
const orderDetailController = require("./controller/order_details-controller");
const statusController = require("./controller/status-controller");
const ProductController = require("./controller/product-controller");
const OrderController = require("./controller/order-controller");
const vendorProductController = require("./controller/vendor_product-controller");
const paymentController = require("./controller/payment-controller")
const VProductImgController = require("./controller/v_productimg-controller")

const app = express();
const port = 4001; // Port 

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database

mongoose.connect('mongodb://localhost:27017/Jewellery_Shop', function (err) {
    if (err) {
        console.log("DB connection fai");
        console.log(err);
    }
    else {
        console.log("DB Connect");
    }
})

// url
app.get('/', (req, res) => {
    res.send("Hello World");
})

// app.get("/Login", sessionController.login);
// app.get("/Signup", sessionController.signup);
// app.post("/saveuser", sessionController.saveuser);

// roles
app.post("/roles", rolesController.addRole);
app.get("/roles", rolesController.getAllRoles);
app.get("/roles/:roleId", rolesController.getById);
app.delete("/roles/:roleId", rolesController.deleteRole);
app.put("/roles/:roleId", rolesController.updateById);

// users
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.get("/users/:userId", userController.getById);
app.delete("/users/:userId", userController.deleteUser)
app.post("/login", userController.login)
app.put("/users/:userId", userController.updateById);

//category
app.post("/categories", categoryController.addCategories)
app.get("/categories", categoryController.getAllCategories)
app.delete("/categories/:categoryId", categoryController.deleteCategory)
app.get("/categories/:categoryId", categoryController.getById);
app.put("/categories/:categoryId", categoryController.updateById);

//subcategory
app.post("/subcategories", subcategoryController.addSubcategory)
app.get("/subcategories", subcategoryController.getAllSubcategories)
app.get("/subcategories/:subcategoryId", subcategoryController.getById);
app.get("/subcategoriesbycategory/:categoryId", subcategoryController.getByCategoryId)
app.delete("/subcategories/:subcategoryId", subcategoryController.deleteSubcategory)
app.put("/subcategories/:subcategoryId", subcategoryController.updateById)


//brand
app.post("/brands", brandController.addBrands)
app.get("/brands", brandController.getAllBrand)
app.get("/brands", brandController.getById);
app.delete("/brands/:brandId", brandController.deleteBrand)
app.put("/brands/:brandId", brandController.updateById);

//state
app.post("/states", stateController.addState)
app.get("/states", stateController.getAllStates)
app.get("/states/:stateId", stateController.getById);
app.delete("/states/:stateId", stateController.deleteStates)
app.put("/states/:stateId", stateController.updateById);


//city
app.post("/cities", cityController.addCity)
app.get("/cities", cityController.getAllcities)
app.delete("/cities/:cityId", cityController.deleteCity)
app.put("/cities/:cityId", cityController.updateCity)


//vendorDetail
app.post("/vendor", vendorDetailController.addvendorDetail)
app.get("/vendor", vendorDetailController.getAllvendorDetails)
app.get("/vendor/:vendorId", vendorDetailController.getById)
app.delete("/vendor/:vendorId", vendorDetailController.deletevendorDetail)
app.put("/vendor/:vendorId", vendorDetailController.updateById);

// card
app.post("/cards", cardController.addCard);
app.get("/cards", cardController.getAllcarts);
app.put("/cards/:cardId", cardController.updatecart);
app.delete("/cards/:cardId", cardController.deleteCard);

// customerAddress
app.post("/customerAddress", customerAddressController.addcustomerAddress);
app.get("/customerAddress", customerAddressController.getAllcustomerAddress);
app.delete("/customerAddress/:customerAddressId", customerAddressController.deletecustomerAddress);
app.put("/customerAddress/:customerAddressId", customerAddressController.updatecustomerAddress)

// orderDetails
app.post('/orderDetails', orderDetailController.addOrderDetail);
app.get('/orderDetails', orderDetailController.getAllOrder_details);
app.delete('/orderDetails/:orderId', orderDetailController.deleteorderDetail);
app.put('/orderDetails/:orderId', orderDetailController.updateorderDetails);

// status
app.post('/status', statusController.addStatus);
app.get('/status', statusController.getAllStatus);
app.delete('/status/:statusId', statusController.deleteStatus);
app.put('/status/:statusId', statusController.updateStatus);

// product
app.post('/products', ProductController.addProduct);
app.get('/products', ProductController.getAllproducts);
app.delete('/products/:ProductId', ProductController.deleteProduct);
app.get('/products/:productId', ProductController.getById);
app.put('/products/:productId', ProductController.updateById);

// order
app.post('/order', OrderController.addOrder);
app.get('/order', OrderController.getAllOrders);
app.delete('/order/:OrderId', OrderController.deleteOrder);
app.put('/order/:OrderId', OrderController.updateOrder);

// vendorProduct
app.post('/vendorproducts', vendorProductController.addvendorProduct);
app.get('/vendorproducts', vendorProductController.getAllvendorProducts);
app.delete('/vendorproduct/:vendorProductId', vendorProductController.deletevendorProduct);
app.put('/vendorproduct/:vendorProductId', vendorProductController.updatevendorProduct);

// payment
app.post("/payments", paymentController.addpayment)
app.get("/payments", paymentController.getAllpayments)
app.delete("/payments/:paymentId", paymentController.deletepayment)
app.put("/payments/:paymentId", paymentController.updatepayment)

//Product Img
app.post("/productimgs", VProductImgController.addproductimg)
app.get("/productimgs", VProductImgController.getAllProductImg)
app.delete("/productimgs/:productImgId", VProductImgController.deleteProductImg)
app.put("/productimgs/:ProductImgId", VProductImgController.updateproductImg)

app.listen(port, () => {
    console.log(`server started in http://localhost:${port}`);
})