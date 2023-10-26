<template>
    <v-container>
      <v-row justify="center" align="center" style="height: 100vh">
        <v-col cols="12" sm="8" md="4">
          <v-card style="border: 2px solid rgb(96, 96, 255); box-shadow: 0 16px 16px rgba(0,0,0,0.2);">
            <v-card-title class="text-center">
              Iniciar Sesión
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                v-model="username"
                  placeholder="Nombre de usuario"
                  required
                  variant="outlined"
            
                ></v-text-field>
                <v-text-field
                v-model="password"
                placeholder="Contraseña"
                  type="password"
                  variant="outlined"
                  required
                  
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn class="bg-blue" color="white" @click="ingresar">
                Ingresar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import AuthService from "@/services/AuthService";
  
  export default {
    setup() {
      const router = useRouter();
      const username = ref("");
      const password = ref("");
  
      const ingresar = async () => {
        try {
          const response = await AuthService.login(username.value, password.value);
          if (response.redirect === "menu") {
            // Almacenar UsuarioID en localStorage
            localStorage.setItem('UsuarioID', response.UsuarioID);
            router.push({ name: "Inicio" });
          } else if (response.redirect === "reset") {
            // Almacenar UsuarioID en localStorage
            localStorage.setItem('UsuarioID', response.UsuarioID);
            console.log(response); 
            router.push({ name: "Reset", params: { usuarioId: response.UsuarioID } });  // Modificación aquí
          }
        } catch (error) {
          console.error('Error en el ingreso:', error);
        }
      };
  
      return {
        username,
        password,
        ingresar,
      };
    },
  };
  </script>
  