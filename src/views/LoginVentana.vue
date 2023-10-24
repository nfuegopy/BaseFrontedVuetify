<template>
  <div class="container">
      <v-sheet class="neumorphic-bg">
          <v-card class="neumorphic-card mx-auto pa-12" max-width="380">
              <v-form
                  v-model="form"
                  @submit.prevent="onSubmit"
              >
                  <div class="text-center mb-5">
                      <h2>Acceso al Sistema</h2>
                      <p>Ingrese sus credenciales para continuar</p>
                  </div>
          
                  <v-text-field
                      v-model="email"
                      :readonly="loading"
                      :rules="[required]"
                      clearable
                      label="Usuario"
                      solo
                      placeholder="Nombre de usuario"
                      class="neumorphic-input mb-4"
                  ></v-text-field>
          
                  <v-text-field
                      v-model="password"
                      :readonly="loading"
                      :rules="[required]"
                      clearable
                      label="Contraseña"
                      solo
                      type="password"
                      placeholder="Introduzca su contraseña"
                      class="neumorphic-input mb-4"
                  ></v-text-field>
          
                  <v-btn
                      :disabled="!form"
                      :loading="loading"
                      block
                      color="deep-purple accent-4"
                      size="large"
                      type="submit"
                      class="my-4"
                      elevation="0"
                      style="border-radius: 12px;"
                  >
                      Entrar
                  </v-btn>
              </v-form>
          </v-card>
      </v-sheet>
  </div>
</template>




<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e5ec;
}

.neumorphic-bg {
  background: #e0e5ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: -8px -8px 16px #bfc6d1, 
              8px 8px 16px #ffffff;
}

.neumorphic-card {
  background: #e0e5ec;
  border-radius: 15px;
  box-shadow: -8px -8px 16px #bfc6d1, 
              8px 8px 16px #ffffff;
}

.neumorphic-input {
  background: #e0e5ec;
  border-radius: 12px;
  box-shadow: inset -4px -4px 8px #bfc6d1, 
              inset 4px 4px 8px #ffffff;
}
</style>
