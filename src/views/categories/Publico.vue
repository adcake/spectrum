<template>
  <v-container class="home py-0 px-0" fluid>
      
    <v-row>
      <v-img
        src="@/assets/home/fuerza9.jpg"
        max-height="300"
        gradient="to bottom, rgb(13, 71, 161, .1), rgb(1, 1, 1, .8), rgba(0,0,0,.1)"
        class="grey darken-4"
      >
      <v-row  class="lightbox white--text pa-2 fill-height">
        <v-col class="align-self-center text-center">
          <div class="text-shadow display-2 font-weight-bold text-uppercase">Seguridad Pública</div>
          <div class="body-1 font-italic">Situaciones especializadas para situaciones y operaciones especiales.</div>
        </v-col>
      </v-row>
      </v-img>
    </v-row>
    
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

//// SECTORES SEG PUBLICA
  
  <PublicDialogPolice />
    
 


//// SAFECITY
    <!-- SAFE CITY -->
    
      <v-container fluid class="pt-0 pb-5">
        <v-row class="px-10">
          <v-flex xs12  class="align-self-center">
            <v-card flat>
              <v-row align="center" justify="center">
                
                <!-- <v-img max-width="100%" max-height="auto" class="justify-center text-center" src="@/assets/images/props/smartcity5.png"/> -->
                <div class="text-justify text-center">
                  <p class="py-3 text-center font-weight-bold text-uppercase">
                    
                    <br />
                    <span class="font-weight-bold black--text align-self-center display-1">PORTFOLIO DE SOLUCIONES PARA SEGURIDAD PÚBLICA</span> <br /><span class="caption font-weight-bold primary--text">Soluciones para ciudades inteligentes.</span>
                  </p>
                </div>
              </v-row>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <div class="text-justify text-center px-4 pt-5" v-bind:class="{border: 'border-top'}">
              <span class="text-justify" v-for="(parrafo, i) in parrafos" :key="i">
                <p class="font-weight-medium">{{parrafo.header}}</p>
              </span>
            </div>
          </v-flex>
        </v-row>
      </v-container>


/////ITEM SELECTOR
      <!-- SOLUCIONES CCTV - INFRA -RADIO - CECOM -->
      <v-container fluid class="pt-5" grey lighten-3 grid-list-xs>
        <v-row class="px-10">
          <v-flex xs12 sm4 v-for="(item, i) in itemsSector" :key="i">
            <div class="px-4 py-3">
              <span class="text-justify">
                <p class="text-center" >
                  <v-avatar tile  size="150">
                    <img :src="item.src">
                  </v-avatar>
                </p>
                <v-divider></v-divider>
                <p class="text-center font-weight-medium subtitle-2">{{ item.text}}</p>
              </span>
            </div>
          </v-flex>
        </v-row>
      </v-container>

      <!-- <v-container fluid  grid-list-xs>
        <v-row class="pt-5 pb-5 px-10">
          <v-flex xs12 px-2>
            <ul v-for="(item, i) in itemsTetra" :key="i">
              <li class="py-1" >
                <span class="font-weight-medium">{{ item.title }}</span>
                <span class="font-weight-light text-justify">{{ item.text }}</span>
              </li>
            </ul>
          </v-flex>
        </v-row>
      </v-container> -->
    
/////INFORMATION BREAK
    <!-- TETRA RADIOCOMUNICACION -->
      <v-container fluid grid-list-xs>
        <v-row class="px-10">
          <v-flex xs12>
            <div class="text-justify text-center px-5">
              <span class="text-justify" v-for="(parrafo, i) in parrafos" :key="i">
                <p class="font-weight-medium">{{parrafo.subHeader}}</p>
              </span>
            </div>
          </v-flex>
        </v-row>
      </v-container>
    

