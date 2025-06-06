"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductoController_1 = require("../empresarial/controllers/ProductoController");
const multer_1 = require("../empresarial/config/multer");
const router = (0, express_1.Router)();
router.get('/getAllProduct', ProductoController_1.getAllProduct);
router.get('/getProductById/:id', ProductoController_1.getProductById);
router.post('/createProduct', multer_1.upload.single('imagen'), ProductoController_1.createProduct);
router.put('/updateProduct/:id', multer_1.upload.single('imagen'), ProductoController_1.updateProduct);
router.delete('/deleteProduct/:id', ProductoController_1.deleteProduct);
exports.default = router;
