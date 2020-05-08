<template>
  <v-container class="home py-0 px-0" fluid>
    <!-- <img src="@/assets/one.png" alt=""> -->
    <v-row>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(item, i) in banners" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ item.slide }}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row class="pt-10 pb-5 px-2">
      <v-flex xs12 sm5 md5 class="align-self-center">
        <div class="text-justify text-center px-2">
          <p class="text-center font-weight-black text-uppercase " :style="{ 'font-size': fontSize }">
            Soluciones A La Medida <br />Para Requisitos Específicos
          </p>
        </div>
      </v-flex>

      <v-flex xs12 sm7 md7>
        <div
          class="text-justify text-center pr-8 pl-4 pt-3 mx-4"
          :style="{ 'border-top': borderTop, 'border-left': borderLeft }"
        >
          <span class="text-justify">
            <p>
              Empresa Venezolana líder en el mercado nacional con más de 11 años de trayectoria, especializada en brindar soluciones de seguridad electrónica y radiocomunicaciones, cuenta con representación directa de las marcas de mayor prestigio a nivel mundial, por lo que podemos asegurar la excelente calidad de nuestros productos, la mejor relación precio-valor del mercado y el servicio posventa más confiable del país.
              <br/><br/>
              Contamos con el portafolio de productos más completo de soluciones para el sector público y privado: radios digitales y
              analógicos, infraestructura de radiocomunicación, soluciones para labores de inteligencia y protección de
              personalidades, aplicaciones para seguridad pública y misión crítica, equipos para uso en minería,
              petróleo, gas, marítimo y aeronáutico.
            </p>
          </span>
        </div>
      </v-flex>
    </v-row>

    <v-container fluid class="my-5">
      <v-layout row wrap pa-2>
        <!-- FUERZA PUBLICA -->
        <v-flex xs12 sm12 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }" to="/categories/publico">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0, 0, 0, 1)"
              src="@/assets/home/industrias.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black"
                >Seguridad <br />Pública</v-card-title
              >
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Organismos policiales, Salud, Bomberos y Armada.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn small rounded color="primary" dark v-on="on" to="/categories/publico">Ver Más</v-btn>
              </div>

              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <!-- MINERIA -->
        <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'red--text' }" to="/categories/critica">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
              src="@/assets/home/industrias2.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black"
                >infraestructura<br />Crítica</v-card-title
              >
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Soluciones efectivas para entornos críticos de seguridad.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn small rounded color="primary" dark v-on="on" to="/categories/critica">Ver Más</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <!-- INDUSTRIA -->
        <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'green--text' }" to="/categories/industrial">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
              src="@/assets/home/industrias3.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black"
                >Comercial & <br />Industrial</v-card-title
              >
              <div class="px-4 pb-2">
                <span class="font-weight-medium ">
                  Grandes, medianas y pequeñas empresas.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn small rounded color="primary" dark v-on="on" to="/categories/industrial">Ver Más</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <!-- TRANSPORTE -->
        <v-flex xs12 sm12 md6 pa-2>
          <v-card hover :ripple="{ class: 'yellow--text' }" to="/categories/transporte">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0, 0, 0,.1), rgba(0, 00, 0, .7)"
              src="@/assets/home/industrias15.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Transporte</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Aeropuertos, autobuses, metro hasta ferrocarriles, trenes de alta velocidad.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn small rounded color="primary" dark v-on="on" to="/categories/transporte">Ver Más</v-btn>
                
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
          <p class="text-center font-weight-medium" :style="{ 'font-size': fontSize }">
            Si desea información sobre nuestras soluciones y productos<br />
          </p>
        </div>
        <div class="align-self-center text-center">
          <v-btn rounded color="primary" ripple>
            <v-icon>phone</v-icon
            ><span
              class="pl-1 title text-capitalize font-weight-regular
            "
              >Contactenos</span
            >
          </v-btn>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script src="@/views/categories/js/Home.js"></script>

<style lang="scss" scoped>
@import "../styles/components.scss";
</style>
