"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProduct = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const database_1 = __importDefault(require("../config/database"));
const createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, id_categoria, id_vendedor, precio_unitario, id_estado_producto } = req.body;
        const imagen = req.file?.filename ? `/images/${req.file.filename}` : null;
        const [result] = await database_1.default.query('CALL InsertarProducto(?, ?, ?, ?, ?, ?, ?)', [nombre, descripcion, imagen, id_categoria, id_vendedor, precio_unitario, id_estado_producto]);
        res.json({ message: 'Producto creado correctamente', result });
    }
    catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, descripcion, id_categoria, id_vendedor, precio_unitario, id_estado_producto } = req.body;
        const imagen = req.file?.filename ? `/images/${req.file.filename}` : req.body.imagen;
        const [result] = await database_1.default.query('CALL ActualizarProducto(?, ?, ?, ?, ?, ?, ?, ?)', [id, nombre, descripcion, imagen, id_categoria, id_vendedor, precio_unitario, id_estado_producto]);
        res.json({ message: 'Producto actualizado correctamente', result });
    }
    catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const [result] = await database_1.default.query('CALL EliminarProducto(?)', [id]);
        res.json({ message: 'Producto eliminado correctamente', result });
    }
    catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};
exports.deleteProduct = deleteProduct;
const getAllProduct = async (req, res) => {
    try {
        const [result] = await database_1.default.query('SELECT * FROM Producto');
        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};
exports.getAllProduct = getAllProduct;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await database_1.default.query('SELECT * FROM Producto WHERE id_producto = ?', [id]);
        if (Array.isArray(result) && result.length > 0) {
            res.json(result[0]);
        }
        else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    }
    catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};
exports.getProductById = getProductById;
