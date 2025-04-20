import { Router } from "express";
import { createCliente, deleteCliente, getAllClientes, updateCliente, getClienteById } from "../empresarial/controllers/ClienteController";
const router = Router();
router.get('/getAllClientes', getAllClientes);
router.get('/getClienteById/:id', getClienteById);
router.post('/createCliente', createCliente);
router.put('/updateCliente/:id', updateCliente);
router.delete('/deleteCliente/:id', deleteCliente);

export default router;