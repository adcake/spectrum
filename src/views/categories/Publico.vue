<template>
  <v-container class="home py-0 px-0" fluid>
      
      <row>
        <v-img
          src="@/assets/home/industrias.jpg"
          max-height="300"
          gradient="to bottom, rgb(13, 71, 161, .8), rgba(0,0,0,.8)"
          class="grey darken-4"
        >
        <v-row  class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-bold text-uppercase">Seguridad Pública</div>
            <div class="body-1 font-italic">Situaciones especializadas para situaciones y operaciones especiales.</div>
          </v-col>
        </v-row>
        </v-img>
      </row>
      
      <v-row class="pt-10 pb-5 px-10">
        <v-flex xs12 sm5 md4 class="align-self-center">
            <div class="text-justify text-center">
              <p class="text-center font-weight-black text-uppercase " :style="{'font-size': fontSize}">
              Comunicaciones líderes para la seguridad pública
              </p>
            </div>
        </v-flex>

        <v-flex xs12 sm7 md8>
          <div class="text-justify text-center px-4 border-texter">
            <span class="text-justify">
              <p>
              Soluciones de transmisión y procesamiento de datos, vídeo, comunicación y otros recursos, establecerá un centro de coordinación para un nivel de respuesta eficiente. Las soluciones de Spectrum Tecnología con el apoyo de las marcas mas prominentes del mundo, proporcionan a los operadores la capacidad de coordinar con los diferentes cuerpos de la Seguridad Pública respuestas inmediatas.
              Trabajamos de la mano con nuestro cliente para desarrollar el proyecto llave en mano y asegurar el despliegue exitoso y soporte pos-venta con Gobierno para soluciones en las siguientes categorías:
              </p>
            </span>
          </div>
        </v-flex>
      </v-row>

    <v-container fluid class="my-5">
      
      <v-layout row wrap pa-2>
        
        <v-flex xs12 sm12 md12 pa-2>
          <v-card hover :ripple="{ class: 'red--text' }" >
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza4.jpg"
            >
              <v-card-title class="text-shadow display-1 text-center font-weight-black">
                <span class="text-center">Policia</span>
              </v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Organismo Nacionales, Estadales, Municipals y Científicos.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'green--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza7.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Salud</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Hospitales, Centros de Salud y Ambulancias.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn  x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'yellow--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .3)"
              src="@/assets/home/fuerza5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Bomberos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Protección Civil, Bomberos y Guarda Parques.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

         <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Encubiertos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Equipos para operaciones encubiertas.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza8.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Fuerza Armada</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Componentes de Mar, Aire y Tierra.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

       

      </v-layout>

    </v-container>

  </v-container>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Publico',
  data () {
      return {
      }
    },
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "1.5em !important";
        case 'sm': return "1.5em !important";
        default: return "1.6em !important";
      }
    }
  },
}


</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}

.border-texter {
  border-left: 5px solid black;
}
</style>
