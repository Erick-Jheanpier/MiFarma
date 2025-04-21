import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/ventaLinea', // Cambia si tu servidor está en otro puerto/dominio
});

// Crear una línea de venta
export const createVentaLinea = async (data: {
  id_venta: number;
  id_producto: number;
  cantidad: number;
}) => {
  const response = await api.post('/createVentaLinea', data);
  return response.data;
};

// Actualizar una línea de venta
export const updateVentaLinea = async (
  id_venta: number,
  data: {
    id_producto: number;
    nueva_cantidad: number;
  }
) => {
  const response = await api.put(`/updateVentaLinea/${id_venta}`, data);
  return response.data;
};

// Eliminar una venta completa (y sus líneas)
export const deleteVentaLinea = async (id_venta: number) => {
  const response = await api.delete(`/deleteVentaLinea/${id_venta}`);
  return response.data;
};

// Obtener todas las líneas de una venta específica
export const getVentaLineasByVentaId = async (id_venta: number) => {
  const response = await api.get(`/getVentaLineasByVentaId/${id_venta}`);
  return response.data;
};

// Obtener todas las líneas de todas las ventas
export const getAllVentaLineas = async () => {
  const response = await api.get('/getAllVentaLineas');
  return response.data;
};
