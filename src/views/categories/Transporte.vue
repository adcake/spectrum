<template>
  <v-container class="home py-0 px-0 grey lighten-4" fluid>
    <v-row>
      <v-img
        src="@/assets/home/industrias15.jpg"
        max-height="300"
        gradient="to bottom, rgba(20, 20, 0, .6), rgba(20,20,0,.3)"
        class="grey darken-4"
      >
        <v-row class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-black text-uppercase">Transporte</div>
            <div class="body-1 text-shadow">Nuevas posibilidades en entornos de transporte</div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>

    <v-container>
      <v-layout row>
        <v-card>
          <v-row class="pt-5 pb-5 px-10 " v-for="data in header" :key="data.id">
            <v-flex xs12 sm5 md4 class="align-self-center">
              <div class="text-justify text-center">
                <p class="text-center display-1 font-weight-black">
                  {{ data.headerTitle }}
                </p>
              </div>
            </v-flex>

            <v-flex xs12 sm7 md8 class="align-self-center">
              <div class="text-justify text-center px-4">
                <span class="text-justify">
                  <blockquote class="blockquote text-left text-justify">{{ data.header }}</blockquote>
                </span>
              </div>
            </v-flex>
          </v-row>
          <v-row class="pt-5 pb-5 px-10">
            <v-flex xs12 px-2>
              <ul v-for="(item, i) in itemsTransporte" :key="i">
                <li class="py-1">
                  <span class="font-weight-medium">{{ item.title }}</span>
                  <span class="font-weight-light text-justify">{{ item.text }}</span>
                </li>
              </ul>
            </v-flex>
          </v-row>

          <v-container grid-list-xs fluid>
            <v-layout row wrap>
              <v-flex xs6 sm6 md6 v-for="(item, i) in miningCards" :key="i">
                <v-card class="ma-1" hover :ripple="{ class: 'red--text' }">
                  <v-img
                    class="white--text align-end"
                    height="250px"
                    gradient="to bottom, rgba(25, 20, 0, .3), rgba(10,20,0,.5), rgba(25,25,0,.2)"
                    :src="item.src"
                  >
                    <v-card-title class="text-shadow display-1 text-center font-weight-black">
                      <span class="text-center">{{ item.title }}</span>
                    </v-card-title>
                    <div class="px-4 pb-2">
                      <span class="font-weight-medium text-shadow">
                        {{ item.subtitle }}
                      </span>
                    </div>
                    <template>
                      <PublicDialog :dialog.sync="dialog" v-bind:item="item" />
                    </template>
                    <v-spacer></v-spacer>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-layout>
    </v-container>

    <v-row class="px-2 pt-5 grey lighten-3">
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

<script src="@/views/categories/js/Transporte.js"></script>

<style lang="scss" scoped>
@import "@/styles/components.scss";
</style>
