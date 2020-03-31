<template>
  <v-container class="home py-0 px-0" fluid>
      <!-- <img src="@/assets/one.png" alt=""> -->
      <v-row>
        <v-carousel
          height="auto"
          cycle
          fullscreen
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          vertical
          vertical-delimiters
          
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">{{ item.slide }}</div>
            </v-row>
          
          </v-carousel-item>
        </v-carousel>
      </v-row>

      <v-row class="pt-10 pb-5 px-2">
        <v-flex xs12 sm5 md5 class="align-self-center">
            <div class="text-justify text-center px-2">
              <p class="text-center font-weight-black text-uppercase " :style="{'font-size': fontSize}">
              Soluciones A La Medida <br />Para Requisitos Específicos
              </p>
            </div>
        </v-flex>

        <v-flex xs12 sm7 md7>
          <div class="text-justify text-center pr-8 pl-4 pt-3 mx-4" :style="{'border-top': borderTop, 'border-left': borderLeft}">
            <span class="text-justify">
              <p>
               Spectrum Tecnología comercializa, distribuye y asesora en materia de radiocomunicaciones. Cuenta con el portafolio de productos más completo de soluciones para el sector público y privado: radios digitales y analógicos, infraestructura de radiocomunicación, soluciones para labores de inteligencia y protección de personalidades, aplicaciones para seguridad pública y misión crítica, equipos para uso en minería, petróleo, gas, marítimo y aeronáutico, entre otro.
              </p>
            </span>
          </div>
        </v-flex>
      </v-row>

    <v-container fluid class="my-5">
      
      <v-layout row wrap pa-2>
        <v-flex xs12 sm12 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Fuerza <br />Pública</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Organismos policiales, Salud, Bomberos y Armada.
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
          <v-card hover :ripple="{ class: 'red--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias2.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Mineria & <br />Petroleo</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Soluciones efectivas para entornos críticos de seguridad.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md4 pa-2>
          <v-card hover :ripple="{ class: 'green--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias3.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Industrias & <br />Comercial</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium ">
                Grandes, medianas y pequeñas empresas.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn  x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md4 pa-2>
          <v-card hover :ripple="{ class: 'yellow--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0, 0, 0,.2), rgba(0, 00, 0, 1)"
              src="@/assets/home/industrias6.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Transporte</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Aeropuertos, autobuses, metro hasta ferrocarriles, trenes de alta velocidad.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md4 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Servicios <br />Públicos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Proveedores del sector electrico, gas y agua.
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

    <v-row class="px-2 grey lighten-3">
      <v-flex xs12 class="py-10 my-10 align-self-center">
          <div class="text-justify text-center px-2">
            <p class="text-center font-weight-medium" :style="{'font-size': fontSize}">
            Si desea saber más sobre nuestras soluciones y productos<br />
            </p>
          </div>
          <div class="align-self-center text-center">
          <v-btn rounded  color="primary" ripple >
            <v-icon >phone</v-icon><span class="pl-1 title text-capitalize font-weight-regular
            ">Contactenos</span>
          </v-btn>
          </div>
          
      </v-flex>
    </v-row>

      <!-- <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card
              :color="card.color">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                height="300px"
              >
                <v-card-title class="headline font-weight-bold word-break-normal" v-text="card.title"></v-card-title>
                <v-card-text v-text="card.text" class="title font-weight-bold"></v-card-text>
                <v-spacer></v-spacer>
              </v-img>

            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
  </v-container>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
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

    computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "1.5em !important";
        case 'sm': return "1.5em !important";
        case 'md': return "1.8em !important";
        default: return "2em !important";
      }
    },

    borderTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "3px solid black !important";
        default: return "0px solid black !important";
      }
    },
    borderLeft() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "0px solid black !important";
        default: return "4px solid black !important";
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
