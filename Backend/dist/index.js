"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./empresarial/config/database"));
const startServer = async () => {
    try {
        await database_1.default.getConnection();
        console.log("Conexión a la base de datos establecida.");
        const PORT = process.env.PORT || 3000;
        app_1.default.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};
startServer();
