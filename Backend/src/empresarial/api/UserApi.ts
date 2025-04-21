import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/user', // Asegúrate que esta ruta coincida con tu servidor backend
});

// Obtener todos los usuarios
export const getAllUser = async () => {
  const response = await api.get('/getAllUser');
  return response.data;
};

// Obtener un usuario por ID
export const getUserById = async (id: number) => {
  const response = await api.get(`/getUserById/${id}`);
  return response.data;
};

// Crear un nuevo usuario
export const createUser = async (data: {
  passwoard: string;
  tipo_usuario: string;
  id_persona: number;
}) => {
  const response = await api.post('/createUser', data);
  return response.data;
};

// Actualizar un usuario existente
export const updateUser = async (
  id: number,
  data: {
    passwoard: string;
    tipo_usuario: string;
    id_persona: number;
  }
) => {
  const response = await api.put(`/updateUser/${id}`, data);
  return response.data;
};

// Eliminar un usuario
export const deleteUser = async (id: number) => {
  const response = await api.delete(`/deleteUser/${id}`);
  return response.data;
};
