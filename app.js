const express = require('express');

const mongoose = require('mongoose');

const app = express();
app.use(express.json());


require('dotenv').config();

const products = require('./routes/productRoute')

const PORT = process.env.PORT;

const URI = process.env.MONGO_URI;

//product routes
app.use ('/api/v1/product', products)

mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is Listening on port: ${PORT}`)

    })

    console.log('mongodb Connected');

})
.catch((errorr)=>{
    console.log('error',error.message);
});



