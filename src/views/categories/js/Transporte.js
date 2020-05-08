// @ is an alias to /src
import PublicDialog from "@/views/categories/modules/PublicDialog.vue";

export default {
  methods: {
    method(url) {
      this.videoId = this.$youtube.getIdFromURL(url);
      this.startTime = this.$youtube.getTimeFromURL(url);
    }
  },

  components: {
    PublicDialog
  },
  data: () => ({
    dialog: false,

    miningCards: [
      ///Transporte Publico
      {
        title: "Transporte Público",
        subtitle: "Empresas mayoristas, empresas minoristas y empresas comisionistas.",
        src: require("@/assets/home/fuerza14.jpg"),
        titlePop: "Soluciones para las necesidades de su negocio",
        texts: [{}, {}],

        picList1: [{ src: "", text1: "", text2: "" }],

        youtubeEmbed: [
          {
            videoId: "fTsPvd0JPnA",
            width: "100%"
          }
        ],

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") }
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 }
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.png"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/transportation/header.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "El transporte público seguro es una preocupación en todo el mundo,especialmente de responder rápidamente a los accidentes de tráfico y laprotección contra posibles ataques terroristas contra instalaciones detransporte. Además, el aumento de carga de pasajeros y los centros detransportación más complejos requieren un sistema de gestión central parasalvaguardar contra las actividades ilícitas, como el robo de carteras,desorden de conducta, y así sucesivamente.",
            description1: "",
            description2: "",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description3:
              "Cree y mantenga un entorno donde los clientes y el personal se sientan seguros, tanto dentro de su tienda como en los alrededores.",
            description4:
              "Las compañías mineras más grandes del mundo confían en nuestras marcas para su seguridad y funcionamiento.",
            image4: require("@/assets/images/props/radios.png"),
            image4Description: "Terminales Kenwood"
          }
        ],
        picList2: [
          {
            src: require("@/assets/images/props/transportation/picList2_1.jpg"),
            text1: "Hikvision Mobil NVR",
            text2: "DS-96128NI-I24"
          },
          {
            src: require("@/assets/images/props/comercial/picList2_2.jpg"),
            text1: "2MP AcuSense Mini Bullet Network Camera",
            text2: "DS-2CD2026G2-I(U)"
          },
          {
            src: require("@/assets/images/props/comercial/picList2_3.jpg"),
            text1: "2MP AcuSense Varifocal Dome Network Camera",
            text2: "DS-2CD2726G2-IZS"
          },
          {
            src: require("@/assets/images/props/comercial/picList2_4.jpg"),
            text1: "4MP AcuSense Fixed Turret Network Camera",
            text2: "DS-2CD2346G2-I(U)"
          }
        ],

        picList3: [
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_3.jpg"),
            text1: "Pro 1103 Series Card Reader",
            text2: "DS-K1103"
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.png"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250"
          }
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "Estaciones y terminales",
            listing: "Calidad de vídeo HDTV con imagen estable a pesar de las vibraciones y el movimiento del vehículo."
          },
          {
            iconListing: "filter_hdr",
            preListing: "A bordo de vehículos",
            listing: "Acceso remoto a vídeo y sonido en vivo desde cualquier tren o autobús."
          },
          {
            iconListing: "signal_cellular_alt",
            preListing: "Sala de efectivo",
            listing:
              "Integración fácil con el sistema de seguridad global para estaciones, terminales e infraestructuras críticas."
          },
          {
            iconListing: "radio_button_checked",
            preListing: "Seguimiento de FLotas",
            listing:
              "Integración con el GPS, lo que hace posible seguir un tren o un autobús en un mapa digital, mientras se ve un vídeo en vivo de las cámaras integradas."
          },
          {
            iconListing: "dvr",
            preListing: "Adaptabilidad",
            listing: "Capacidades de creación de imágenes avanzadas: gestionan cualquier condición de iluminación."
          },
          {
            iconListing: "dvr",
            preListing: "Transferencia de Datos",
            listing: "Tecnología inteligente de ahorro de ancho de banda: capture más detalles con menos ancho de band."
          }
        ]
      },

      ///Aviacion
      {
        title: "Aviación",
        subtitle: "Maximización de la seguridad y aumento del rendimiento.",
        src: require("@/assets/home/fuerza13.jpg"),
        titlePop: "Infraestructuras Críticas.",
        texts: [{}, {}],

        picList1: [
          { src: require("@/assets/images/props/aviation/radio0.png"), text1: "Icom", text2: "A25c" },
          { src: require("@/assets/images/props/aviation/radio1.png"), text1: "Kenwood", text2: "TH-D74e" },
          { src: require("@/assets/images/props/aviation/radio2.png"), text1: "Sepura", text2: "SC21" },
          { src: require("@/assets/images/props/aviation/radio3.png"), text1: "Hytera", text2: "PD782I" }
        ],

        youtubeEmbed: [
          {
            videoId: "",
            width: "100%"
          }
        ],

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") }
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 }
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.png"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/transportation/headerAviation.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "La presión para mover pasajeros y equipaje por un aeropuerto ocupado de manera rápida, eficiente y segura es mayor que nunca. Esta presión viene con una dependencia de una infraestructura de comunicaciones completa y confiable, y una poderosa red de datos que puede automatizar y agilizar procesos esenciales.",
            descriptionListing: [
              {
                listingDes:
                  "Comunicaciones radio TETRA y LTE. Equipamiento para infraestructuras de red de transporte"
              },
              {
                listingDes:
                  "Equipos radio embarcados."
              },
              {
                listingDes:
                  "Consolas embarcadas para interfaz de usuario."
              },
              {
                listingDes:
                  "Integración con soluciones de megafonía e interfonía."
              },
              {
                listingDes:
                  "Radios móviles y portátiles."
              },
              {
                listingDes:
                  "Soluciones CCTV en tiempo real para trenes e infraestructura de tierra como estaciones, andenes, vías, etc."
              },
              {
                listingDes:
                  "Sistemas radio para soportar comunicaciones de aplicaciones de señalización ETCS, CBTC, PTC."
              },
              {
                listingDes:
                  "Aplicaciones especialmente diseñadas para centros de control de transporte: CeCo-TRANS."
              },
              {
                listingDes:
                  "Unidades de despacho para estaciones y centros de control."
              },
            ],
            description1: 
              "Los aerópuertos deben limitar el riesgo de intrusiones a través de la implantación de soluciones adecuadas, como sistemas físicos y patrullas de protección, y, posiblemente, del uso adicional de sistemas electrónicos. Los métodos empleados para proteger las zonas restringidas deben tener en cuenta: los requisitos operativos del aeródromo; la topografía del terreno; las condiciones climáticas específicas; y las restricciones medioambientales.",
            description2:
              "Las Soluciones de Spectrum ofrece una excelente cobertura, seguridad y confiabilidad en una plataforma diseñada para una implementación eficiente y escalabilidad rentable. Con una solución de vigilancia flexible y preparada para el futuro que permite crecer al ritmo de sus necesidades. Podrá beneficiarse de una amplia gama de funciones que le ayudarán a mejorar el rendimiento general, como:",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description2Listing: [
              {
                listingDes:
                  "Alertas automáticas cuando alguien accede al perímetro o área restringida (día y noche)"
              },
              {
                listingDes:
                  "Imágenes de vídeo HDTV de alta calidad que facilitan la identificación y la investigación de incidentes."
              },
              {
                listingDes:
                  "Inteligencia integrada que permite el conteo de personas y la detección de movimiento"
              },
              {
                listingDes:
                  "Acceso a la red para visualizar vídeos en vivo y grabados, lo que permite que varias personas autorizadas puedan ver vídeos al mismo tiempo"
              },
            ],
            description3:
              "En muchos aeropuertos, los codificadores de vídeo digital han representado un primer paso en el mundo de la videovigilancia basada en IP.",
            description4:
              "Esto les ha permitido aprovechar las inversiones realizadas en cámaras analógicas de CCTV y, al mismo tiempo, sacar partido a las numerosas ventajas que ofrece la tecnología de vídeo en red.",
            image4: require("@/assets/images/props/comercial/image2.jpg"),
            image4Description: "Face Recognition Module DS-K5671-Z"
          }
        ],

        picList2: [
          {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
          {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
          {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
          {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
        ],
        // picList2: [
        //   {
        //     src: require("@/assets/images/props/comercial/picList2_1.jpg"),
        //     text1: "Hikvision 128-ch 4U 4K Super NVR",
        //     text2: "DS-96128NI-I24"
        //   },
        //   {
        //     src: require("@/assets/images/props/comercial/picList2_2.jpg"),
        //     text1: "2MP AcuSense Mini Bullet Network Camera",
        //     text2: "DS-2CD2026G2-I(U)"
        //   },
        //   {
        //     src: require("@/assets/images/props/comercial/picList2_3.jpg"),
        //     text1: "2MP AcuSense Varifocal Dome Network Camera",
        //     text2: "DS-2CD2726G2-IZS"
        //   },
        //   {
        //     src: require("@/assets/images/props/comercial/picList2_4.jpg"),
        //     text1: "4MP AcuSense Fixed Turret Network Camera",
        //     text2: "DS-2CD2346G2-I(U)"
        //   }
        // ],

        picList3: [
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W"
          },
          {
            src: require("@/assets/images/props/comercial/picList2_1.jpg"),
            text1: "Hikvision 128-ch 4U 4K Super NVR",
            text2: "DS-96128NI-I24"
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.png"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250"
          }
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "Seguro",
            listing:
              "La infraestructura TETRA de Sepura ofrece una excelente cobertura, seguridad y confiabilidad en una plataforma diseñada para una implementación eficiente y escalabilidad rentable"
          },
          {
            iconListing: "filter_hdr",
            preListing: "FLexibilidad",
            listing:
              "Integración completa con otros sistemas aeroportuarios existentes."
          },
          {
            iconListing: "signal_cellular_alt",
            preListing: "Cobertura Completa",
            listing:
              "Cobertura total en todos los edificios e instalaciones del aeropuerto, incluidas pistas, pasillos, áreas de pasajeros, áreas de carga, hangares, áreas subterráneas y estacionamientos."
          },
          
        ]
      },

      ///Maritimo
      {
        title: "Transporte Marítimo",
        subtitle: "Desde la carga hasta la descarga, mantenga su puerto comunicando",
        src: require("@/assets/home/fuerza15.jpg"),
        titlePop: "Infraestructuras Críticas.",
        texts: [{}, {}],

        picList1: [
          { src: require("@/assets/images/props/aviation/radio0.png"), text1: "Icom", text2: "A25c" },
          { src: require("@/assets/images/props/aviation/radio1.png"), text1: "Kenwood", text2: "TH-D74e" },
          { src: require("@/assets/images/props/aviation/radio2.png"), text1: "Sepura", text2: "SC21" },
          { src: require("@/assets/images/props/aviation/radio3.png"), text1: "Hytera", text2: "PD782I" }
        ],

        youtubeEmbed: [
          {
            videoId: "",
            width: "100%"
          }
        ],

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") }
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 }
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.png"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/transportation/headerMaritine.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "Las soluciones de Sepura aseguran que los operadores de puertos y muelles cumplan con los desafíos de comunicación que enfrentan diariamente. La seguridad del personal sigue siendo de máxima prioridad con características como hombre caído, trabajador solitario y rastreo GPS, maximizando la seguridad en todo momento. Con una amplia gama de condiciones operativas y climáticas, los terminales y accesorios líderes del mercado altamente robustos y robustos de Sepura mantienen las comunicaciones fluyendo donde otros fallan.",
            descriptionListing: [
              {
                listingDes:
                  "Comunicaciones radio TETRA y LTE. Equipamiento para infraestructuras de red de transporte"
              },
              {
                listingDes:
                  "Equipos radio embarcados."
              },
              {
                listingDes:
                  "Consolas embarcadas para interfaz de usuario."
              },
              {
                listingDes:
                  "Integración con soluciones de megafonía e interfonía."
              },
              {
                listingDes:
                  "Radios móviles y portátiles."
              },
              {
                listingDes:
                  "Soluciones CCTV en tiempo real para trenes e infraestructura de tierra como estaciones, andenes, vías, etc."
              },
              {
                listingDes:
                  "Sistemas radio para soportar comunicaciones de aplicaciones de señalización ETCS, CBTC, PTC."
              },
              {
                listingDes:
                  "Aplicaciones especialmente diseñadas para centros de control de transporte: CeCo-TRANS."
              },
              {
                listingDes:
                  "Unidades de despacho para estaciones y centros de control."
              },
            ],
            description1: 
              "Los aerópuertos deben limitar el riesgo de intrusiones a través de la implantación de soluciones adecuadas, como sistemas físicos y patrullas de protección, y, posiblemente, del uso adicional de sistemas electrónicos. Los métodos empleados para proteger las zonas restringidas deben tener en cuenta: los requisitos operativos del aeródromo; la topografía del terreno; las condiciones climáticas específicas; y las restricciones medioambientales.",
            description2:
              "Las Soluciones de Spectrum ofrece una excelente cobertura, seguridad y confiabilidad en una plataforma diseñada para una implementación eficiente y escalabilidad rentable. Con una solución de vigilancia flexible y preparada para el futuro que permite crecer al ritmo de sus necesidades. Podrá beneficiarse de una amplia gama de funciones que le ayudarán a mejorar el rendimiento general, como:",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description2Listing: [
              {
                listingDes:
                  "Alertas automáticas cuando alguien accede al perímetro o área restringida (día y noche)"
              },
              {
                listingDes:
                  "Imágenes de vídeo HDTV de alta calidad que facilitan la identificación y la investigación de incidentes."
              },
              {
                listingDes:
                  "Inteligencia integrada que permite el conteo de personas y la detección de movimiento"
              },
              {
                listingDes:
                  "Acceso a la red para visualizar vídeos en vivo y grabados, lo que permite que varias personas autorizadas puedan ver vídeos al mismo tiempo"
              },
            ],
            description3:
              "En muchos aeropuertos, los codificadores de vídeo digital han representado un primer paso en el mundo de la videovigilancia basada en IP.",
            description4:
              "Esto les ha permitido aprovechar las inversiones realizadas en cámaras analógicas de CCTV y, al mismo tiempo, sacar partido a las numerosas ventajas que ofrece la tecnología de vídeo en red.",
            image4: require('@/assets/images/props/telecommunication/image2.jpg'),
            image4Description: "Hikvision 2MP 23X DarkFighter IR Network Positioning System"
          }
        ],

        picList2: [
          {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
          {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
          {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
          {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
        ],

        picList3: [
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W"
          },
          {
            src: require("@/assets/images/props/comercial/picList2_1.jpg"),
            text1: "Hikvision 128-ch 4U 4K Super NVR",
            text2: "DS-96128NI-I24"
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.png"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250"
          }
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "COMUNICACIONES CONSTANTES",
            listing:
              "Mantenga la comunicación fluyendo donde otros sistemas fallarían"
          },
          {
            iconListing: "filter_hdr",
            preListing: "DE CONFIANZA",
            listing:
              "Terminales robustos y resistentes del mercado."
          },
          {
            iconListing: "signal_cellular_alt",
            preListing: "SEGURIDAD AVANZADA",
            listing:
              "Maximice la seguridad de los trabajadores en todo momento."
          },
          
        ]
      },
      
      ///Trafico
      {
        title: "Tráfico",
        subtitle: "Nuevas posibilidades en entornos de transporte.",
        src: require("@/assets/home/fuerza16.jpg"),
        titlePop: "Infraestructuras Críticas.",
        texts: [{}, {}],

        picList1: [
          { src:"", text1: "", text2: "" },
        ],

        youtubeEmbed: "",

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") }
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 }
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.png"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/transportation/headerTraffic.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "Los accidentes automovilísticos que resultan en lesiones, daños a la propiedad e incluso la pérdida de vidas son problemas críticos para las poblaciones de todo el mundo. Las tendencias actuales sugieren que este seguirá siendo el caso en los próximos años.",
            descriptionListing: [
              {
                listingDes:
                  ""
              },
            ],
            description1: 
              "Según la Organización Mundial de la Salud (OMS), los accidentes de tránsito cobran más de 1,35 millones de vidas cada año y causan hasta 50 millones de lesiones en todo el mundo. Estas estadísticas podrían ser el resultado de exceso de velocidad, conducción distraída o falta de cascos para los conductores de dos ruedas. Un hecho triste es que la mayoría de estas muertes y lesiones se pueden prevenir. ",
            description2:
              "Además de proteger sus espacios de trabajo, las cámaras de red son una herramienta útil para aumentar la eficiencia global de la producción y crear un entorno de trabajo seguro para los empleados. La integración del sistema de cámaras en el sistema de producción le ofrece la posibilidad de recibir de forma remota imágenes en vivo a través de la conexión de red, lo que permite:",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description2Listing: [
              {
                listingDes:
                  ""
              },
            ],
            description3:
              "A medida que las poblaciones de la ciudad crecen, también aumentan las cargas en sus sistemas de tráfico. Se necesita desesperadamente una solución que mejore la agilidad y elimine la complejidad de la gestión del tráfico, con una mano de obra reducida y una mayor eficiencia. El punto clave sigue siendo que todos se muevan de manera segura y pacífica en cada tipo de vehículo: automóviles, autobuses, trenes, metro, motocicletas, bicicletas y a pie.",
            description4:
              "La solución de tráfico inteligente probada en el campo por nuestras marcas aborda estos problemas de tráfico, y más, con un doble enfoque.",
            image4: require("@/assets/images/props/comercial/image2.jpg"),
            image4Description: "Face Recognition Module DS-K5671-Z"
          }
        ],
        picList2: [
          {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
          {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
          {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
          {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
        ],

        picList3: [
          {
            src: require("@/assets/images/props/traffic/picList1.jpg"),
            text1: "Smart Monitoring Unit",
            text2: "iDS-TCM403-AI"
          },
          {
            src: require("@/assets/images/props/traffic/picList2.jpg"),
            text1: "High Performance ANPR Camera",
            text2: "iDS-TCV300-AE"
          },
          {
            src: require("@/assets/images/props/traffic/picList3.jpg"),
            text1: "High-precision narrow band radar",
            text2: "CSR-IN(P)"
          },
          {
            src: require("@/assets/images/props/traffic/picList4.jpg"),
            text1: "IR Burst Light",
            text2: "SL-1211-2I (850nm)"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W"
          },
          {
            src: require("@/assets/images/props/comercial/picList3_3.jpg"),
            text1: "Pro 1103 Series Card Reader",
            text2: "DS-K1103"
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.png"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250"
          }
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "Detección de infracción de tráfico",
            listing:
              "La detección de violaciones en tiempo real, sin embargo, es solo el primer paso. Aún más importante, una violación debe ser seguida por la emisión oportuna de citas a los conductores que violaron las normas y reglamentos de tránsito. El aviso y la multa por estas infracciones responsabilizan a los conductores, fomentan la conducción responsable y facilitan la aplicación de la ley, evitan accidentes de tráfico y mejoran la eficiencia del transporte a largo plazo."
          },
          {
            iconListing: "filter_hdr",
            preListing: "Optimización del flujo de tráfico",
            listing:
              "Los datos de tráfico de las intersecciones y los puntos de control también convergen en el centro de comando de tráfico para una conciencia situacional integral. Los operadores de gestión del tráfico podrían decidir qué información de orientación se mostrará en las pantallas de carretera."
          },
        ]
      }
    ],

    header: [
      {
        headerTitle: "Nuevas posibilidades en entornos de transporte.",
        header:
          "Muchas administraciones y empresas ya han descubierto los beneficios de las exclusivas ventajas para el transporte de nuestras marcas. Proporciona imágenes nítidas, tanto en tiempo real como en grabaciones. Permite que cualquier persona autorizada acceda a la información desde cualquier parte y en cualquier momento. Activa la función de alertas y alarmas automáticas en caso de incidentes. Y crea una plataforma de videovigilancia rentable, flexible y adaptada al futuro."
      }
    ],
    subHeader: [
      {
        imageHeader: "",
        subHeaderTitle: "",
        subHeaderIcon: "",
        subHeader:
          ""
      },
    ],

    radiosEquip: [
      { src: "" },
    ],

    logoTechs: [
      { src: "" },
    ],

    techs: [
      { src: "", text: "" },
    ],

    sectorOption: [
      {
        icon: "",
        text:
          ""
      },
    ],

    itemsSector: [
      {
        src: "",
        icon: "",
        text: ""
      }
    ],
    itemsTransporte: [
      { title: "Comunicaciones de voz,", text: " Crear un entorno de transportes más seguro." },
      {
        title: "Transmisión de datos críticos.",
        text: " Servicios de mensajería entre unidades o desde/para el centro de control."
      },
      {
        title: "Posicionamiento GPS y localización automática de vehículos (AVL). ",
        text: "Reducir los costes provocados por actos de vandálicos."
      },
      {
        title: "Centro de control para la gestión y coordinación centralizada,",
        text: "Tomar las decisiones adecuadas frente a cualquier incidente."
      },
      {
        title: "Acceso a vídeo móvil y fijo desde el centro de control,",
        text: "Reducir el tiempo de respuesta de incidentes."
      }
    ],

    itemsSpec: [{ title: "" }]
  }),

  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2em !important";
        case "sm":
          return "1.3em !important";
        default:
          return "1.5em !important";
      }
    }
  }
};
