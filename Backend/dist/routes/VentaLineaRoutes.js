"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LineaVentaController_1 = require("../empresarial/controllers/LineaVentaController");
const router = (0, express_1.default)();
router.get('/getAllVentaLineas', LineaVentaController_1.getAllVentaLineas);
router.get('/getVentaLineasByVentaId/:id', LineaVentaController_1.getVentaLineasByVentaId);
router.post('/createVentaLinea', LineaVentaController_1.createVentaLinea);
router.put('/updateVentaLinea/:id', LineaVentaController_1.updateVentaLinea);
router.delete('/deleteVentaLinea/:id', LineaVentaController_1.deleteVentaLinea);
exports.default = router;
