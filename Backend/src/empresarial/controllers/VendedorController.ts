import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';
import { VendedorModel } from '../models/VendedorModel'; 

export const createVendedor = async (req: Request, res: Response) => {
  try {
    const { id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL insertar_vendedor(?, ?, ?, ?)',
      [id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor]
    );

    res.json({ message: 'Vendedor creado correctamente', result });
  } catch (error) {
    console.error('Error al crear vendedor:', error);
    res.status(500).json({ error: 'Error al crear el vendedor' });
  }
};

export const updateVendedor = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL actualizar_vendedor(?, ?, ?, ?, ?)',
      [id, id_usuario, codigo_vendedor, fecha_ingreso, id_EstadoVendedor]
    );

    res.json({ message: 'Vendedor actualizado correctamente', result });
  } catch (error) {
    console.error('Error al actualizar vendedor:', error);
    res.status(500).json({ error: 'Error al actualizar el vendedor' });
  }
};

export const deleteVendedor = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const [result] = await pool.query<OkPacket[]>(
      'CALL eliminar_vendedor(?)',
      [id]
    );

    res.json({ message: 'Vendedor eliminado correctamente', result });
  } catch (error) {
    console.error('Error al eliminar vendedor:', error);
    res.status(500).json({ error: 'Error al eliminar el vendedor' });
  }
};

export const getAllVendedores = async (_req: Request, res: Response) => {
  try {
    const [result] = await pool.query<VendedorModel[]>(
      'SELECT * FROM Vendedor'
    );

    res.json(result);
  } catch (error) {
    console.error('Error al obtener vendedores:', error);
    res.status(500).json({ error: 'Error al obtener los vendedores' });
  }
};

export const getVendedorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result]: any = await pool.query(
      'SELECT * FROM Vendedor WHERE id_vendedor = ?',
      [id]
    );

    if (Array.isArray(result) && result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Vendedor no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener vendedor:', error);
    res.status(500).json({ error: 'Error al obtener el vendedor' });
  }
};
