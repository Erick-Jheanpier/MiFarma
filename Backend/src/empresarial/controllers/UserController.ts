import { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import pool from '../config/database';
import { UsuarioModel } from '../models/UsuarioModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { passwoard, tipo_usuario, id_persona } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL insertar_usuario(?, ?, ?)',
      [passwoard, tipo_usuario, id_persona]
    );

    res.json({ message: 'Usuario creado correctamente', result });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id); 
    const { passwoard, tipo_usuario, id_persona } = req.body;

    const [result] = await pool.query<OkPacket[]>(
      'CALL actualizar_usuario(?, ?, ?, ?)',
      [id, passwoard, tipo_usuario, id_persona]
    );

    res.json({ message: 'Usuario actualizado correctamente', result });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id); // Convertir a número

    const [result] = await pool.query<OkPacket[]>(
      'CALL eliminar_usuario(?)',
      [id]
    );

    res.json({ message: 'Usuario eliminado correctamente', result });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query<UsuarioModel[]>(
      'SELECT * FROM usuario'
    );

    res.json(result);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};


export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result]: any = await pool.query(
      'SELECT * FROM usuario WHERE id_usuario = ?',
      [id]
    );

    if (Array.isArray(result) && result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

  
