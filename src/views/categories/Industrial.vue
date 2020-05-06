<template>
  <v-container class="home py-0 px-0 grey lighten-4" fluid>
    <row>
      <v-img
        src="@/assets/home/industrias7.jpg"
        max-height="300"
        gradient="to bottom, rgb(255, 61, 0, .3), rgba(255, 61, 0,.8)"
        class="grey darken-4"
      >
        <v-row class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-bold text-uppercase">Sector Comercial & Industrial</div>
            <div class="text-shadow body-1 font-italic font-weight-bold">
              Soluciones de seguridad para reducción y control de riesgos.
            </div>
          </v-col>
        </v-row>
      </v-img>
    </row>

    <v-container>
      <v-layout row>
        <v-card>
          <v-row class="pt-5 pb-5 px-10 " v-for="data in header" :key="data.id">
            <v-flex xs12 sm12 md4 class="align-self-center">
              <div class="text-justify text-center">
                <p class="text-center display-1 font-weight-black">
                  {{ data.headerTitle }}
                </p>
              </div>
            </v-flex>

            <v-flex xs12 sm12 md8 class="align-self-center">
              <div class="text-justify text-center px-4">
                <span class="text-justify">
                  <blockquote class="blockquote text-left text-justify">{{ data.header }}</blockquote>
                </span>
              </div>
            </v-flex>
          </v-row>

          <v-container fluid class="my-5">
            <v-layout row wrap pa-2>
              <v-flex xs12 sm6 md6 pa-2 v-for="(item, i) in miningCards" :key="i">
                <v-card hover :ripple="{ class: 'red--text' }">
                  <v-img
                    class="white--text align-end"
                    height="250px"
                    gradient="to bottom, rgb(255, 61, 0, .3), rgba(255, 61, 0,.8)"
                    :src="item.src"
                  >
                    <v-card-title class="text-shadow display-1 text-center font-weight-black">
                      <span class="text-center">{{ item.title }}</span>
                    </v-card-title>
                    <div class="px-4 pb-2">
                      <span class="font-weight-medium">
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

<script src="@/views/categories/js/Industrial.js"></script>

<style lang="scss" scoped>
@import "@/styles/components.scss";
</style>
