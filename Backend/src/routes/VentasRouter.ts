import { Router } from "express";
import { createVenta, deleteVenta, getAllVentas, updateVenta, getVentaById } from "../empresarial/controllers/VentasController";
const router = Router();

router.get('/getAllVentas', getAllVentas);
router.get('/getVentaById/:id', getVentaById);
router.post('/createVenta', createVenta);
router.put('/updateVenta/:id', updateVenta);
router.delete('/deleteVenta/:id', deleteVenta);
export default router;