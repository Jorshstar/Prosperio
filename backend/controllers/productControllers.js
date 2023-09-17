import Product from '../models/productModels.js';

//@desc Register new product
//@route POST /api/products
const createProduct = async (req, res) => {
    try {
        const name = req.body.name;
        const checkName = await Product.findOne({name});
        if (checkName) {
            const err = new Error('Product with that name already exists');
            err.statusCode = 400;
            return res.status(400).json({
                error: err.message
            });
        }

        const newProduct = await Product.create(req.body);
        
        res.status(201).json({
            data: newProduct
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

//@desc Get all products
//@route GET /api/products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort('-createdAt');

        return res.status(200).json({
            count: products.length,
            data: products
        })
    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

//@desc Search product
//@route GET api/products/search?name=productname
const getProductByName = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.findOne({name});

        if (!product) { 
            const err = new Error('No product found with that name in get product');
            err.statusCode = 404;
            return res.status(404).json({
                error: err.message
            });
        }

        return res.status(200).json({
            data: product
        })
    } catch (err) {
        return res.status(404).json({
            error: err.message
        });
    }
}

//@desc Update product
//@route PATCH api/products/search?name=productname
const updateProduct = async (req, res, next) => {
    try {
        const { name } = req.query;
        if (req.body.name === name) {
            const err = new Error('Product name cannot be changed');
            err.statusCode = 400;
            return res.status(400).json({
                error: err.message
            });
        }

        const payload = req.body;
        const product = await Product.findOneAndUpdate({ name} , payload, {
            new: true,
            runValidators: true
        });

        if (!product) { 
            const err = new Error('No product found with that name');
            err.statusCode = 404;
            return res.status(404).json({
                error: err.message
            });
        }

        await product.save();

        return res.status(201).json({
            data: product
        })
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
}

//@desc Delete product
//@route DELETE api/products/search?name=productname
const deleteProduct = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.findOneAndDelete({name});

        if (!product) { 
            const err = new Error('No product found with that name');
            err.statusCode = 404;
            return res.status(404).json({
                error: err.message
            });
        }

        return res.status(204).json({
            data: null
        })
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
}

export default {
    createProduct,
    getProducts,
    getProductByName,
    updateProduct,
    deleteProduct
}