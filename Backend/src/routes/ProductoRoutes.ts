import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct, getProductById } from "../empresarial/controllers/ProductoController";
import { upload } from "../empresarial/config/multer";

const router = Router();

router.get('/getAllProduct', getAllProduct);
router.get('/getProductById/:id', getProductById);
router.post('/createProduct', upload.single('imagen'), createProduct);
router.put('/updateProduct/:id', upload.single('imagen'), updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;