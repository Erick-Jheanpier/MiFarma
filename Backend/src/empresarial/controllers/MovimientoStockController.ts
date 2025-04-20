import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';

export const createMovimientoStock = async (req: Request, res: Response) => {
  try {
    const { id_producto, tipo_mov, cantidad, observacion } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL RegistrarMovimientoStock(?, ?, ?, ?)',
      [id_producto, tipo_mov, cantidad, observacion]
    );

    res.json({ message: 'Movimiento de stock creado correctamente', result });
  } catch (error) {
    console.error('Error al registrar movimiento de stock:', error);
    res.status(500).json({ error: 'Error al registrar el movimiento de stock' });
  }
};


export const updateMovimientoStock = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { id_producto, tipo_mov, cantidad, observacion } = req.body;
  
      const [result] = await pool.query<OkPacket[]>(
        'CALL ActualizarMovimientoStock(?, ?, ?, ?, ?)',
        [id, id_producto, tipo_mov, cantidad, observacion]
      );
  
      res.json({ message: 'Movimiento de stock actualizado correctamente', result });
    } catch (error) {
      console.error('Error al actualizar movimiento de stock:', error);
      res.status(500).json({ error: 'Error al actualizar el movimiento de stock' });
    }
  };

  
  export const deleteMovimientoStock = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
  
      const [result] = await pool.query<OkPacket[]>(
        'CALL EliminarMovimientoStock(?)',
        [id]
      );
  
      res.json({ message: 'Movimiento de stock eliminado correctamente', result });
    } catch (error) {
      console.error('Error al eliminar movimiento de stock:', error);
      res.status(500).json({ error: 'Error al eliminar el movimiento de stock' });
    }
  };

  
  export const getAllMovimientosStock = async (_req: Request, res: Response) => {
    try {
      const [result] = await pool.query('SELECT * FROM MovimientoStock');
      res.json(result);
    } catch (error) {
      console.error('Error al obtener movimientos de stock:', error);
      res.status(500).json({ error: 'Error al obtener los movimientos de stock' });
    }
  };

  
  export const getMovimientoStockById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const [result]: any = await pool.query(
        'SELECT * FROM MovimientoStock WHERE id_movimiento = ?',
        [id]
      );
  
      if (Array.isArray(result) && result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Movimiento de stock no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener movimiento de stock:', error);
      res.status(500).json({ error: 'Error al obtener el movimiento de stock' });
    }
  };
  