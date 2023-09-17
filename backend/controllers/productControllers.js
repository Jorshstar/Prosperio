import Product from '../models/productModels.js';

const createProduct = async (req, res) => {
    try {
        const newTour = await Product.create(req.body);
        
        res.status(201).json({
            data: newTour
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

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

const getProductByName = async (req, res) => {
    try {
        const { name }  = req.query;
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

const updateProduct = async (req, res, next) => {
    try {
        const { name } = req.query;
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