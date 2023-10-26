import axios from './axios.js';  // Asegúrate de que la ruta sea la correcta

class UsuarioService {
  async listarusuario() {
    const response = await axios.get('/usuario/usuarios');
    return response.data;
  }

  async insertarUsuario(usuario) {
    const response = await axios.post('/usuario/insertar', usuario);
    return response.data;
  }

  async actualizarNombreUsuario(id, nombreUsuario) {
    const response = await axios.put(`/usuario/actualizarNombreUsuario/${id}`, { nombreUsuario });
    return response.data;
  }

  async resetearPassword(id, password) {
    const response = await axios.put(`/usuario/resetearPassword/${id}`, { password });
    return response.data;
  }

  async eliminarUsuario(id) {
    const response = await axios.delete(`/usuario/eliminarUsuario/${id}`);
    return response.data;
  }
}

export default new UsuarioService();
