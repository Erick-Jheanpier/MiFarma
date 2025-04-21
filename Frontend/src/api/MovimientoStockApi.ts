import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/movimientoStock',
});

// Obtener todos los movimientos
export const getAllMovimientoStock = async () => {
  const response = await api.get('/getAllMovimientoStock');
  return response.data;
};

// Crear nuevo movimiento
export const createMovimientoStock = async (
  id_producto: number,
  tipo_mov: string,
  cantidad: number,
  observacion: string
) => {
  const response = await api.post('/createMovimientoStock', {
    id_producto,
    tipo_mov,
    cantidad,
    observacion,
  });
  return response.data;
};

// Actualizar movimiento
export const updateMovimientoStock = async (
  id: number,
  id_producto: number,
  tipo_mov: string,
  cantidad: number,
  observacion: string
) => {
  const response = await api.put(`/updateMovimientoStock/${id}`, {
    id_producto,
    tipo_mov,
    cantidad,
    observacion,
  });
  return response.data;
};

// Eliminar movimiento
export const deleteMovimientoStock = async (id: number) => {
  const response = await api.delete(`/deleteMovimientoStock/${id}`);
  return response.data;
};

// Obtener movimiento por ID
export const getMovimientoStockById = async (id: number) => {
  const response = await api.get(`/getMovimientoStockById/${id}`);
  return response.data;
};
