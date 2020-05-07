<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list dense >
        <v-list-item link  to="/">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/categories/publico">
          <v-list-item-content >
            <v-list-item-title>Seguridad Pública</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/categories/critica">
          <v-list-item-content>
            <v-list-item-title>Infraestructuras Críticas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/categories/industrial">
          <v-list-item-content>
            <v-list-item-title>Comercial & Industrial</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/categories/transporte">
          <v-list-item-content>
            <v-list-item-title>Transporte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <router-link to="/">
        <v-avatar tile width="220" max-height="auto"><img src="@/assets/logo/spectrum.png"/></v-avatar>
      </router-link>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            class="mr-4"
            depressed
            color="white"
            v-on="on"
            v-ripple="{ center: true }"
            :ripple="{ class: 'green--text' }"
          >
            <v-icon left color="green">expand_more</v-icon>
            <span>Contacto</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in menu" :key="link.text" router :to="link.route">
            <v-list-item-action class=" mr-4">
              <v-icon medium class="grey--text text--darken-3">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs  align-with-title class="d-none d-md-flex hidden-md-and-down">
          <v-tab v-for="item in menuLinks" :key="item.id" class="body-2" :to='item.route'>{{ item.text }}</v-tab>
        </v-tabs>
      </template>

      <v-btn
        outlined
        depressed
        color="blue-grey lighten-5"
        href="https://wa.me/584241271455?text=Hola%20Spectrum,%20estoy%20interesado%20en%20la%20lista%20de%20precios"
        target="_blank"
      >
        <span>Whatsapp</span>
        <v-icon right color="green">fab fa-whatsapp</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="px-0 py-0 my-0 mx-0" fullscreen fluid>
        <router-view> </router-view>
      </v-container>
    </v-content>

    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in menu"
          :key="link.text"
          :to="link.route"
          color="white"
          text
          rounded
          class="my-2 font-weight-regular "
          small
        >
          {{ link.text }}
        </v-btn>
        <v-btn v-for="icon in icons" :key="icon" small class="mx-2 align-self-center " dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-col class="grey darken-4 lighten-2 py-4 text-center white--text caption" cols="12">
          {{ new Date().getFullYear() }} — <strong>Spectrum Tecnología C.A.</strong> -
          <span class="font-weigth-light">Bulevar de Sabana Grande, Caracas, Distrito Capital, Venezuela.</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    menu: [
      { icon: "call", text: "Contactanos", route: "/about" },
      { icon: "check_box", text: "Nuestras Marcas", route: "/marcas" },
      // { icon: "local_shipping", text: "Distribuidores", route: "/howto" },
      { icon: "business", text: "Quienes Somos", route: "/quienes" }
      // { icon: 'history', text: 'History', route: '/history' },
    ],
    menuLinks: [
      { icon: "", text: "Home", route: "/" },
      { icon: "", text: "Seguridad Pública", route: "/categories/publico" },
      { icon: "", text: "Infraestructuras Críticas", route: "/categories/critica" },
      { icon: "", text: "Comercial & Industrial", route: "/categories/industrial" },
      { icon: "", text: "Transporte", route: "/categories/transporte" },
    ],

    icons: ["fab fa-whatsapp", "fab fa-instagram"]
  })
};
</script>
