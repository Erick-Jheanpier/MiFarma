"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUser = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const database_1 = __importDefault(require("../config/database"));
const createUser = async (req, res) => {
    try {
        const { passwoard, tipo_usuario, id_persona } = req.body;
        const [result] = await database_1.default.query('CALL insertar_usuario(?, ?, ?)', [passwoard, tipo_usuario, id_persona]);
        res.json({ message: 'Usuario creado correctamente', result });
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { passwoard, tipo_usuario, id_persona } = req.body;
        const [result] = await database_1.default.query('CALL actualizar_usuario(?, ?, ?, ?)', [id, passwoard, tipo_usuario, id_persona]);
        res.json({ message: 'Usuario actualizado correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Convertir a número
        const [result] = await database_1.default.query('CALL eliminar_usuario(?)', [id]);
        res.json({ message: 'Usuario eliminado correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
exports.deleteUser = deleteUser;
const getAllUser = async (req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM usuario');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
exports.getAllUser = getAllUser;
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};
exports.getUserById = getUserById;
