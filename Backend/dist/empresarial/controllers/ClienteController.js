"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClienteById = exports.getAllClientes = exports.deleteCliente = exports.updateCliente = exports.createCliente = void 0;
const database_1 = __importDefault(require("../config/database"));
const createCliente = async (req, res) => {
    try {
        const { id_usuario, id_estado_cliente } = req.body;
        const [result] = await database_1.default.query('CALL insertar_cliente(?, ?)', [id_usuario, id_estado_cliente]);
        res.json({ message: 'Cliente creado correctamente', result });
    }
    catch (error) {
        console.error('Error al crear cliente:', error);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};
exports.createCliente = createCliente;
const updateCliente = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { id_usuario, id_estado_cliente } = req.body;
        const [result] = await database_1.default.query('CALL actualizar_cliente(?, ?, ?)', [id, id_usuario, id_estado_cliente]);
        res.json({ message: 'Cliente actualizado correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};
exports.updateCliente = updateCliente;
const deleteCliente = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [result] = await database_1.default.query('CALL eliminar_cliente(?)', [id]);
        res.json({ message: 'Cliente eliminado correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};
exports.deleteCliente = deleteCliente;
const getAllClientes = async (_req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM Cliente');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};
exports.getAllClientes = getAllClientes;
const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM Cliente WHERE id_cliente = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener cliente:', error);
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};
exports.getClienteById = getClienteById;
