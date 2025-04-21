import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/client', // Ajusta si usas otro puerto o prefijo
});

// Obtener todos los clientes
export const getAllClientes = async () => {
  const response = await api.get('/getAllClientes');
  return response.data;
};

// Obtener cliente por ID
export const getClienteById = async (id: number) => {
  const response = await api.get(`/getClienteById/${id}`);
  return response.data;
};

// Crear cliente
export const createCliente = async (id_usuario: number, id_estado_cliente: number) => {
  const response = await api.post('/createCliente', {
    id_usuario,
    id_estado_cliente,
  });
  return response.data;
};

// Actualizar cliente
export const updateCliente = async (
  id: number,
  id_usuario: number,
  id_estado_cliente: number
) => {
  const response = await api.put(`/updateCliente/${id}`, {
    id_usuario,
    id_estado_cliente,
  });
  return response.data;
};

// Eliminar cliente
export const deleteCliente = async (id: number) => {
  const response = await api.delete(`/deleteCliente/${id}`);
  return response.data;
};
