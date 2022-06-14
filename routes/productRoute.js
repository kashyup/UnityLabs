const express = require('express');

const router = express.Router();



const {

    getAllProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
} = require("../controllers/product")

router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;