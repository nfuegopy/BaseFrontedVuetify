<template>
  <v-app>
    <v-app-bar app color="blue darken-3" dark >
      <v-toolbar-title>Mi Aplicación</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Opción 1</v-btn>
        </template>
        <v-list>
          <v-list-item @click="navigateTo('ruta1-1')">
            <v-list-item-title>Sub-opción 1.1</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateTo('ruta1-2')">
            <v-list-item-title>Sub-opción 1.2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Opción 2</v-btn>
        </template>
        <v-list>
          <v-list-item @click="navigateTo('ruta2-1')">
            <v-list-item-title>Sub-opción 2.1</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateTo('ruta2-2')">
            <v-list-item-title>Sub-opción 2.2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Opción 3</v-btn>
        </template>
        <v-list>
          <v-list-item @click="navigateTo('ruta3-1')">
            <v-list-item-title>Sub-opción 3.1</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateTo('ruta3-2')">
            <v-list-item-title>Sub-opción 3.2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn @click="logout" color="red">Cerrar Sesión</v-btn>
    </v-app-bar>

    <v-main>
      <!-- Aquí va el contenido principal de tu aplicación -->
      <router-view></router-view>
    </v-main>


  </v-app>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    const logout = () => {
      router.push({ name: "Inicio" });
      console.log('Cerrar sesión');
    };

    return {
      navigateTo,
      logout
    };
  },
};
</script>
