<template>
  <v-container class="home py-0 px-0" fluid>
    <row>
      <v-img
        src="@/assets/home/industrias.jpg"
        max-height="300"
        gradient="to bottom, rgb(13, 71, 161, .8), rgba(0,0,0,.8)"
        class="grey darken-4"
      >
        <v-row class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-bold text-uppercase">¿Quiénes somos?</div>
            <div class="body-1 font-italic">Situaciones especializadas para situaciones y operaciones especiales.</div>
          </v-col>
        </v-row>
      </v-img>
    </row>

    <v-row class="pt-10 pb-5 px-10">
      <v-flex xs12 class="align-self-center">
        <div class="text-justify text-center">
          <p class="headline text-center font-weight-bold">¿Porqué comprar en Spectrum?</p>
        </div>
      </v-flex>

      <v-flex xs12>
        <div class="text-justify text-center px-4 border-texter">
          <span class="text-justify">
            <p>
              Spectrum Tecnología es el mayorista con mayor valor agregado de radiocomunicaciones, accesorios,
              soluciones y sistemas en Venezuela. Con más de 10 años de trayectoria, Spectrum ofrece un verdadero valor
              agregado al proveer asesoría en ventas, servicio técnico, apoyo en mercadeo y logística. Estamos
              comprometidos con la excelencia en servicios, competitividad en precios, disponibilidad de inventario y la
              más amplia variedad de productos en los segmentos profesionales, aficionados marinos y aéreos.
            </p>
          </span>
        </div>
      </v-flex>
    </v-row>

    <v-container fluid>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="primary" :icon="item.icon" fill-dot>
          <v-card :color="item.color">
            <v-card-title class="title">
              <a class="title text--black text-center font-weight-bold">{{ item.title }}</a>
            </v-card-title>
            <v-card-text class="white text--primary text-justify">
              <p class="subtitle">{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-container>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Quienes",
  data() {
    return {
      items: [
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Soporte de Ventas",
          height: "50",
          text:
            "Spectrum Tecnología es el mayorista con mayor valor agregado de radios dos vías, accesorios y sistemas en Venezuela.  Con más de 10 años de experiencia, Spectrum ofrece un verdadero valor agregado al proveer asesoría en ventas, servicio técnico, apoyo en mercadeo y logística. Estamos comprometidos con la excelencia en servicios, competitividad en precios, disponibilidad de inventario y la más amplia variedad de productos en los segmentos profesional, aficionado, marino y aéreo.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "La más amplia cartera de productos",
          height: "50",
          text:
            "Al contar con equipos para los todos los segmentos de radiocomunicación, profesional, aficionado, marino y aéreo, nuestra variedad de productos es la más amplia del país.  Ofrecemos soluciones analógicas y digitales en los protocolos internacionales TETRA, NXDN y DMR, desde sistemas monositio (stand-alone) a redes integradas troncalizadas.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Enfoque en Canales de Distribución",
          height: "50",
          text:
            "Spectrum se dedica a comercializar soluciones a través de su red de distribuidores y revendedores.  Les ofrecemos una única parada donde obtendrá asistencia y experticia especializada la cual le permitirá ofrecer productos y sistemas fácilmente a sus clientes.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Altos niveles de disponibilidad",
          height: "50",
          text:
            "Un alto nivel de capital atado a una alta disponibilidad de productos disponibles nos aseguran un de servicio de calidad a nuestros clientes.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Envíos rápidos y confiables",
          height: "50",
          text:
            "Al ser los envíos de pedidos rápidos y confiables una de nuestras máximas prioridades, contamos con despachos gratis y asegurados de lunes a jueves todas las semanas. *Ciertas condiciones aplican.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Excelencia en Servicio Técnico",
          height: "50",
          text:
            "Nuestro equipo de servicio técnico cuenta con el apoyo directo de todos los fabricantes y por ende están entrenados para proveer soporte de primera línea en todos los productos que vendemos lo cual le garantiza a nuestros distribuidores un servicio óptimo y oportuno.",
        },
        {
          color: "grey lighten-4",
          icon: "adjust",
          title: "Equipo de Trabajo Capacitado",
          height: "50",
          text:
            "Spectrum y sus fabricantes invierten en entrenamientos para todo su equipo y por ende le garantizamos a todos nuestros distribuidores una atención profesional especializada.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components.scss";
</style>
