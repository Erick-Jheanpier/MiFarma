import Router from "express";
import { createVentaLinea, updateVentaLinea, deleteVentaLinea, getVentaLineasByVentaId, getAllVentaLineas } from "../empresarial/controllers/LineaVentaController";
const router = Router();

router.get('/getAllVentaLineas', getAllVentaLineas);
router.get('/getVentaLineasByVentaId/:id', getVentaLineasByVentaId);
router.post('/createVentaLinea', createVentaLinea);
router.put('/updateVentaLinea/:id', updateVentaLinea);
router.delete('/deleteVentaLinea/:id', deleteVentaLinea);
export default router;