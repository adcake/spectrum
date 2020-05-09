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

          <v-row>
            <v-col xs12 sm12>
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

              <v-container>
                <v-row>
                  <v-col md12 mb-10 v-for="description in item.description" :key="description.id">
                    <v-card class="pa5">
                      <v-row class="text-center pt-10 grey lighten-4">
                        <v-row>
                          <v-col xs12>
                            <p class="font-weight-bold black--text align-self-center headline text-uppercase">
                              {{ description.title }}
                            </p>
                            <p class="caption font-weight-bold primary--text">{{ description.subtitle }}</p>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col xs12>
                            <v-container>
                              <v-img contain :src="description.imageHeaderPic"></v-img>
                            </v-container>
                            <v-chip x-small>Soluciones a la medida de su ciudad / Centro de control</v-chip>
                          </v-col>
                        </v-row>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-10">
                            <v-card flat shaped v-if="description.descriptionTitle5">
                              <v-row>
                                <v-col xs12 class="align-self-center">
                                  <p text-center class="title font-weight-black px-10">
                                    {{ description.descriptionTitle5 }}
                                  </p>
                                  <p class="p text-left text-justify px-10">
                                    {{ description.description5 }}
                                  </p>
                                </v-col>
                              </v-row>
                            </v-card>

                            <v-row>
                              <v-col>
                                <p class="p text-left text-justify ">
                                  {{ description.description }}
                                </p>
                                <div>
                                  <ul v-for="item in description.descriptionListing" :key="item.id">
                                    <li class="p text-left text-justify" v-if="item.listingDes">
                                      {{ item.listingDes }}
                                    </li>
                                  </ul>
                                </div>
                                <p v-if="description.description1" class="p text-left text-justify ">
                                  {{ description.description1 }}
                                </p>
                              </v-col>
                            </v-row>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-2">
                            <v-card flat shaped v-if="description.description2">
                              <v-row>
                                <v-col xs12 sm8 pa-2 class="align-self-center">
                                  <p class="p text-left text-justify px-10">
                                    {{ description.description2 }}
                                  </p>
                                </v-col>
                                <v-col xs12 sm4>
                                  <div class="pa-3">
                                    <img width="auto" height="200" :src="description.image2" />
                                    <v-chip x-small>{{ description.image2Description }}</v-chip>
                                  </div>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col xs12 pa-2 class="align-self-center">
                                  <div class="px-10">
                                    <ul v-for="item in description.description2Listing" :key="item.id">
                                      <li class=" p text-left text-justify" v-if="item.listingDes">
                                        {{ item.listingDes }}
                                      </li>
                                    </ul>
                                  </div>
                                  <p class="p text-left text-justify px-10">
                                    {{ description.description3 }}
                                  </p>
                                </v-col>
                              </v-row>
                            </v-card>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-2">
                            <v-card flat shaped>
                              <v-row wrap>
                                <v-col xs4 sm4>
                                  <div class="pa-3">
                                    <img width="auto" height="200" :src="description.image4" />
                                    <v-chip x-small>{{ description.image4Description }}</v-chip>
                                  </div>
                                </v-col>
                                <v-flex xs12 sm8 pa-2 class="align-self-center">
                                  <p class="p text-left">{{ description.description4 }}</p>
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
                              </v-row>
                            </v-card>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-2">
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
                                        <v-list-item-title class="font-weight-bold">{{
                                          radiopic.text1
                                        }}</v-list-item-title>
                                        <v-list-item-subtitle>
                                          <v-chip small>{{ radiopic.text2 }}</v-chip>
                                        </v-list-item-subtitle>
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </v-card>
                              </v-col>
                            </v-row>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-2">
                            <v-card class="my-2" flat v-for="list in item.descriptionList" :key="list.id">
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
                                      <p class="p text-justify px-0 py-1">{{ list.listing }}</p>
                                    </v-list-item-content>
                                  </v-list-item>
                                </template>
                              </v-list>
                            </v-card>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-container>
                          <div class="px-2">
                            <v-col xs12 v-if="item.youtubeEmbed">
                              <span v-for="video in item.youtubeEmbed" :key="video.id">
                                <youtube
                                  :video-id="video.videoId"
                                  :player-width="video.width"
                                  :player-height="video.height"
                                ></youtube>
                              </span>
                            </v-col>
                          </div>
                        </v-container>

                        <v-row xs1 my-5></v-row>

                        <v-row>
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

                        <v-row xs1 my-5></v-row>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>

              <v-row class="px-2 grey lighten-3">
                <v-col xs12 class="py-10 my-10 align-self-center">
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
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script src="@/views/categories/js/PublicDialog.js"></script>

<style lang="scss" scoped>
@import "@/styles/components.scss";
</style>
