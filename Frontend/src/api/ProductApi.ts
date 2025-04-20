import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/product', // Asegúrate de que coincide con tu backend
});

// Obtener todos los productos
export const getAllProduct = async () => {
  const response = await api.get('/getAllProduct');
  return response.data;
};

// Obtener producto por ID
export const getProductById = async (id: number) => {
  const response = await api.get(`/getProductById/${id}`);
  return response.data;
};

// Crear producto (con imagen)
export const createProduct = async (data: {
  nombre: string;
  descripcion: string;
  id_categoria: number;
  id_vendedor: number;
  precio_unitario: number;
  id_estado_producto: number;
  imagen: File | null;
}) => {
  const formData = new FormData();
  formData.append('nombre', data.nombre);
  formData.append('descripcion', data.descripcion);
  formData.append('id_categoria', String(data.id_categoria));
  formData.append('id_vendedor', String(data.id_vendedor));
  formData.append('precio_unitario', String(data.precio_unitario));
  formData.append('id_estado_producto', String(data.id_estado_producto));
  if (data.imagen) {
    formData.append('imagen', data.imagen);
  }

  const response = await api.post('/createProduct', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// Actualizar producto (con imagen o mantener existente)
export const updateProduct = async (
  id: number,
  data: {
    nombre: string;
    descripcion: string;
    id_categoria: number;
    id_vendedor: number;
    precio_unitario: number;
    id_estado_producto: number;
    imagen: File | string | null;
  }
) => {
  const formData = new FormData();
  formData.append('nombre', data.nombre);
  formData.append('descripcion', data.descripcion);
  formData.append('id_categoria', String(data.id_categoria));
  formData.append('id_vendedor', String(data.id_vendedor));
  formData.append('precio_unitario', String(data.precio_unitario));
  formData.append('id_estado_producto', String(data.id_estado_producto));
  
  if (data.imagen instanceof File) {
    formData.append('imagen', data.imagen);
  } else if (typeof data.imagen === 'string') {
    formData.append('imagen', data.imagen); // Mantiene la imagen anterior
  }

  const response = await api.put(`/updateProduct/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// Eliminar producto
export const deleteProduct = async (id: number) => {
  const response = await api.delete(`/deleteProduct/${id}`);
  return response.data;
};
