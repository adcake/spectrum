<template>
  <div class="text-center pb-4">
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn small rounded color="primary" dark v-on="on">Ver Más</v-btn>
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

          <v-flex xs12 sm12>
            <v-container fluid grid-list-xs class="grey lighten-4">
              <div class="text-justify text-center">
                <p class="py-5 title text-center font-weight-bold text-uppercase">
                  <span class="display-1 font-weight-black">{{ item.titlePop }}</span> <br /><span
                    class="caption font-weight-bold primary--text"
                    >{{ item.subtitle }}</span
                  >
                </p>
              </div>
            </v-container>

            <v-container fluid grid-list-xs>
              <v-row no-gutters>
                <v-col
                  class="align-self-center text-center px-5"
                  v-for="radiopic in item.picList1"
                  :key="radiopic.id"
                >
                  <v-img
                    v-if="radiopic.text1"
                    height="300"
                    aspect-ratio="2"
                    contain
                    :src="radiopic.src"
                    alt="alt"
                  ></v-img>
                  <v-list three-line subheader v-if="radiopic.text1">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">{{ radiopic.text1 }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-chip small>{{ radiopic.text2 }}</v-chip>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
///
            <v-container>
              <v-row>
                <v-col md12 mb-10 v-for="description in item.description" :key="description.id">
                  <v-card class="pa5">
                    <v-layout row class="text-center px-10 pt-10 grey lighten-4">
                      <v-flex xs12>
                        <p class="font-weight-bold black--text align-self-center headline text-uppercase">
                          {{ description.title }}
                        </p>
                        <p class="caption font-weight-bold primary--text">{{ description.subtitle }}</p>
                      </v-flex>

                      <v-layout row wrap>
                        <v-flex xs12>
                          <v-img class="px-1" contain :src="description.imageHeaderPic"></v-img>
                          <v-chip x-small>Soluciones a la medida de su ciudad / Centro de control</v-chip>
                        </v-flex>
                      </v-layout>

                      <v-flex xs1 my-5></v-flex>

                      <v-card flat shaped v-if="description.descriptionTitle5">
                        <v-layout row wrap>
                          <v-flex xs12 pa-2 class="align-self-center">
                            <blockquote text-center class="title font-weight-black px-10">
                              {{ description.descriptionTitle5 }}
                            </blockquote>
                            <blockquote class="blockquote text-left text-justify px-10">
                              {{ description.description5 }}
                            </blockquote>
                          </v-flex>
                        </v-layout>
                      </v-card>

                      <v-flex xs12>
                        <blockquote class="blockquote text-left text-justify ">
                          {{ description.description }}
                        </blockquote>
                        <div class="px-5">
                          <ul v-for="item in description.descriptionListing" :key="item.id">
                            <li class="blockquote text-left text-justify" v-if="item.listingDes">
                              {{ item.listingDes }}
                            </li>
                          </ul>
                        </div>
                        <blockquote v-if="description.description1" class="blockquote text-left text-justify ">
                          {{ description.description1 }}
                        </blockquote>
                      </v-flex>

                      <v-flex xs1 my-5></v-flex>

                      <v-card flat shaped v-if="description.description2">
                        <v-layout row wrap>
                          <v-flex xs12 sm8 pa-2 class="align-self-center">
                            <blockquote class="blockquote text-left text-justify px-10">
                              {{ description.description2 }}
                            </blockquote>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <div class="pa-3">
                              <img width="auto" height="200" :src="description.image2" />
                              <v-chip x-small>{{ description.image2Description }}</v-chip>
                            </div>
                          </v-flex>
                          <v-flex xs12 pa-2 class="align-self-center">
                            <div class="px-10">
                              <ul v-for="item in description.description2Listing" :key="item.id">
                                <li class=" blockquote text-left text-justify" v-if="item.listingDes">
                                  {{ item.listingDes }}
                                </li>
                              </ul>
                            </div>
                            <blockquote class="blockquote text-left text-justify px-10">
                              {{ description.description3 }}
                            </blockquote>
                          </v-flex>
                        </v-layout>
                      </v-card>

                      <v-flex xs1 my-5></v-flex>

                      <v-card flat shaped>
                        <v-layout row wrap>
                          <v-col xs4 sm4>
                            <div class="pa-3">
                              <img width="auto" height="200" :src="description.image4" />
                              <v-chip x-small>{{ description.image4Description }}</v-chip>
                            </div>
                          </v-col>
                          <v-flex xs12 sm8 pa-2 class="align-self-center">
                            <blockquote class="blockquote text-left">{{ description.description4 }}</blockquote>
                            <v-container fluid grid-list-xs>
                              <v-row no-gutters>
                                <v-col
                                  cols="6"
                                  sm="6"
                                  md="3"
                                  class="align-self-center text-center py-3"
                                  v-for="logos in item.brandLogos"
                                  :key="logos.id"
                                >
                                  <v-img height="50" aspect-ratio="2" contain :src="logos.src" alt="alt"></v-img>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-flex>
                        </v-layout>
                      </v-card>

                      <v-flex xs1 my-5></v-flex>

                      <v-flex xs12>
                        <v-row no-gutters>
                          <v-col
                            cols="6"
                            sm="3"
                            class="px-2 align-self-center text-center"
                            v-for="radiopic in item.picList2"
                            :key="radiopic.id"
                          >
                            <v-card shaped>
                              <v-list three-line subheader>
                                <v-img height="150" aspect-ratio="2" contain :src="radiopic.src" alt="alt"></v-img>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold">{{ radiopic.text1 }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                      <v-chip small>{{ radiopic.text2 }}</v-chip>
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-flex>

                      <v-flex xs1 my-5></v-flex>

                      <v-flex xs12 class="py-3" v-for="list in item.descriptionList" :key="list.id">
                        <v-list three-line class="text-left pa-5">
                          <template>
                            <v-list-item>
                              <v-list-item-avatar class="align-self-center">
                                <v-icon large>{{ list.iconListing }}</v-icon>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title v-if="list.preListing"
                                  ><span class="title font-weight-bold black--text text-left">{{
                                    list.preListing
                                  }}</span></v-list-item-title
                                >
                                <blockquote class="blockquote text-justify px-0 py-1">{{ list.listing }}</blockquote>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-list>
                      </v-flex>

                      <v-flex xs1 my-5></v-flex>

                      <v-flex xs12 v-if="item.youtubeEmbed">
                        <span v-for="video in item.youtubeEmbed" :key="video.id">
                          <youtube
                            :video-id="video.videoId"
                            :player-width="video.width"
                            :player-height="video.height"
                          ></youtube>
                        </span>
                      </v-flex>

                      <v-flex xs1 my-5></v-flex>

                      <v-flex xs12>
                        <v-row no-gutters>
                          <v-col
                            cols="6"
                            sm="3"
                            class="px-2 py-5 align-self-center text-center"
                            v-for="radiopic in item.picList3"
                            :key="radiopic.id"
                          >
                            <v-card shaped>
                              <v-list three-line subheader>
                                <v-img height="150" aspect-ratio="2" contain :src="radiopic.src" alt="alt"></v-img>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold">{{ radiopic.text1 }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                      <v-chip small>{{ radiopic.text2 }}</v-chip>
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-flex>

                      <v-flex xs1 my-5></v-flex>
                    </v-layout>
                  </v-card>
                </v-col>
              </v-row>
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
          </v-flex>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script src="@/views/categories/js/PublicDialog.js"></script>

<style lang="scss" scoped>
@import "@/styles/components.scss";
</style>
