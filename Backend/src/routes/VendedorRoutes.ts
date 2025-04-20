import { Router } from "express";
import { createVendedor, deleteVendedor, getAllVendedores, updateVendedor, getVendedorById } from "../empresarial/controllers/VendedorController";

const router = Router();
router.get("/getAllVendedores", getAllVendedores);
router.get("/getVendedorById/:id", getVendedorById);
router.post("/createVendedor", createVendedor);
router.put("/updateVendedor/:id", updateVendedor);
router.delete("/deleteVendedor/:id", deleteVendedor);

export default router; 