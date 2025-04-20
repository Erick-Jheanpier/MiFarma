"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovimientoStockById = exports.getAllMovimientosStock = exports.deleteMovimientoStock = exports.updateMovimientoStock = exports.createMovimientoStock = void 0;
const database_1 = __importDefault(require("../config/database"));
const createMovimientoStock = async (req, res) => {
    try {
        const { id_producto, tipo_mov, cantidad, observacion } = req.body;
        const [result] = await database_1.default.query('CALL RegistrarMovimientoStock(?, ?, ?, ?)', [id_producto, tipo_mov, cantidad, observacion]);
        res.json({ message: 'Movimiento de stock creado correctamente', result });
    }
    catch (error) {
        console.error('Error al registrar movimiento de stock:', error);
        res.status(500).json({ error: 'Error al registrar el movimiento de stock' });
    }
};
exports.createMovimientoStock = createMovimientoStock;
const updateMovimientoStock = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { id_producto, tipo_mov, cantidad, observacion } = req.body;
        const [result] = await database_1.default.query('CALL ActualizarMovimientoStock(?, ?, ?, ?, ?)', [id, id_producto, tipo_mov, cantidad, observacion]);
        res.json({ message: 'Movimiento de stock actualizado correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar movimiento de stock:', error);
        res.status(500).json({ error: 'Error al actualizar el movimiento de stock' });
    }
};
exports.updateMovimientoStock = updateMovimientoStock;
const deleteMovimientoStock = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [result] = await database_1.default.query('CALL EliminarMovimientoStock(?)', [id]);
        res.json({ message: 'Movimiento de stock eliminado correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar movimiento de stock:', error);
        res.status(500).json({ error: 'Error al eliminar el movimiento de stock' });
    }
};
exports.deleteMovimientoStock = deleteMovimientoStock;
const getAllMovimientosStock = async (_req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM MovimientoStock');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener movimientos de stock:', error);
        res.status(500).json({ error: 'Error al obtener los movimientos de stock' });
    }
};
exports.getAllMovimientosStock = getAllMovimientosStock;
const getMovimientoStockById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM MovimientoStock WHERE id_movimiento = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Movimiento de stock no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener movimiento de stock:', error);
        res.status(500).json({ error: 'Error al obtener el movimiento de stock' });
    }
};
exports.getMovimientoStockById = getMovimientoStockById;
