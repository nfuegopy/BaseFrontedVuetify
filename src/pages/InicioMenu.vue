<template>
  <v-container>
    <v-row justify="center">
      <v-col class="text-center">
        <v-typography
          class="display-1 radical-title"
          variant="h1"
        >
          Sistema
        </v-typography>
        <v-card
          class="mx-auto mt-10 mb-10 radical-card"
          max-width="500"
        >
          <v-card-text class="text-center">
            <v-typography
              class="headline radical-date"
              variant="h2"
            >
              {{ currentDate }}
            </v-typography>
            <v-typography
              class="subtitle-1 radical-time"
              variant="h4"
            >
              {{ currentTime }}
            </v-typography>
            <v-typography
              class="caption radical-quote"
            >
              Frase del día: "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta."
            </v-typography>
            <v-typography
              class="caption radical-weather"
            >
              Clima actual: Soleado, 25°C
            </v-typography>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/es';

export default {
  name: 'InicioMenu',
  data() {
    dayjs.locale('es');
    return {
      currentDate: dayjs().format('dddd D [de] MMMM [del] YYYY'),
      currentTime: dayjs().format('HH:mm:ss')
    };
  },
  methods: {
    updateTime() {
      this.currentTime = dayjs().format('HH:mm:ss');
    }
  },
  mounted() {
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.radical-title {
  font-family: 'Arial Black', sans-serif;
  color: #000; /* Cambiado a negro para mejor visibilidad */
  background: linear-gradient(45deg, #f06, #9f6);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.radical-card {
  background: linear-gradient(45deg, #9f6, #f06);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.radical-card:hover {
  transform: scale(1.05);
}

.radical-date, .radical-time, .radical-quote, .radical-weather {
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.radical-time {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
