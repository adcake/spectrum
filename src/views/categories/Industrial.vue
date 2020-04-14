<template>
  <v-container class="home py-0 px-0" fluid>
      
      <row>
        <v-img
          src="@/assets/home/industrias7.jpg"
          max-height="300"
          gradient="to bottom, rgb(255, 61, 0, .3), rgba(255, 61, 0,.8)"
          class="grey darken-4"
        >
          <v-row  class="lightbox white--text pa-2 fill-height">
            <v-col class="align-self-center text-center">
              <div class="text-shadow display-2 font-weight-bold text-uppercase">Sector Comercial & Industrial</div>
              <div class="text-shadow body-1 font-italic font-weight-bold">Soluciones de seguridad para reducción y control de riesgos.</div>
            </v-col>
          </v-row>
        </v-img>
      </row>
      
      <v-row class="pt-10 pb-5 px-10">
        <v-flex xs12 sm5 md4 class="align-self-center">
            <div class="text-justify text-center">
              <p class="text-center font-weight-black text-uppercase " :style="{'font-size': fontSize}">
              Situaciones especializadas para el sector privado.
              </p>
            </div>
        </v-flex>

        <v-flex xs12 sm7 md8>
          <div class="text-justify text-center px-4 border-texter">
            <span class="text-justify">
              <p>
              La seguridad privada es un valor estratégico para cualquier industria. La situación aislada de las instalaciones industriales, su enorme extensión y perímetro y el elevado valor de materiales y productos en stock son algunos de los factores que determinan como se debe plantear un servicio de seguridad para las empresas industriales. El objetivo del servicio es garantizar la continuidad del proceso productivo, de modo que la empresa pueda dedicarse a su auténtico negocio, dejando la seguridad en manos de los especialistas.
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
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/industrias8.jpg"
            >
              <v-card-title class="text-shadow display-1 text-center font-weight-black">
                <span class="text-center">Sector Comercial</span>
              </v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Empresas mayoristas, empresas minoristas y empresas comisionistas.
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
          <v-card hover :ripple="{ class: 'green--text' }">
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/industrias7.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Sector Industrial</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Empresas productoras, manufactureras y del sector agropecuarias.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn  x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <!-- <v-flex xs6 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'yellow--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .3)"
              src="@/assets/home/fuerza5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Hotelería</v-card-title>
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
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Centros Comerciales</v-card-title>
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
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Minoristas</v-card-title>
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
        </v-flex> -->

       

      </v-layout>

    </v-container>


  </v-container>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Industrial',
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
