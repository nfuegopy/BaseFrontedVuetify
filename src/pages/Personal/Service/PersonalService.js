import axios from '../../../services/axios';

export default class PersonalService {
  async listarPersonales() {
    try {
      const response = await axios.get('/personal/personales');
      return response.data;
    } catch (error) {
      console.error('Error al listar los personales:', error);
      throw error;  // Re-lanza el error para que pueda ser manejado por el llamante
    }
  }

  // Otros métodos que invocan a la API

}
