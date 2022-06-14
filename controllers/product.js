const { response } = require("express");
const Product= require("../models/productModel")

const getAllProduct = async(req,res)=>{
    try {
        const result = await Product.find({},{});

        response.send(result);
        
    } catch (error) {

        console.log(error.message);
        
    }
}
const getProduct = async(req,res) =>{

    const id = req.params.id;
    try {

        const result = await Product.findOne({_id:id})

        if(!result){
            res.send('no product with the given id')
        }
        res.send(result);
        
    } catch (error) {

        console.log(error.message);
        
    }

}
const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new :true};
        const result = await Product.findByIdAndUpdate(id,updates,options)
        if(!result){
            res.send('no product with the current id ')
        }
        res.send(result);
    } catch (error) {

        console.log(error.message);
        
    }
}
const deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try {
        
        const result = Product.findByIdAndDelete(id);

        if(!result){
            res.send('no product with the given id')
        }
        res.send(result);
    } catch (error) {

        console.log(error.message);
        
    }
}

const createProduct = async(req,res)=>{
  try {
    const product = new Product(req.body);

    const result = await product.save();

    res.send(result)
  } catch (error) {
    
    console.log(error.message);
  }
    
}
module.exports ={

    getAllProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}