const productModel = require("../models/productModel");


// add product
const productController = async (req, res) => {
    const{name, description, price, category, reviews} = req.body;

    const newProduct = new productModel({name, description, price, category, reviews});
    newProduct
    .save()
    .then((data) => {
        res
        .status(201)
        .json({message: "New product added successfully", data});
    })
    .catch((err) => {
        res.status(500).json({message: "error occured", err});
    });
}



module.exports = productController;
