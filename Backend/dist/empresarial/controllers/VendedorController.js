"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendedorById = exports.getAllVendedores = exports.deleteVendedor = exports.updateVendedor = exports.createVendedor = void 0;
const database_1 = __importDefault(require("../config/database"));
const createVendedor = async (req, res) => {
    try {
        const { id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor } = req.body;
        const [result] = await database_1.default.query('CALL insertar_vendedor(?, ?, ?, ?)', [id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor]);
        res.json({ message: 'Vendedor creado correctamente', result });
    }
    catch (error) {
        console.error('Error al crear vendedor:', error);
        res.status(500).json({ error: 'Error al crear el vendedor' });
    }
};
exports.createVendedor = createVendedor;
const updateVendedor = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor } = req.body;
        const [result] = await database_1.default.query('CALL actualizar_vendedor(?, ?, ?, ?, ?)', [id, id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor]);
        res.json({ message: 'Vendedor actualizado correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar vendedor:', error);
        res.status(500).json({ error: 'Error al actualizar el vendedor' });
    }
};
exports.updateVendedor = updateVendedor;
const deleteVendedor = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [result] = await database_1.default.query('CALL eliminar_vendedor(?)', [id]);
        res.json({ message: 'Vendedor eliminado correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar vendedor:', error);
        res.status(500).json({ error: 'Error al eliminar el vendedor' });
    }
};
exports.deleteVendedor = deleteVendedor;
const getAllVendedores = async (_req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM Vendedor');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener vendedores:', error);
        res.status(500).json({ error: 'Error al obtener los vendedores' });
    }
};
exports.getAllVendedores = getAllVendedores;
const getVendedorById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM Vendedor WHERE id_vendedor = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Vendedor no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener vendedor:', error);
        res.status(500).json({ error: 'Error al obtener el vendedor' });
    }
};
exports.getVendedorById = getVendedorById;
