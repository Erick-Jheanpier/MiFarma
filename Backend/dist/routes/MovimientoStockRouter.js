"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MovimientoStockController_1 = require("../empresarial/controllers/MovimientoStockController");
const router = (0, express_1.default)();
router.get('/getAllMovimientoStock', MovimientoStockController_1.getAllMovimientosStock);
router.get('/getMovimientoStockById/:id', MovimientoStockController_1.getMovimientoStockById);
router.post('/createMovimientoStock', MovimientoStockController_1.createMovimientoStock);
router.put('/updateMovimientoStock/:id', MovimientoStockController_1.updateMovimientoStock);
router.delete('/deleteMovimientoStock/:id', MovimientoStockController_1.deleteMovimientoStock);
exports.default = router;
