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
      
      <v-row class="pt-10 pb-5">
        <div class="px-10 text-justify text-center">
          <span class="text-center">
            <p class="text-center display-1 font-weight-medium">
            Manteniendo la producción en movimiento <br />SOLUCIONES INDUSTRIALES
            </p>
            <p>
              El éxito de su negocio depende de su capacidad para mantener la producción en movimiento. Al proporcionar datos precisos y consistentes en tiempo real, nuestras soluciones de comunicación especializadas le permiten rastrear, mantener y optimizar el rendimiento, reduciendo el tiempo de inactividad y minimizando la pérdida de ingresos.

              Desde responder a incidentes hasta programar el mantenimiento, la automatización de los procesos esenciales mejora la utilización de sus activos y los tiempos de respuesta, asegurando la continuidad del negocio y salvaguardando el bienestar de su fuerza laboral.
            </p>
          </span>
        </div>
      </v-row>

    <v-container fluid class="my-5">
      
      <v-layout row wrap pa-2>
        <v-flex xs12 sm12 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal">Seguridad Pública</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Las compañías mineras más grandes del mundo confían en Spectrum para sus soluciones.
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
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias2.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal">Mineria & Petroleo</v-card-title>
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
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
              src="@/assets/home/industrias3.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal">Comercial</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Siluciones para grandes, medianas y pequeñas empresas.
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
              height="200px"
              gradient="to bottom, rgba(0, 0, 0,.2), rgba(0, 00, 0, 1)"
              src="@/assets/home/industrias4.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal">Transporte</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Soluciones para todo tipo de transporte aereo, maritimo y terrestre.
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
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal">Servicios Públicos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Soluciones para proveedores del sector electrico, gas y agua.
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

    <v-row class="pt-5 pb-5">
      <div class="px-10 text-justify text-center">
        <span class="text-center">
          <p class="text-center display-1 font-weight-medium">
          Quienes somos
          </p>
          <p class="text-justify">
            Spectrum Tecnología, empresa Venezolana líder en el mercado nacional con más de 15 años de trayectoria, especializada en soluciones de seguridad electrónica y radiocomunicaciones, cuenta con representación directa de las marcas de mayor prestigio a nivel mundial, por lo que podemos asegurar la excelente calidad de nuestros productos, la mejor relación precio-valor del mercado y el servicio posventa más confiable del país.
          </p>
        </span>
      </div>
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
  name: 'Publico',
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
