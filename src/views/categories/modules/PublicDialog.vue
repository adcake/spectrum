<template>
  <v-container grid-list-xs fluid>
    <v-layout row wrap>
      <!-- Police Radios -->
      <v-flex xs12 sm6 md6 lg3>
        <v-card class="ma-1" hover :ripple="{ class: 'red--text' }"  category="police">
          <v-img
            class="white--text align-end"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9), rgba(0, 0, 0, .4)"
            :src="police.src"
          >
            <v-card-title class="text-shadow display-1 text-center font-weight-black">
              <span class="text-center">{{ police.title }}</span>
            </v-card-title>
            <div class="px-4 pb-2">
              <span class="font-weight-medium text-shadow">{{ police.text }}</span>
            </div>
            <template>
              
              <div class="text-center pb-4">
                <v-row justify="center">
                  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn x-small rounded  color="green" dark v-on="on">Ver Más</v-btn>
                    </template>
                    <v-card>
                        <v-toolbar dark color="grey darken-4">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Descripción</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="dialog = false">Cerrar</v-btn>
                        </v-toolbar-items>
                        </v-toolbar>


                        <v-flex xs12 sm12 pr-10>
                        <v-container fluid  grid-list-xs >
                            <div class="text-justify text-center"  v-for="radio in titlePoliceRadio" :key="radio.id">
                            <p class="py-5 title text-center font-weight-bold text-uppercase">
                            <span class="font-weight-black black--text">{{ radio.title }}</span> <br /><span class="caption font-weight-bold primary--text">{{ radio.subtitle }}</span>
                            </p>
                            </div>
                        </v-container>

                        <v-container fluid grid-list-xs>
                            <v-row no-gutters>
                            <v-col cols="6" sm="3" class="align-self-center text-center" v-for="radio in policeRadios" :key="radio.policeRadios">
                                
                                <v-img height="300" aspect-ratio="2" contain :src="radio.src" alt="alt"></v-img>
                                <v-list three-line subheader >
                                    <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ radio.text }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ radio.text2 }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                            </v-row>
                        </v-container>

                        </v-flex>
                    </v-card>
                    </v-dialog>
                </v-row>
              </div>

            </template>
            <v-spacer></v-spacer>
          </v-img>
        </v-card>
      </v-flex>

      <!-- Health Radios -->
      <v-flex xs12 sm6 md6 lg3>
        <v-card class="ma-1" hover :ripple="{ class: 'red--text' }"  category="health">
          <v-img
            class="white--text align-end"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9), rgba(0, 0, 0, .4)"
            :src="health.src"
          >
            <v-card-title class="text-shadow display-1 text-center font-weight-black">
              <span class="text-center">{{ health.title }}</span>
            </v-card-title>
            <div class="px-4 pb-2">
              <span class="font-weight-medium text-shadow">{{ health.text }}</span>
            </div>
            <template>
              
              <div class="text-center pb-4">
                <v-row justify="center">
                  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                      <v-btn x-small rounded  color="green" dark v-on="on">Ver Más</v-btn>
                    </template>
                    <v-card>
                      <v-toolbar dark color="grey darken-4">
                        <v-btn icon dark @click="dialog = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Descripción</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                          <v-btn dark text @click="dialog = false">Cerrar</v-btn>
                        </v-toolbar-items>
                      </v-toolbar>


                      <v-flex xs12 sm12 pr-10>
                        <v-container fluid  grid-list-xs>
                          <div class="text-justify text-center" v-for="radio in titleHealthRadio" :key="radio.id">
                            <p class="py-5 title text-center font-weight-bold text-uppercase">
                            <span class="font-weight-black black--text">{{ radio.title }}</span> <br /><span class="caption font-weight-bold primary--text">{{ radio.subtitle }}</span>
                            </p>
                          </div>
                        </v-container>

                        <v-container fluid grid-list-xs>
                          <v-row no-gutters>
                            <v-col cols="6" sm="3" class="align-self-center text-center" v-for="radio in healthRadios" :key="radio.id">
                                
                                <v-img height="300" aspect-ratio="2" contain :src="radio.src" alt="alt"></v-img>
                                <v-list three-line subheader >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title>{{ radio.text }}</v-list-item-title>
                                      <v-list-item-subtitle>{{ radio.text2 }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                            </v-col>
                          </v-row>
                        </v-container>

                      </v-flex>
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>

            </template>
            <v-spacer></v-spacer>
          </v-img>
        </v-card>
      </v-flex>

      <!-- Public Radios -->
      <v-flex xs12 sm6 md6 lg3>
        <v-card class="ma-1" hover :ripple="{ class: 'red--text' }"  category="publics">
          <v-img
            class="white--text align-end"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9), rgba(0, 0, 0, .4)"
            :src="publics.src"
          >
            <v-card-title class="text-shadow display-1 text-center font-weight-black">
              <span class="text-center">{{ publics.title }}</span>
            </v-card-title>
            <div class="px-4 pb-2">
              <span class="font-weight-medium text-shadow">{{ publics.text }}</span>
            </div>
            <template>
              
              <div class="text-center pb-4">
                <v-row justify="center">
                  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                      <v-btn x-small rounded  color="green" dark v-on="on">Ver Más</v-btn>
                    </template>
                    <v-card>
                      <v-toolbar dark color="grey darken-4">
                        <v-btn icon dark @click="dialog = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Descripción</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                          <v-btn dark text @click="dialog = false">Cerrar</v-btn>
                        </v-toolbar-items>
                      </v-toolbar>


                      <v-flex xs12 sm12 pr-10>
                        <v-container fluid  grid-list-xs>
                          <div class="text-justify text-center" v-for="(radio) in titleHealthRadio" :key="radio.id">
                            <p class="py-5 title text-center font-weight-bold text-uppercase">
                            <span class="font-weight-black black--text">{{ radio.title }}</span> <br /><span class="caption font-weight-bold primary--text">{{ radio.subtitle }}</span>
                            </p>
                          </div>
                        </v-container>

                        <v-container fluid grid-list-xs>
                          <v-row no-gutters>
                            <v-col cols="6" sm="3" class="align-self-center text-center" v-for="radio in healthRadios" :key="radio.id">
                                
                                <v-img height="300" aspect-ratio="2" contain :src="radio.src" alt="alt"></v-img>
                                <v-list three-line subheader >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title>{{ radio.text }}</v-list-item-title>
                                      <v-list-item-subtitle>{{ radio.text2 }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                            </v-col>
                          </v-row>
                        </v-container>

                      </v-flex>
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>

            </template>
            <v-spacer></v-spacer>
          </v-img>
        </v-card>
      </v-flex>

      <!-- Covert Radios -->
      <v-flex xs12 sm6 md6 lg3>
        <v-card class="ma-1" hover :ripple="{ class: 'red--text' }"  category="covert">
          <v-img
            class="white--text align-end"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9), rgba(0, 0, 0, .4)"
            :src="covert.src"
          >
            <v-card-title class="text-shadow display-1 text-center font-weight-black">
              <span class="text-center">{{ covert.title }}</span>
            </v-card-title>
            <div class="px-4 pb-2">
              <span class="font-weight-medium text-shadow">{{ covert.text }}</span>
            </div>
            <template>
              
              <div class="text-center pb-4">
                <v-row justify="center">
                  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                      <v-btn x-small rounded  color="green" dark v-on="on">Ver Más</v-btn>
                    </template>
                    <v-card>
                      <v-toolbar dark color="grey darken-4">
                        <v-btn icon dark @click="dialog = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Descripción</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                          <v-btn dark text @click="dialog = false">Cerrar</v-btn>
                        </v-toolbar-items>
                      </v-toolbar>


                      <v-flex xs12 sm12 pr-10>
                        <v-container fluid  grid-list-xs>
                          <div class="text-justify text-center" v-for="radio in titleCovertRadio" :key="radio.id">
                            <p class="py-5 title text-center font-weight-bold text-uppercase">
                            <span class="font-weight-black black--text">{{ radio.title }}</span> <br /><span class="caption font-weight-bold primary--text">{{ radio.subtitle }}</span>
                            </p>
                          </div>
                        </v-container>

                        <v-container fluid grid-list-xs>
                          <v-row no-gutters>
                            <v-col cols="6" sm="3" class="align-self-center text-center" v-for="radio in covertRadios" :key="radio.id">
                                
                                <v-img height="300" aspect-ratio="2" contain :src="radio.src" alt="alt"></v-img>
                                <v-list three-line subheader >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title>{{ radio.text }}</v-list-item-title>
                                      <v-list-item-subtitle>{{ radio.text2 }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                            </v-col>
                          </v-row>
                        </v-container>

                      </v-flex>
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>

            </template>
            <v-spacer></v-spacer>
          </v-img>
        </v-card>
      </v-flex>




    </v-layout>
  </v-container>



</template>


  <script src="@/views/categories/js/PublicDialog.js"></script>