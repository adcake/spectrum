<template>
  <v-container class="home py-0 px-0" fluid>
      
      <row>
        <v-img
          src="@/assets/home/industrias.jpg"
          max-height="300"
          gradient="to bottom, rgb(13, 71, 161, .8), rgba(0,0,0,.8)"
          class="grey darken-4"
        >
        <v-row  class="lightbox white--text pa-2 fill-height">
          <v-col class="align-self-center text-center">
            <div class="text-shadow display-2 font-weight-bold text-uppercase">¿Quiénes somos?</div>
            <div class="body-1 font-italic">Situaciones especializadas para situaciones y operaciones especiales.</div>
          </v-col>
        </v-row>
        </v-img>
      </row>

      
      <v-row class="pt-10 pb-5 px-10">
        <!-- <v-flex xs12 sm5 md4 class="align-self-center">
            <div class="text-justify text-center">
              <p class="text-center font-weight-black text-uppercase " :style="{'font-size': fontSize}">
              Spectrum Tecnología
              </p>
            </div>
        </v-flex> -->

        <v-flex xs12>
          <div class="text-justify text-center px-4 border-texter">
            <span class="text-justify">
              <p>
              Empresa Venezolana líder en el mercado nacional con más de 11 años de trayectoria, especializada en brindar soluciones de seguridad electrónica y radiocomunicaciones, cuenta con representación directa de las marcas de mayor prestigio a nivel mundial, por lo que podemos asegurar la excelente calidad de nuestros productos, la mejor relación precio-valor del mercado y el servicio posventa más confiable del país.
              </p>
            </span>
          </div>
        </v-flex>
      </v-row>

      <v-container fluid>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="primary"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">
                <img :height="item.height" :src="item.src">
              </v-card-title>
              <v-card-text class="white text--primary text-justify">
                <p>{{item.text}}</p>
                <v-btn
                  :color="item.btn"
                  small
                  class="mx-0"
                  outlined
                  
                >
                  Button
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>

    <!-- <v-container fluid class="my-5">
      
      <v-layout row wrap pa-2>
        
        <v-flex xs12 sm12 md12 pa-2>
          <v-card hover :ripple="{ class: 'red--text' }" >
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza4.jpg"
            >
              <v-card-title class="text-shadow display-1 text-center font-weight-black">
                <span class="text-center">Policia</span>
              </v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Organismo Nacionales, Estadales, Municipals y Científicos.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'green--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza7.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Salud</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Hospitales, Centros de Salud y Ambulancias.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn  x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs6 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'yellow--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .3)"
              src="@/assets/home/fuerza5.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Bomberos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                  Protección Civil, Bomberos y Guarda Parques.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

         <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Encubiertos</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Equipos para operaciones encubiertas.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md6 pa-2>
          <v-card hover :ripple="{ class: 'blue--text' }">
            <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8), rgba(0, 0, 0, .5)"
              src="@/assets/home/fuerza8.jpg"
            >
              <v-card-title class="text-shadow display-1 word-break-normal font-weight-black">Fuerza Armada</v-card-title>
              <div class="px-4 pb-2">
                <span class="font-weight-medium">
                Componentes de Mar, Aire y Tierra.
                </span>
              </div>
              <div class="text-center pb-4">
                <v-btn x-small rounded outlined :ripple="{ center: true, class: 'green--text' }"  color="green">Más Info</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-img>
          </v-card>
        </v-flex>

       

      </v-layout>

    </v-container> -->

  </v-container>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Quienes',
  data () {
      return {
        items: [
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/sepura.jpg'),
          height: '50',
          text: 'El Grupo Sepura, líder mundial en el diseño, fabricación y suministro de productos, sistemas y aplicaciones de radio digital desarrollados específicamente para comunicaciones comerciales y de misión crítica. Con soluciones completas TETRA, DMR y LTE permiten a los usuarios en los sectores de seguridad pública, transporte, servicios públicos, petróleo y gas, fabricación, construcción y ocio enfrentar sus desafíos críticos de comunicación.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/icom.jpg'),
          height: '60',
          text: 'Icom America Inc. es parte de Icom Incorporated. Comenzado en 1954 por Tokuzo Inoue en Osaka, Japón, Icom Inc. es una corporación japonesa que cotiza en bolsa; sus acciones se cotizan en las bolsas de valores de Tokio y Osaka. Las raíces de Icom Inc. están en el diseño, la ingeniería y la fabricación de equipos de radio de estado sólido compactos y altamente avanzados para su uso en la industria de radioaficionados (jamón). Desde entonces, la línea de productos de la compañía se ha expandido para incluir equipos y productos de comunicaciones basados en la industria marina, aviónica, móvil terrestre y receptor de banda ancha.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/kenwood.jpg'),
          height: '40',
          text: 'JVCKENWOOD Corporation es un desarrollador y fabricante líder de electrónica de consumo y equipos de comunicaciones. Fundada en los Estados Unidos en 1961, JVCKENWOOD USA es la subsidiaria de ventas más grande de JVCKENWOOD Corporation de Japón y es reconocida por los consumidores y profesionales de la industria por proporcionar productos conocidos por su calidad, rendimiento y valor.'

        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/hytera.jpg'),
          height: '80',
          text: 'Como empresa de alta tecnología, Hytera concentra la mayoría de las propiedades intelectuales, expertos y talentos técnicos en el campo de las comunicaciones PMR. Chen Qingzhou, CEO y presidente de Hytera, también ha estado alentando la innovación. Insiste en que solo si mantenemos la innovación, mantenemos el liderazgo técnico, participamos activamente en la formulación de estándares internacionales, podemos evitar ser restringidos por compañías internacionales.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/duracomm.jpg'),
          height: '70',
          text: 'DuraComm es su fuente completa de fuentes de alimentación conmutadas de CA a CC ultra confiables, convertidores de CC a CC, sistemas de carga y administración de baterías, distribución de energía, generadores de energía eólica y una gran cantidad de accesorios complementarios.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/sanhaix.png'),
          height: '30',
          text: 'Fujian SenHaiX Electronic Technology Co., Ltd se estableció en 2012 y se encuentra en la ciudad natal de la ciudad de radio bidireccional de Quanzhou, provincia de Fujian, China. La compañía anteriormente conocida como Quanzhou Senhaixun Electronic Technology Co., Ltd, es una empresa de alta tecnología especializada en I + D de radio bidireccional, fabricación y servicio postventa.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/wouxon.jpg'),
          height: '80',
          text: 'Quanzhou Wouxun Electronics Co. Ltd. fue fundada en 2000 en la ciudad de Quanzhou, China, con el propósito expreso de desarrollar, fabricar y comercializar las mejores radios y accesorios inalámbricos seriales de dos vías posibles. Los productos Wouxun han sido muy bien recibidos en todo el mundo tanto por su calidad como por su precio. También suministramos productos a otros en la industria de la comunicación y agradecemos sus consultas.'
        },
        {
          color: 'white',
          btn: 'primary',
          icon: 'adjust',
          src: require('@/assets/logo/marcas/maxrad.jpg'),
          height: '80',
          text: 'PCTEL es un proveedor global líder de tecnología inalámbrica, que incluye dispositivos IoT industriales, sistemas de antena y soluciones de prueba y medición especialmente diseñados. Con la confianza de nuestros clientes durante más de 25 años, resolvemos desafíos inalámbricos complejos para ayudar a las organizaciones a mantenerse conectadas, transformarse y crecer.'
        },
      ],
      }
    },
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "1.5em !important";
        case 'sm': return "1.5em !important";
        default: return "1.6em !important";
      }
    }
  },
}


</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}

.border-texter {
  border-bottom: 3px solid #0D47A1;
}
</style>
