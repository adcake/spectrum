<template>
  <v-container class="home py-0 px-0" fluid>
      
      <row>
        <v-img
          src="@/assets/home/industrias2.jpg"
          max-height="300"
          gradient="to bottom, rgb(213, 0, 0, .7), rgba(21,0,0,.7)"
          class="grey darken-4"
        >
        <v-row  class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-black text-uppercase">Minería & Petróleo</div>
            <div class="body-1">Soluciones a la Medida</div>
          </v-col>
        </v-row>
        </v-img>
      </row>
      
      <v-row class="pt-10 pb-5 px-10 ">
        <v-flex xs12 sm5 md4 class="align-self-center">
            <div class="text-justify text-center">
              <p class="text-center display-1 font-weight-black">
              Soluciones especificas para entornos de seguridad crítica.
              </p>
            </div>
        </v-flex>

        <v-flex xs12 sm7 md8 class="align-self-center">
          <div class="text-justify text-center px-4">
            <span class="text-justify">
              <p>
              Los entornos difíciles exigen soluciones difíciles. Nuestras marcas en materia de seguridad electronica, radiocomunicación y data para entornos peligrosos, proporcionan soluciones altamente seguras en las condiciones más duras, y están diseñadas a medida para cumplir con los desafíos que generalmente se encuentran en los entornos petroleros y de minería.
              </p>
            </span>
          </div>
        </v-flex>

      </v-row>

    <v-container fluid class="my-5">
      
      <v-layout row wrap pa-2>
        
        <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'red--text' }" >
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias2.jpg"
            >
              <v-card-title class="text-shadow display-1 text-center font-weight-black">
                <span class="text-center">Policia</span>
              </v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Organismo Nacional, Estadal, Municipal y Científica.
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
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias3.jpg"
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
              gradient="to bottom, rgba(0, 0, 0,.2), rgba(0, 00, 0, 1)"
              src="@/assets/home/industrias4.jpg"
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
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Fuerza Armada</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Componentes de Mar, Aire y Tierra
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
  name: 'Mineria',
  data () {
      return {
        items: [
          {
            src: require('@/assets/banner/one.jpg'),
          },
          {
            src: require('@/assets/banner/two.jpg'),
          },
          {
            src: require('@/assets/banner/three.jpg'),
          },
          {
            src: require('@/assets/banner/four.jpg'),
          },
          {
            src: require('@/assets/banner/five.jpg'),
          },
          {
            src: require('@/assets/banner/six.jpg'),
          },
          {
            src: require('@/assets/banner/seven.jpg'),
          },
        ],

        cards: [
        { color:'primary', title: 'Seguridad Pública', src: require('@/assets/home/industrias.jpg'), flex: 6, text: 'Comunicaciones líderes para la seguridad pública.' },
        { title: 'Mineria & Petroleo', src: require('@/assets/home/industrias2.jpg'), flex: 6, text: 'Las compañías mineras más grandes del mundo confían en Spectrum para sus soluciones' },
        { title: 'Comercial & Industrial', src: require('@/assets/home/industrias3.jpg'), flex: 4 },
        { title: 'Transporte', src: require('@/assets/home/industrias4.jpg'), flex: 4 },
         { title: 'Servicios Públicos', src: require('@/assets/home/industrias5.jpg'), flex: 4 },
      ],
      }
    },
}


</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}
</style>
