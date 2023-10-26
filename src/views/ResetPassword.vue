<template>
    <v-card class="d-flex flex-row mb-6 rounded-xl " style="width: 500px; margin: 0 auto; margin-top: 15px;">
        <v-card-item style="margin: 0 auto;">
            <v-card-text class="text-h6" >
                Para loguearse cambie su contraseña
            </v-card-text>
             <v-text-field v-model="nuevaContrasena" type="password"  variant="outlined" placeholder="Ingrese nueva contreseña"   hint="Ingrese la nueva contreseña"/>
       
         <v-card-actions >
    <v-btn class="bg-blue" @click="actualizarPassword">Actualizar</v-btn>
      </v-card-actions>
        </v-card-item>
      
        <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
        >
            {{ snackbar.message }}
        </v-snackbar>


    </v-card>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';  // Cambiado de useRoute a useRouter
import UsuarioService from '@/services/UsuarioService';

export default {
    setup() {
        const router = useRouter();  // Cambiado de route a router
        const nuevaContrasena = ref('');
        const route = useRoute();
        const usuarioId = route.params.usuarioId;
        const snackbar = ref({
            show: false,
            message: '',
            color: 'success',
            timeout: 2000
        });

        onMounted(() => {
            console.log(usuarioId);
        });

        const actualizarPassword = async () => {
            if (!nuevaContrasena.value) {
                snackbar.value.message = 'Por favor, ingrese una nueva contraseña.';
                snackbar.value.show = true;
                return;
            }

            try {
                await UsuarioService.resetearPassword(usuarioId, nuevaContrasena.value);
                snackbar.value.message = 'Contraseña actualizada con éxito';
                snackbar.value.show = true;
                setTimeout(() => {
                    router.push({ name: 'Login' });  // Redireccionar después de mostrar el mensaje
                }, snackbar.value.timeout);
            } catch (error) {
                console.error('Error al actualizar la contraseña:', error);
                snackbar.value.message = 'Hubo un error al actualizar la contraseña';
                snackbar.value.color = 'error';
                snackbar.value.show = true;
            }
        };

        return {
            nuevaContrasena,
            snackbar,
            actualizarPassword
        };
    }
};
</script>