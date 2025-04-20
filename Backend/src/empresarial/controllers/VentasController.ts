import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';

export const createVenta = async (req: Request, res: Response) => {
  try {
    const { id_tipo_comprobante, id_cliente, id_vendedor } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL InsertarVenta(?, ?, ?)',
      [id_tipo_comprobante, id_cliente, id_vendedor]
    );

    res.json({ message: 'Venta registrada correctamente', result });
  } catch (error) {
    console.error('Error al registrar venta:', error);
    res.status(500).json({ error: 'Error al registrar la venta' });
  }
};



  export const updateVenta = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { id_tipo_comprobante, id_cliente, id_vendedor} = req.body;
  
      const [result] = await pool.query<OkPacket[]>(
        'CALL ActualizarVenta(?, ?, ?, ?)',
        [id, id_tipo_comprobante, id_cliente, id_vendedor]
      );
  
      res.json({ message: 'Venta actualizada correctamente', result });
    } catch (error) {
      console.error('Error al actualizar venta:', error);
      res.status(500).json({ error: 'Error al actualizar la venta' });
    }
  };

  export const deleteVenta = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
  
      const [result] = await pool.query<OkPacket[]>(
        'CALL EliminarVenta(?)',
        [id]
      );
  
      res.json({ message: 'Venta eliminada correctamente', result });
    } catch (error) {
      console.error('Error al eliminar venta:', error);
      res.status(500).json({ error: 'Error al eliminar la venta' });
    }
  };

  export const getAllVentas = async (_req: Request, res: Response) => {
    try {
      const [result] = await pool.query('SELECT * FROM Venta');
      res.json(result);
    } catch (error) {
      console.error('Error al obtener ventas:', error);
      res.status(500).json({ error: 'Error al obtener las ventas' });
    }
  };

  export const getVentaById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const [result]: any = await pool.query(
        'SELECT * FROM Venta WHERE id_venta = ?',
        [id]
      );
  
      if (Array.isArray(result) && result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Venta no encontrada' });
      }
    } catch (error) {
      console.error('Error al obtener venta:', error);
      res.status(500).json({ error: 'Error al obtener la venta' });
    }
  };
  