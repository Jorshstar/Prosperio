import express from 'express';
import productController from '../controllers/productControllers.js';


const router = express.Router();


router
    .route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)

router
    .route('/:name')
    .get(productController.getProductByName)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

export default router;

