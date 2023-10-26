// src/services/AuthService.js
import axios from './axios';

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post('/auth/login', { nombreUsuario: username, password });
      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }
}

export default new AuthService();