////// BANNER LEFT
      <v-row fluid class="grey lighten-3">
        <v-flex xs8 sm3 class="hidden-xs-only">
          <v-img src="@/assets/images/props/leftbanner.jpg" height="100%" ></v-img>
        </v-flex>
        <v-flex xs12 sm9 pr-10>
          <v-container fluid  grid-list-xs>
            <div class="text-justify text-center">
              <p class="py-5 title text-center font-weight-bold text-uppercase">
              <span class="font-weight-black black--text">SOLUCIONES DE COMUNICACIÓN PROFESIONAL PARA SEGURIDAD PÚBLICA</span> <br /><span class="caption font-weight-bold primary--text">TErrestrial Trunked RAdio</span>
              </p>
            </div>
          </v-container>
          <v-container fluid grid-list-xs>
            <v-row no-gutters>
              <v-col cols="6" sm="3" class="align-self-center text-center" v-for="(logo, i) in logoTechs" :key="i">
                <v-avatar size="150">
                  <img :src="logo.src" alt="alt">
                </v-avatar>
              </v-col>
            </v-row>
          </v-container>
          <v-container fluid class="pt-5 pb-5" grey lighten-3 grid-list-xs>
            <v-row class="px-10">
              <v-flex xs12 sm6 v-for="(item, i) in sectorOption" :key="i">
                <div class="text-justify text-center px-4 py-3">
                  <span class="text-justify">
                    <p>
                      {{ item.text}}
                    </p>
                  </span>
                </div>
              </v-flex>
            </v-row>

            <v-row class="pt-5 pb-5 px-10">
              <v-flex xs12 px-2>
                <ul v-for="(item, i) in itemsTetra" :key="i">
                  <li class="py-1" >
                    <span class="font-weight-medium">{{ item.title }}</span>
                    <span class="font-weight-light text-justify">{{ item.text }}</span>
                  </li>
                </ul>
              </v-flex>
            </v-row>
          </v-container>
        </v-flex>
      </v-row>

/////INFORMATION BREAK
    <!-- TETRA RADIOCOMUNICACION -->
      <v-container fluid grid-list-xs>
        <v-row class="px-10">
          <v-flex xs12>
            <div class="text-justify text-center px-5">
              <span class="text-justify" v-for="(parrafo, i) in parrafos" :key="i">
                <p class="font-weight-medium">{{parrafo.subHeader3}}</p>
              </span>
            </div>
          </v-flex>
        </v-row>
      </v-container>


/////BANNER RIGTH
      <v-row fluid class="grey lighten-3">
        <v-flex xs12 sm9 px-10>
          
          <v-container fluid>
            <v-row no-gutters class="mx-10 borderRow" v-for="(item, i) in itemsSpec" :key="i">
              <v-col cols="12" sm="4" class="align-self-center">
                
                  <span class="font-weight-bold title-2">{{ item.title }}</span>
                
              </v-col>
              <v-col cols="12" sm="8">
                  <ul>
                    <li>{{ item.text }}</li>
                    <li v-if="item.text2">{{item.text2}}</li>
                  </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex xs8 sm3 class="hidden-xs-only">
          <v-img src="@/assets/images/props/rightbanner.jpg" height="100%" ></v-img>
        </v-flex>
        
      </v-row>

      
      <!-- <v-container fluid>
          <v-row no-gutters class="mx-10 borderRow" v-for="(item, i) in itemsSpec" :key="i">
            <v-col cols="12" sm="4" class="align-self-center">
              <v-card class="pa-2" flat tile >
                <span class="font-weight-bold">{{ item.title }}</span>
              </v-card>
            </v-col>
            <v-col cols="12" sm="8">
              <v-card class="pa-2" flat tile >
                <ul>
                  <li>{{ item.text }}</li>
                  <li v-if="item.text2">{{item.text2}}</li>
                </ul>
              </v-card>
            </v-col>
          </v-row>
          

      </v-container> -->

      <v-container fluid class="mb-5" grid-list-xs>
        <!-- <v-row class="pt-5 pb-5 px-10">
          <v-flex xs12 px-2>
            <ul v-for="(item, i) in itemsTetra" :key="i">
              <li class="py-1" >
                <span class="font-weight-medium">{{ item.title }}</span>
                <span class="font-weight-light text-justify">{{ item.text }}</span>
              </li>
            </ul>
          </v-flex>
        </v-row> -->
      </v-container>
   
    
  </v-container>
  
</template>


<script src="@/views/categories/js/Public.js"></script>


<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}

.border-texter {
  border-left: 3px solid black;
}
.border {
  border-top: 3px solid  rgb(176, 190, 197);
}
.borderRow {
  border-bottom: .2px solid rgb(198, 215, 223);
}
</style>
