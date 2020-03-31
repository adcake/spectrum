<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-model="drawer" app disable-resize-watcher>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Seguridad Pública</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Minería & Petróleo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Comercial & Industrial</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Servicios Públicos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Transporte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <v-app-bar-nav-icon class="hidden-sm-and-up"  @click.stop="drawer = !drawer" />
      <v-avatar tile width="220" max-height="auto">
            <img src="@/assets/logo/spectrum.png">
      </v-avatar>

      <v-spacer></v-spacer>

        <!-- dropdown menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn outlined class="mr-4" depressed color="white" v-on="on" v-ripple="{ center: true }" :ripple="{ class: 'green--text' }">
              <v-icon left color="green">expand_more</v-icon>
              <span>Contacto</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in menu" :key="link.text" router :to="link.route">
              <v-list-item-action class=" mr-4"><v-icon medium class="grey--text text--darken-3">{{ link.icon }}</v-icon></v-list-item-action>
              <v-list-item-title>{{ link.text }}</v-list-item-title> 
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title class="d-none d-sm-flex hidden-sm-and-down">
            <v-tab class="body-2">Seguridad Pública</v-tab>
            <v-tab class="body-2">Minería & Petróleo</v-tab>
            <v-tab class="body-2">Comercial & Industrial</v-tab>
            <v-tab class="body-2">Servicios Públicos</v-tab>
            <v-tab class="body-2">Transporte</v-tab>
          </v-tabs>
        </template>

        <!-- <v-btn outlined depressed color="blue-grey lighten-5" href="login">
          <span>login</span>
          <v-icon right color="blue-grey darken-5">exit_to_app</v-icon>
        </v-btn> -->
    </v-app-bar>

    <v-content>
      <v-container class="px-0 py-0 my-0 mx-0" fullscreen fluid >
        <router-view>

          <!-- <v-row align="center" justify="center">
            <v-col class="shrink">
              <v-tooltip right>

              </v-tooltip>
            </v-col>
          </v-row> -->

        </router-view>
      </v-container>
    </v-content>

    <v-footer
    dark
    padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="grey darken-4">
          <strong class="subheading">Contactanos</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Spectrum Tecnología C.A.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      menu: [
          { icon: 'call', text: 'Contactanos', route: '/Profile' },
          { icon: 'check_box', text: 'Nuestras Marcas', route: '/orders' },
          { icon: 'local_shipping', text: 'Distribuidores', route: '/howto' },
          { icon: 'business', text: 'Quienes Somos', route: '/support' },
          // { icon: 'history', text: 'History', route: '/history' },
        ],

      icons: [
      'fab fa-whatsapp',
      'fab fa-instagram',
      ],

    //   items: [
    //   {
    //     id: 1,
    //     name: 'RADIOCOMUNICACIÓN :',
    //     children: [
    //       { id: 2, name: 'RADIOCOMUNICACIÓN' },
    //       { id: 3, name: 'Chrome : app' },
    //       { id: 4, name: 'Webstorm : app' },
    //     ],
    //   },
    //   {
    //     id: 5,
    //     name: 'Documents :',
    //     children: [
    //       {
    //         id: 6,
    //         name: 'vuetify :',
    //         children: [
    //           {
    //             id: 7,
    //             name: 'src :',
    //             children: [
    //               { id: 8, name: 'index : ts' },
    //               { id: 9, name: 'bootstrap : ts' },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         id: 10,
    //         name: 'material2 :',
    //         children: [
    //           {
    //             id: 11,
    //             name: 'src :',
    //             children: [
    //               { id: 12, name: 'v-btn : ts' },
    //               { id: 13, name: 'v-card : ts' },
    //               { id: 14, name: 'v-window : ts' },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 15,
    //     name: 'Downloads :',
    //     children: [
    //       { id: 16, name: 'October : pdf' },
    //       { id: 17, name: 'November : pdf' },
    //       { id: 18, name: 'Tutorial : html' },
    //     ],
    //   },
    //   {
    //     id: 19,
    //     name: 'Videos :',
    //     children: [
    //       {
    //         id: 20,
    //         name: 'Tutorials :',
    //         children: [
    //           { id: 21, name: 'Basic layouts : mp4' },
    //           { id: 22, name: 'Advanced techniques : mp4' },
    //           { id: 23, name: 'All about app : dir' },
    //         ],
    //       },
    //       { id: 24, name: 'Intro : mov' },
    //       { id: 25, name: 'Conference introduction : avi' },
    //     ],
    //   },
    // ],


    }),

    
  }
</script>