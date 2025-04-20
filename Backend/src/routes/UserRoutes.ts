import { Router } from "express";
import { createUser, deleteUser, getAllUser, updateUser, getUserById } from "../empresarial/controllers/UserController";

const router = Router();
router.get("/getAllUser", getAllUser);
router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;