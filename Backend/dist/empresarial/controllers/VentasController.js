"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVentaById = exports.getAllVentas = exports.deleteVenta = exports.updateVenta = exports.createVenta = void 0;
const database_1 = __importDefault(require("../config/database"));
const createVenta = async (req, res) => {
    try {
        const { id_tipo_comprobante, id_cliente, id_vendedor } = req.body;
        const [result] = await database_1.default.query('CALL InsertarVenta(?, ?, ?)', [id_tipo_comprobante, id_cliente, id_vendedor]);
        res.json({ message: 'Venta registrada correctamente', result });
    }
    catch (error) {
        console.error('Error al registrar venta:', error);
        res.status(500).json({ error: 'Error al registrar la venta' });
    }
};
exports.createVenta = createVenta;
const updateVenta = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { id_tipo_comprobante, id_cliente, id_vendedor } = req.body;
        const [result] = await database_1.default.query('CALL ActualizarVenta(?, ?, ?, ?)', [id, id_tipo_comprobante, id_cliente, id_vendedor]);
        res.json({ message: 'Venta actualizada correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar venta:', error);
        res.status(500).json({ error: 'Error al actualizar la venta' });
    }
};
exports.updateVenta = updateVenta;
const deleteVenta = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [result] = await database_1.default.query('CALL EliminarVenta(?)', [id]);
        res.json({ message: 'Venta eliminada correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar venta:', error);
        res.status(500).json({ error: 'Error al eliminar la venta' });
    }
};
exports.deleteVenta = deleteVenta;
const getAllVentas = async (_req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM Venta');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener ventas:', error);
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
};
exports.getAllVentas = getAllVentas;
const getVentaById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM Venta WHERE id_venta = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Venta no encontrada' });
        }
    }
    catch (error) {
        console.error('Error al obtener venta:', error);
        res.status(500).json({ error: 'Error al obtener la venta' });
    }
};
exports.getVentaById = getVentaById;
