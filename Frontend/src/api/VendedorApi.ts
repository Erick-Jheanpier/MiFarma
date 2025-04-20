import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/vendedor', // Asegúrate que esta URL sea la correcta según tu servidor
});

// Obtener todos los vendedores
export const getAllVendedores = async () => {
  const response = await api.get('/getAllVendedores');
  return response.data;
};

// Obtener un vendedor por ID
export const getVendedorById = async (id: number) => {
  const response = await api.get(`/getVendedorById/${id}`);
  return response.data;
};

// Crear un nuevo vendedor
export const createVendedor = async (data: {
  id_usuario: number;
  codigo_vendedor: string;
  fecha_ingreso: string;
  id_EstadoVendedor: number;
}) => {
  const response = await api.post('/createVendedor', data);
  return response.data;
};

// Actualizar un vendedor existente
export const updateVendedor = async (
  id: number,
  data: {
    id_usuario: number;
    codigo_vendedor: string;
    fecha_ingreso: string;
    id_EstadoVendedor: number;
  }
) => {
  const response = await api.put(`/updateVendedor/${id}`, data);
  return response.data;
};

// Eliminar un vendedor
export const deleteVendedor = async (id: number) => {
  const response = await api.delete(`/deleteVendedor/${id}`);
  return response.data;
};
