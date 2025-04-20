import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/venta', // Asegúrate de que esta URL coincida con tu servidor
});

// Obtener todas las ventas
export const getAllVentas = async () => {
  const response = await api.get('/getAllVentas');
  return response.data;
};

// Obtener una venta por ID
export const getVentaById = async (id: number) => {
  const response = await api.get(`/getVentaById/${id}`);
  return response.data;
};

// Crear una nueva venta
export const createVenta = async (data: {
  id_tipo_comprobante: number;
  id_cliente: number;
  id_vendedor: number;
}) => {
  const response = await api.post('/createVenta', data);
  return response.data;
};

// Actualizar una venta existente
export const updateVenta = async (
  id: number,
  data: {
    id_tipo_comprobante: number;
    id_cliente: number;
    id_vendedor: number;
  }
) => {
  const response = await api.put(`/updateVenta/${id}`, data);
  return response.data;
};

// Eliminar una venta
export const deleteVenta = async (id: number) => {
  const response = await api.delete(`/deleteVenta/${id}`);
  return response.data;
};
