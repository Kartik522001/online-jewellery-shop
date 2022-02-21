const express = require('express');
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


const app = express();
const port = 3000; // Port 

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/Login", sessionController.login);
app.get("/Signup", sessionController.signup);
app.post("/saveuser", sessionController.saveuser);

// roles
app.post("/roles", rolesController.addRole);
app.get("/roles", rolesController.getAllRoles);
app.delete("/roles/:roleId", rolesController.deleteRole);
app.put("/roles", rolesController.updateRole);

app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.post("/login", userController.login)

//category
app.post("/categories", categoryController.addCategories)
app.get("/categories", categoryController.getAllCategories)
app.delete("/categories/:categoryId", categoryController.deleteCategory)
app.put("/categories", categoryController.updateCategory)

//subcategory
app.post("/subcategories", subcategoryController.addSubcategory)
app.get("/subcategories", subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId", subcategoryController.deleteSubcategory)
app.put("/subcategories", subcategoryController.updateSubcategory)

//brand
app.post("/brands", brandController.addBrands)
app.get("/brands", brandController.getAllBrand)
app.delete("/brands/:brandId", brandController.deleteBrand)
app.put("/brands", brandController.updateBrand)

//state
app.post("/states", stateController.addState)
app.get("/states", stateController.getAllStates)
app.delete("/states/:stateId", stateController.deleteStates)
// app.put("/states", stateController.updateState)


//city
app.post("/cities", cityController.addCity)
app.get("/cities", cityController.getAllcities)
app.delete("/cities/:cityId", cityController.deleteCity)
app.put("/cities", cityController.updateCity)


//vendorDetail
app.post("/vendordetails", vendorDetailController.addvendorDetail)
app.get("/vendordetails", vendorDetailController.getAllvendorDetails)
app.delete("/vendordetails/:vendorId", vendorDetailController.deletevendorDetail)
app.put("/vendordetails", vendorDetailController.updatevendorDetails)

app.listen(port, () => {
    console.log(`server started in http://localhost:${port}`);
})