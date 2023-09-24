import express from 'express';
import {
    createProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct,
} from '../controllers/productControllers.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../config/imageUpload.js';

const router = express.Router();

router.post("/", protect, upload.single("image"), createProduct);
router.put("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProductByID);
router.delete("/:id", protect, deleteProduct);

export default router;
