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
                  <div class="text-justify text-center" v-for="radio in titleDialogRadio" :key="radio.titleDialogRadio" >
                  <p class="py-5 title text-center font-weight-bold text-uppercase">
                  <span class="font-weight-black black--text">{{ radio.title }}</span> <br /><span class="caption font-weight-bold primary--text">{{ radio.subtitle }}</span>
                  </p>
                  </div>
              </v-container>

              <v-container fluid grid-list-xs>
                  <v-row no-gutters>
                  <v-col cols="6" sm="3" class="align-self-center text-center" v-for="radio in dialogRadios" :key="radio.dialogRadios">
                      
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


  <script src="@/views/categories/js/PublicDialog.js"></script>