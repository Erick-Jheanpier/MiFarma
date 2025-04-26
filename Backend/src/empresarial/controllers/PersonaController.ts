import { Request, Response } from 'express';
import pool from '../config/database';
import { OkPacket } from 'mysql2';
import { PersonaModel } from '../models/PersonaModel';

export const getAllPerson = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<PersonaModel[]>('SELECT * FROM Persona');
    res.json(rows); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las personas' });
  }
};

export const getPersonById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const [result]: any = await pool.query(
        'SELECT * FROM Persona WHERE id_persona = ?',
        [id]
      );
  
      if (Array.isArray(result) && result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la persona' });
    }
  };

export const createPerson = async (req: Request, res: Response) => {
    try {
      const {
        nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
      } = req.body;
  
      const [result]: any = await pool.query(
        'CALL insertar_persona(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
        ]
      );
  
      res.status(201).json({
        message: 'Persona insertada correctamente',
        result
      });
    } catch (error) {
      console.error('Error al insertar persona:', error);
      res.status(500).json({
        error: 'Ocurrió un error al insertar la persona'
      });
    }
  };

  export const updatePerson = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; 
      const {
        nombres, apellidos, fecha_nac, correo, celular, id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
      } = req.body;
  
      const [result]: any = await pool.query(
        'CALL actualizar_persona(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          Number(id), nombres, apellidos, fecha_nac, correo, celular,  id_estado_civil, id_nivel_socio, id_tipo_doc, codigo, id_distrito, direccion
        ]
      );
  
      res.json({
        message: 'Persona actualizada correctamente',
        result
      });
    } catch (error) {
      console.error('Error al actualizar persona:', error);
      res.status(500).json({
        error: 'Ocurrió un error al actualizar la persona'
      });
    }
  };

export const deletePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query('CALL eliminar_persona(?)', [id]);
    res.json({
      message: 'Persona eliminada correctamente',
      result
    });
  } catch (error) {
    console.error('Error al eliminar persona:', error);
    res.status(500).json({
      error: 'Ocurrió un error al eliminar la persona'
    });
  }
};