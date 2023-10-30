<template>
  <v-container>
    <v-card style="border: solid 2.5px black;">
      <v-card-title>Ficha de Personal</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-text-field label="Nombre" variant="outlined"  ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="Apellido" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="Telefono" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="Email" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
    
      </v-card-text>
      <v-card-actions>
        <v-btn color="white" class="bg-blue" style="border: solid black">Agregar</v-btn>
        <v-btn color="white" class="bg-green" style="border: solid black">Grabar</v-btn>
        <v-btn color="backd" class="bg-yellow" style="border: solid black">Editar</v-btn>
        <v-btn color="black" class="bg-white" style="border: solid black">Cancelar</v-btn>
        <v-btn color="white" class="bg-red" style="border: solid black">Eliminar</v-btn>
      </v-card-actions>
      <v-card-text class="text-h6" style="margin: 0 auto">
Lista de Personal
      </v-card-text>
      <v-table style="border: solid 2.5px black; margin: 20px">
    <thead>
      <tr>
        <th class="text-left">
          CI
        </th>
        <th class="text-left">
          Nombre
        </th>
        <th class="text-left">
          Apellido
        </th>
        <th class="text-left">
          Telefono
        </th>
        <th class="text-left">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in personales"
        :key="item.CI"
      >
        <td>{{ item.CI }}</td>
        <td>{{ item.Nombre }}</td>
        <td>{{ item.Apellido }}</td>
        <td>{{ item.Telefono }}</td>
        <td>{{ item.Email }}</td>
      </tr>
    </tbody>
  </v-table>
    </v-card>
  </v-container>
</template>

<script>
import PersonalController from '../Controller/PersonalController';

export default {
  data() {
    return {
      personales: [],
      // ... el resto de tu data ...
    };
  },
  methods: {
    async fetchPersonales() {
      const controller = new PersonalController();
      try {
        this.personales = await controller.listarPersonales();
        console.log(this.personales);  // Verifica en la consola si los datos se están cargando correctamente
      } catch (error) {
        console.error('Error fetching personales:', error);
      }
    },
    // ... el resto de tus métodos ...
  },
  mounted() {
    this.fetchPersonales();  // Carga los datos de los personales cuando el componente se monta
  },
};
</script>
