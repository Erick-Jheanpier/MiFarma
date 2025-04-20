import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';
import { ClienteModel } from '../models/ClienteModel'; // Asegúrate de tener este modelo

export const createCliente = async (req: Request, res: Response) => {
  try {
    const { id_usuario, id_estado_cliente } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL insertar_cliente(?, ?)',
      [id_usuario, id_estado_cliente]
    );

    res.json({ message: 'Cliente creado correctamente', result });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { id_usuario, id_estado_cliente } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL actualizar_cliente(?, ?, ?)',
      [id, id_usuario, id_estado_cliente]
    );

    res.json({ message: 'Cliente actualizado correctamente', result });
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const [result] = await pool.query<OkPacket[]>(
      'CALL eliminar_cliente(?)',
      [id]
    );

    res.json({ message: 'Cliente eliminado correctamente', result });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};

export const getAllClientes = async (_req: Request, res: Response) => {
  try {
    const [result] = await pool.query<ClienteModel[]>(
      'SELECT * FROM Cliente'
    );

    res.json(result);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

export const getClienteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result]: any = await pool.query(
      'SELECT * FROM Cliente WHERE id_cliente = ?',
      [id]
    );

    if (Array.isArray(result) && result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener cliente:', error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};
