import { Router } from "express";
import { createPerson, deletePerson, getAllPerson, getPersonById, updatePerson } from "../empresarial/controllers/PersonaController";

const router = Router();
router.get("/getAllPerson", getAllPerson);
router.post("/getPersonById/:id", getPersonById);
router.post("/createPerson", createPerson);
router.put("/updatePerson/:id", updatePerson);
router.delete("/deletePerson/:id", deletePerson);

export default router;