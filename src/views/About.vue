<template>
  <v-layout row wrap full-width height="800" class="ma-3">
    <v-row>
      <v-col xs12>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15692.31300575364!2d-66.8778348!3d10.4944976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59ee663a98207337!2sSpectrum%20Tecnologia%20C.A.!5e0!3m2!1sen!2sve!4v1584713587120!5m2!1sen!2sve"
          class="video"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12 sm6>
        <v-card class="mx-auto ma-2" color="" dark max-width="400">
          <v-card-title>
            <v-icon large left>
              business
            </v-icon>
            <span class="title font-weight-light">Spectrum Tecnologia C.A.</span>
          </v-card-title>

          <v-card-text>
            <span class="headline font-weight-bold mb-2">Bulevar de Sabana Grande, Caracas 1050, Distrito Capital</span>

            <v-spacer class="pt-2"></v-spacer>
            <v-divider></v-divider>
            <v-spacer class="pt-2"></v-spacer>
            <span class="subheading font-weight-bold white--text pt-2"
              ><v-icon small class="mr-1">mail_outline</v-icon>contacto@spectrum.com.ve</span
            >
            <v-spacer></v-spacer>
            <span class="subheading font-weight-bold white--text"
              ><v-icon small class="mr-1">phone</v-icon>+58 212-7619990</span
            >
            <v-spacer></v-spacer>
            <span class="subheading font-weight-bold white--text"
              ><v-icon small class="mr-1">fab fa-whatsapp</v-icon>+58 424-1271455</span
            >
            <v-spacer></v-spacer>
            <span class="subheading font-weight-bold white--text" alt
              ><v-icon small class="mr-1">fab fa-instagram</v-icon>Instagram.com/spectrumtecnologia</span
            >
            <v-spacer></v-spacer>
            <div class="mt-3 text-center">
              <v-btn small outlined class=" subheading font-weight-bold white--text"
                ><v-icon small class="mr-1">map</v-icon>Ir al mapa</v-btn
              >
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-icon large left>alternate_email</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>contacto@spectrum.com.ve</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "../styles/components.scss";
</style>
