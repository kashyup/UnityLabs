const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String, require
    },
    price:{
        type :Number, require
    }
})

const productModel = mongoose.model('product',productSchema);

module.exports = productModel;