import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, id_categoria, id_vendedor, precio_unitario, id_estado_producto } = req.body;
    const imagen = req.file?.filename ? `/images/${req.file.filename}` : null;

    const [result] = await pool.query<OkPacket[]>(
      'CALL InsertarProducto(?, ?, ?, ?, ?, ?, ?)',
      [nombre, descripcion, imagen, id_categoria, id_vendedor, precio_unitario, id_estado_producto]
    );

    res.json({ message: 'Producto creado correctamente', result });
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, descripcion, id_categoria, id_vendedor, precio_unitario, id_estado_producto } = req.body;
    const imagen = req.file?.filename ? `/images/${req.file.filename}` : req.body.imagen;

    const [result] = await pool.query<OkPacket[]>(
      'CALL ActualizarProducto(?, ?, ?, ?, ?, ?, ?, ?)',
      [id, nombre, descripcion, imagen, id_categoria, id_vendedor, precio_unitario, id_estado_producto]
    );

    res.json({ message: 'Producto actualizado correctamente', result });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const [result] = await pool.query<OkPacket[]>(
      'CALL EliminarProducto(?)',
      [id]
    );

    res.json({ message: 'Producto eliminado correctamente', result });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query('SELECT * FROM Producto');
    res.json(result);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query('SELECT * FROM Producto WHERE id_producto = ?', [id]);

    if (Array.isArray(result) && result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};
