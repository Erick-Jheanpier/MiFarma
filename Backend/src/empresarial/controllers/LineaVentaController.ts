import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';

export const createVentaLinea = async (req: Request, res: Response) => {
  try {
    const { id_venta, id_producto, cantidad } = req.body;

    // Llama ahora al procedimiento que sólo espera 3 parámetros
    const [result] = await pool.query<OkPacket[]>(
      'CALL InsertarVentaLinea(?, ?, ?)',
      [id_venta, id_producto, cantidad]
    );

    res.json({ message: 'Línea de venta registrada correctamente', result });
  } catch (error) {
    console.error('Error al registrar línea de venta:', error);
    res.status(500).json({ error: 'Error al registrar la línea de venta' });
  }
};

export const updateVentaLinea = async (req: Request, res: Response) => {
  try {
    const id_venta = parseInt(req.params.id, 10);
    const { id_producto, nueva_cantidad } = req.body;

    // El procedimiento ActualizarVentaLinea ya no recibe precio_unitario
    const [result] = await pool.query<OkPacket[]>(
      'CALL ActualizarVentaLinea(?, ?, ?)',
      [id_venta, id_producto, nueva_cantidad]
    );

    res.json({ message: 'Línea de venta actualizada correctamente', result });
  } catch (error) {
    console.error('Error al actualizar línea de venta:', error);
    res.status(500).json({ error: 'Error al actualizar la línea de venta' });
  }
};

export const deleteVentaLinea = async (req: Request, res: Response) => {
  try {
    const id_venta = parseInt(req.params.id, 10);

    // Este procedimiento elimina todas las líneas y luego la venta completa
    const [result] = await pool.query<OkPacket[]>(
      'CALL EliminarVentaLinea(?)',
      [id_venta]
    );

    res.json({ message: 'Venta y sus líneas eliminadas correctamente', result });
  } catch (error) {
    console.error('Error al eliminar línea (y venta):', error);
    res.status(500).json({ error: 'Error al eliminar la venta y sus líneas' });
  }
};

export const getVentaLineasByVentaId = async (req: Request, res: Response) => {
  try {
    const id_venta = parseInt(req.params.id, 10);

    const [result] = await pool.query(
      'SELECT * FROM VentaLinea WHERE id_venta = ?',
      [id_venta]
    );

    res.json(result);
  } catch (error) {
    console.error('Error al obtener las líneas de venta:', error);
    res.status(500).json({ error: 'Error al obtener las líneas de venta' });
  }
};

export const getAllVentaLineas = async (_req: Request, res: Response) => {
  try {
    const [result] = await pool.query('SELECT * FROM VentaLinea');
    res.json(result);
  } catch (error) {
    console.error('Error al obtener todas las líneas de venta:', error);
    res.status(500).json({ error: 'Error al obtener todas las líneas de venta' });
  }
};
