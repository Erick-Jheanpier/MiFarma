"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVentaLineas = exports.getVentaLineasByVentaId = exports.deleteVentaLinea = exports.updateVentaLinea = exports.createVentaLinea = void 0;
const database_1 = __importDefault(require("../config/database"));
const createVentaLinea = async (req, res) => {
    try {
        const { id_venta, id_producto, cantidad } = req.body;
        // Llama ahora al procedimiento que sólo espera 3 parámetros
        const [result] = await database_1.default.query('CALL InsertarVentaLinea(?, ?, ?)', [id_venta, id_producto, cantidad]);
        res.json({ message: 'Línea de venta registrada correctamente', result });
    }
    catch (error) {
        console.error('Error al registrar línea de venta:', error);
        res.status(500).json({ error: 'Error al registrar la línea de venta' });
    }
};
exports.createVentaLinea = createVentaLinea;
const updateVentaLinea = async (req, res) => {
    try {
        const id_venta = parseInt(req.params.id, 10);
        const { id_producto, nueva_cantidad } = req.body;
        // El procedimiento ActualizarVentaLinea ya no recibe precio_unitario
        const [result] = await database_1.default.query('CALL ActualizarVentaLinea(?, ?, ?)', [id_venta, id_producto, nueva_cantidad]);
        res.json({ message: 'Línea de venta actualizada correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar línea de venta:', error);
        res.status(500).json({ error: 'Error al actualizar la línea de venta' });
    }
};
exports.updateVentaLinea = updateVentaLinea;
const deleteVentaLinea = async (req, res) => {
    try {
        const id_venta = parseInt(req.params.id, 10);
        // Este procedimiento elimina todas las líneas y luego la venta completa
        const [result] = await database_1.default.query('CALL EliminarVentaLinea(?)', [id_venta]);
        res.json({ message: 'Venta y sus líneas eliminadas correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar línea (y venta):', error);
        res.status(500).json({ error: 'Error al eliminar la venta y sus líneas' });
    }
};
exports.deleteVentaLinea = deleteVentaLinea;
const getVentaLineasByVentaId = async (req, res) => {
    try {
        const id_venta = parseInt(req.params.id, 10);
        const [result] = await database_1.default.query('SELECT * FROM VentaLinea WHERE id_venta = ?', [id_venta]);
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener las líneas de venta:', error);
        res.status(500).json({ error: 'Error al obtener las líneas de venta' });
    }
};
exports.getVentaLineasByVentaId = getVentaLineasByVentaId;
const getAllVentaLineas = async (_req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM VentaLinea');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener todas las líneas de venta:', error);
        res.status(500).json({ error: 'Error al obtener todas las líneas de venta' });
    }
};
exports.getAllVentaLineas = getAllVentaLineas;
