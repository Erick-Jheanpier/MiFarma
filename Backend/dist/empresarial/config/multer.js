"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
// Configuración del almacenamiento
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Carpeta donde se guardan las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});
exports.upload = (0, multer_1.default)({ storage });
