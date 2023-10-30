import PersonalService from '../Service/PersonalService';

export default class PersonalController {
  constructor() {
    this.service = new PersonalService();
  }

  async listarPersonales() {
    return await this.service.listarPersonales();
  }

  // Métodos para gestionar la lógica, como obtener, crear, actualizar y eliminar personales
}
