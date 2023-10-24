import axios from "axios";

//Llamo a la URL de mi Backen en este caso esta ubicado en el localhost puerto3000
//Para este caso se puede modificar a la hora d que sea en un servidor de afuera
const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export default instance;