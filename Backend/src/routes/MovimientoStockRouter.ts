import Router from "express";
import { createMovimientoStock, deleteMovimientoStock, getAllMovimientosStock, updateMovimientoStock, getMovimientoStockById } from "../empresarial/controllers/MovimientoStockController";

const router = Router();
router.get('/getAllMovimientoStock', getAllMovimientosStock);
router.get('/getMovimientoStockById/:id', getMovimientoStockById);
router.post('/createMovimientoStock', createMovimientoStock);
router.put('/updateMovimientoStock/:id', updateMovimientoStock);
router.delete('/deleteMovimientoStock/:id', deleteMovimientoStock);
export default router;