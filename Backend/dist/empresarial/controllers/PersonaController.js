"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.createPerson = exports.getPersonById = exports.getAllPerson = void 0;
const database_1 = __importDefault(require("../config/database"));
const getAllPerson = async (req, res) => {
    try {
        const [rows] = await database_1.default.query('SELECT * FROM Persona');
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las personas' });
    }
};
exports.getAllPerson = getAllPerson;
const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM Persona WHERE id_persona = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Persona no encontrada' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la persona' });
    }
};
exports.getPersonById = getPersonById;
const createPerson = async (req, res) => {
    try {
        const { nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion } = req.body;
        const [result] = await database_1.default.query('CALL insertar_persona(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
        ]);
        res.status(201).json({
            message: 'Persona insertada correctamente',
            result
        });
    }
    catch (error) {
        console.error('Error al insertar persona:', error);
        res.status(500).json({
            error: 'Ocurrió un error al insertar la persona'
        });
    }
};
exports.createPerson = createPerson;
const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion } = req.body;
        const [result] = await database_1.default.query('CALL actualizar_persona(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            Number(id), nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
        ]);
        res.json({
            message: 'Persona actualizada correctamente',
            result
        });
    }
    catch (error) {
        console.error('Error al actualizar persona:', error);
        res.status(500).json({
            error: 'Ocurrió un error al actualizar la persona'
        });
    }
};
exports.updatePerson = updatePerson;
const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('CALL eliminar_persona(?)', [id]);
        res.json({
            message: 'Persona eliminada correctamente',
            result
        });
    }
    catch (error) {
        console.error('Error al eliminar persona:', error);
        res.status(500).json({
            error: 'Ocurrió un error al eliminar la persona'
        });
    }
};
exports.deletePerson = deletePerson;
