import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/persona', // Ajusta si tienes otro puerto o ruta base
});

// Obtener todas las personas
export const getAllPerson = async () => {
  const response = await api.get('/getAllPerson');
  return response.data;
};

// Obtener una persona por ID
export const getPersonById = async (id: number) => {
  const response = await api.get(`/getPersonById/${id}`);
  return response.data;
};

// Crear persona
export const createPerson = async (data: {
  nombres: string;
  apellidos: string;
  fecha_nac: string;
  correo: string;
  celular: string;
  id_estado_civil: number;
  id_nivel_socio: number;
  id_tipo_doc: number;
  codigo: string;
  id_distrito: number;
  direccion: string;
}) => {
  const response = await api.post('/createPerson', data);
  return response.data;
};

// Actualizar persona
export const updatePerson = async (id: number, data: {
  nombres: string;
  apellidos: string;
  fecha_nac: string;
  correo: string;
  celular: string;
  id_estado_civil: number;
  id_nivel_socio: number;
  id_tipo_doc: number;
  codigo: string;
  id_distrito: number;
  direccion: string;
}) => {
  const response = await api.put(`/updatePerson/${id}`, data);
  return response.data;
};

// Eliminar persona
export const deletePerson = async (id: number) => {
  const response = await api.delete(`/deletePerson/${id}`);
  return response.data;
};
