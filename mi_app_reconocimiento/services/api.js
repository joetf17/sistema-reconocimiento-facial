import axios from 'axios';

const API_URL = 'http://192.168.1.6:5000'; // Usa tu IP local

export const reconocerUsuario = async (imagen) => {
  const formData = new FormData();
  formData.append('imagen', {
    uri: imagen.uri,
    name: 'foto.jpg',
    type: 'image/jpeg',
  });

  const response = await axios.post(`${API_URL}/reconocer_usuario`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

export const registrarUsuario = async ({ nombre, apellido, codigoUnico, email, requisitoriado, imagen }) => {
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('apellido', apellido);
  formData.append('codigo_unico', codigoUnico);
  formData.append('email', email);
  formData.append('requisitoriado', requisitoriado.toString());
  formData.append('imagen', {
    uri: imagen.uri,
    name: 'foto.jpg',
    type: 'image/jpeg',
  });

  const response = await axios.post(`${API_URL}/registrar_usuario`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

