// @ is an alias to /src
import PublicDialog from "@/views/categories/modules/PublicDialog.vue";

export default {
  methods: {
    method(url) {
      this.videoId = this.$youtube.getIdFromURL(url);
      this.startTime = this.$youtube.getTimeFromURL(url);
    },
  },

  components: {
    PublicDialog,
  },
  data: () => ({
    dialog: false,

    miningCards: [
      ///COmercial
      {
        title: "Sector Comercial",
        subtitle: "Empresas mayoristas, empresas minoristas y empresas comisionistas.",
        src: require("@/assets/home/industrias8.jpg"),
        titlePop: "Soluciones para las necesidades de su negocio",
        texts: [{}, {}],

        picList1: [
          { src: require("@/assets/images/props/comercial/radio0.jpg"), text1: "Sepura", text2: "SC21" },
          { src: require("@/assets/images/props/comercial/radio4.jpg"), text1: "Senhaix", text2: " SenHaiX 1410" },
          { src: require("@/assets/images/props/comercial/radio2.jpg"), text1: "Icom", text2: "F1000/F2000" },
          { src: require("@/assets/images/props/comercial/radio3.jpg"), text1: "Kenwood", text2: "TK-D240" },
        ],

        youtubeEmbed: [
          {
            videoId: "nl0i-6LgRec",
            width: "100%",
          },
        ],

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") },
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.jpg"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/comercial/header.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "Atraiga clientes, optimice la distribución de la tienda, evite hurtos, reduzca las colas en la caja, gestione los períodos de compras más ajetreados... son muchas las preocupaciones a las que se enfrenta un minorista. Las tecnologías inteligentes están diseñadas para brindarle asistencia y proporcionar al consumidor una experiencia mejor, más rápida y más segura al comprar. Encuentre las oportunidades para aumentar sus ingresos y dar forma al futuro de su tienda minorista, todo en tiempo real.",
            description1:
              "Evite las pérdidas antes de que se produzcan con soluciones más inteligentes que hacen frente al robo en tiendas, a las pérdidas internas y al comportamiento sospechoso en tiempo real.",
            description2:
              "Tome decisiones con la información recabada para mejorar la experiencia del cliente a través de una asignación optimizada de personal, los diseños de tiendas mejorados y las campañas proactivas en la tienda, cada hora de cada día hábil.",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description3:
              "Cree y mantenga un entorno donde los clientes y el personal se sientan seguros, tanto dentro de su tienda como en los alrededores.",
            description4:
              "Las compañías mineras más grandes del mundo confían en nuestras marcas para su seguridad y funcionamiento.",
            image4: require("@/assets/images/props/comercial/image2.jpg"),
            image4Description: "Face Recognition Module DS-K5671-Z",
          },
        ],
        picList2: [
          {
            src: require("@/assets/images/props/comercial/picList2_1.jpg"),
            text1: "Hikvision 128-ch 4U 4K Super NVR",
            text2: "DS-96128NI-I24",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_2.jpg"),
            text1: "2MP AcuSense Mini Bullet Network Camera",
            text2: "DS-2CD2026G2-I(U)",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_3.jpg"),
            text1: "2MP AcuSense Varifocal Dome Network Camera",
            text2: "DS-2CD2726G2-IZS",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_4.jpg"),
            text1: "4MP AcuSense Fixed Turret Network Camera",
            text2: "DS-2CD2346G2-I(U)",
          },
        ],

        picList3: [
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint",
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W",
          },
          {
            src: require("@/assets/images/props/comercial/picList3_3.jpg"),
            text1: "Pro 1103 Series Card Reader",
            text2: "DS-K1103",
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.jpg"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250",
          },
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "Entradas y salidas",
            listing:
              "Manténgase informado de quién entra y sale de sus instalaciones y asegúrese de que sus clientes y su personal se sienten bienvenidos y protegidos. Tenga un control total sobre las entregas desatendidas, así como sobre todas las entradas y salidas en cualquier momento del día. Asegúrese de que ningún objeto bloquea las salidas de emergencia y tome medidas ante comportamientos sospechosos o agresivos. Haga que sus clientes, contratistas y personal se sientan seguros al acercarse y salir de su tienda.",
          },
          {
            iconListing: "filter_hdr",
            preListing: "Área de venta",
            listing:
              "Mantenga sus instalaciones seguras y evite resbalones y caídas u otros accidentes. Reciba notificaciones automáticas en caso de comportamientos agresivos, envíe alertas inmediatas y avise a los guardias de seguridad en tiempo real. Detecte a los merodeadores y ayude a prevenir delitos como actos vandálicos, asegurándose de que el entorno de su tienda sea seguro y de que sus clientes se sientan protegidos. Cuente con una cobertura completa de los incidentes y con un análisis y una documentación de búsqueda sencillos que reduzcan el tiempo y los costes de investigación.",
          },
          {
            iconListing: "signal_cellular_alt",
            preListing: "Sala de efectivo",
            listing:
              "Asegúrese de que únicamente su personal y las personas autorizadas tengan acceso a su sala de efectivo, capturando en tiempo real la entrada de personas. Reconocer, identificar o verificar personal autorizado.",
          },
          {
            iconListing: "radio_button_checked",
            preListing: "Estacionamientos",
            listing:
              "Haga que sus clientes y su personal se sientan seguros al llegar y al salir de su aparcamiento, tanto durante el día como por la noche. Capture automáticamente imágenes de la matrícula de los vehículos que acceden a sus instalaciones y realice las acciones adecuadas, como abrir una puerta, añadir un cargo o generar una alerta.",
          },
          {
            iconListing: "dvr",
            preListing: "Despacho",
            listing:
              "Proteja sus instalaciones y rastree las mercancías de sus proveedores, para saber exactamente dónde se encuentra un paquete en cada etapa de su viaje. Proteja sus entradas y salidas, antes, durante y después del horario comercial, otorgando permisos y controlando el acceso de los diferentes proveedores a sus instalaciones. Evite los dobles accesos cuando el personal accede a sus instalaciones.",
          },
          {
            iconListing: "dvr",
            preListing: "Almacenamiento y carga",
            listing:
              "Asegure las entradas de las puertas en caso de entregas sin operario con códigos QR y otras aplicaciones de control de acceso. Capture automáticamente imágenes de las matrículas y tome las medidas adecuadas, como abrir una puerta para vehículos autorizados o registrar automáticamente los vehículos de reparto. Haga un seguimiento de personas y vehículos y active una alarma y/o mensajes pregrabados si han estado en un área no autorizada predefinida durante demasiado tiempo.",
          },
        ],
      },

      ///Industrial
      {
        title: "Sector Industrial",
        subtitle: "Empresas productoras, manufactureras y del sector agropecuarias.",
        src: require("@/assets/home/industrias7.jpg"),
        titlePop: "Infraestructuras Críticas.",
        texts: [{}, {}],

        picList1: [
          { src: require("@/assets/images/props/comercial/radio0.jpg"), text1: "Sepura", text2: "SC21" },
          { src: require("@/assets/images/props/comercial/radio4.jpg"), text1: "Senhaix", text2: " SenHaiX 1410" },
          { src: require("@/assets/images/props/comercial/radio2.jpg"), text1: "Icom", text2: "F1000/F2000" },
          { src: require("@/assets/images/props/comercial/radio3.jpg"), text1: "Kenwood", text2: "TK-D240" },
        ],

        youtubeEmbed: [
          {
            videoId: "nl0i-6LgRec",
            width: "100%",
          },
        ],

        brandLogos: [
          { src: require("@/assets/logo/brands/brand2.gif") },
          { src: require("@/assets/logo/brands/brand5.gif") },
          { src: require("@/assets/logo/brands/brand9.gif") },
          { src: require("@/assets/logo/brands/brand4.gif") },
          { src: require("@/assets/logo/brands/brand10.gif") },
          { src: require("@/assets/logo/brands/brand6.gif") },
          { src: require("@/assets/logo/brands/brand7.gif") },
          { src: require("@/assets/logo/brands/brand8.gif") },
        ],

        publicSafetyInfo: [
          { title: "Pre-fab homes", src: "https://cdn.vuetifyjs.com/images/cards/house.jpg", flex: 12 },
          { title: "Favorite road trips", src: "https://cdn.vuetifyjs.com/images/cards/road.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
          { title: "Best airlines", src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg", flex: 6 },
        ],
        description: [
          {
            src: require("@/assets/images/props/publicsafety/radioPolice0.jpg"),
            title: "Protección de sus propiedades y beneficios",
            headerPic: "",
            imageHeaderPic: require("@/assets/images/props/industrial/header.jpg"),
            subtitle: "Soluciones comerciales",
            description:
              "A menudo, en las fábricas, almacenes e instalaciones de producción hay valiosas materias primas y mercancías que necesitan vigilancia y protección en todo momento. Al combinar la tecnología de una cámara IP con los detectores de movimiento que utilizan tecnología de radar, puede crear una solución de vigilancia diseñada para sus necesidades de seguridad y beneficiarse de funciones como:",
            descriptionListing: [
              {
                listingDes:
                  "Evite las pérdidas antes de que se produzcan con soluciones más inteligentes que hacen frente al robo en tiendas, a las pérdidas internas y al comportamiento sospechoso en tiempo real.",
              },
              {
                listingDes:
                  "Notificaciones automáticas en tiempo real cuando alguien entra en un perímetro o área restringida, con confirmación visual y localización de objeto.",
              },
              {
                listingDes:
                  "Soluciones flexibles y fáciles de utilizar con protección contra el vandalismo, cámaras robustas y detectores de movimiento para exteriores.",
              },
            ],
            description1: "",
            description2:
              "Además de proteger sus espacios de trabajo, las cámaras de red son una herramienta útil para aumentar la eficiencia global de la producción y crear un entorno de trabajo seguro para los empleados. La integración del sistema de cámaras en el sistema de producción le ofrece la posibilidad de recibir de forma remota imágenes en vivo a través de la conexión de red, lo que permite:",
            image2: require("@/assets/images/props/comercial/image1.jpg"),
            image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones",
            description2Listing: [
              {
                listingDes:
                  "Supervisar las líneas de producción de forma remota, inspeccionar y comprobar visualmente que las funciones y procesos funcionan correctamente.",
              },
              {
                listingDes:
                  "Garantizar que se siguen las reglas y los procesos de seguridad y que las herramientas y los equipos se gestionan correctamente.",
              },
              { listingDes: "Proporcionar solución de problemas y asistencia remota con mantenimiento y soporte." },
            ],
            description3:
              "Cree y mantenga un entorno donde los clientes y el personal se sientan seguros, tanto dentro de su tienda como en los alrededores.",
            description4:
              "Las compañías mineras más grandes del mundo confían en nuestras marcas para su seguridad y funcionamiento.",
            image4: require("@/assets/images/props/comercial/image2.jpg"),
            image4Description: "Face Recognition Module DS-K5671-Z",
          },
        ],
        picList2: [
          {
            src: require("@/assets/images/props/comercial/picList2_1.jpg"),
            text1: "Hikvision 128-ch 4U 4K Super NVR",
            text2: "DS-96128NI-I24",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_2.jpg"),
            text1: "2MP AcuSense Mini Bullet Network Camera",
            text2: "DS-2CD2026G2-I(U)",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_3.jpg"),
            text1: "2MP AcuSense Varifocal Dome Network Camera",
            text2: "DS-2CD2726G2-IZS",
          },
          {
            src: require("@/assets/images/props/comercial/picList2_4.jpg"),
            text1: "4MP AcuSense Fixed Turret Network Camera",
            text2: "DS-2CD2346G2-I(U)",
          },
        ],

        picList3: [
          {
            src: require("@/assets/images/props/comercial/picList3_1.jpg"),
            text1: "Control de acceso",
            text2: "K1A802 Value Series Fingerprint",
          },
          {
            src: require("@/assets/images/props/comercial/picList3_2.jpg"),
            text1: "4MP 4X DarkFighter IR Network Speed Dome",
            text2: "DS-2DE2A404IW-DE3/W",
          },
          {
            src: require("@/assets/images/props/comercial/picList3_3.jpg"),
            text1: "Pro 1103 Series Card Reader",
            text2: "DS-K1103",
          },
          {
            src: require("@/assets/images/props/mining/picList3_4.jpg"),
            text1: "Perimeter Defender",
            text2: "DS-PI-Q250",
          },
        ],

        descriptionListTitle: [{ title: "Comunicaciones avanzadas e intrinsicamente seguras" }],
        descriptionList: [
          {
            iconListing: "language",
            preListing: "Entradas y salidas",
            listing:
              "Manténgase informado de quién entra y sale de sus instalaciones y asegúrese de que sus clientes y su personal se sienten bienvenidos y protegidos. Tenga un control total sobre las entregas desatendidas, así como sobre todas las entradas y salidas en cualquier momento del día. Asegúrese de que ningún objeto bloquea las salidas de emergencia y tome medidas ante comportamientos sospechosos o agresivos. Haga que sus clientes, contratistas y personal se sientan seguros al acercarse y salir de su tienda.",
          },
          {
            iconListing: "filter_hdr",
            preListing: "Área de venta",
            listing:
              "Mantenga sus instalaciones seguras y evite resbalones y caídas u otros accidentes. Reciba notificaciones automáticas en caso de comportamientos agresivos, envíe alertas inmediatas y avise a los guardias de seguridad en tiempo real. Detecte a los merodeadores y ayude a prevenir delitos como actos vandálicos, asegurándose de que el entorno de su tienda sea seguro y de que sus clientes se sientan protegidos. Cuente con una cobertura completa de los incidentes y con un análisis y una documentación de búsqueda sencillos que reduzcan el tiempo y los costes de investigación.",
          },
          {
            iconListing: "signal_cellular_alt",
            preListing: "Sala de efectivo",
            listing:
              "Asegúrese de que únicamente su personal y las personas autorizadas tengan acceso a su sala de efectivo, capturando en tiempo real la entrada de personas. Reconocer, identificar o verificar personal autorizado.",
          },
          {
            iconListing: "radio_button_checked",
            preListing: "Estacionamientos",
            listing:
              "Haga que sus clientes y su personal se sientan seguros al llegar y al salir de su aparcamiento, tanto durante el día como por la noche. Capture automáticamente imágenes de la matrícula de los vehículos que acceden a sus instalaciones y realice las acciones adecuadas, como abrir una puerta, añadir un cargo o generar una alerta.",
          },
          {
            iconListing: "dvr",
            preListing: "Despacho",
            listing:
              "Proteja sus instalaciones y rastree las mercancías de sus proveedores, para saber exactamente dónde se encuentra un paquete en cada etapa de su viaje. Proteja sus entradas y salidas, antes, durante y después del horario comercial, otorgando permisos y controlando el acceso de los diferentes proveedores a sus instalaciones. Evite los dobles accesos cuando el personal accede a sus instalaciones.",
          },
          {
            iconListing: "dvr",
            preListing: "Almacenamiento y carga",
            listing:
              "Asegure las entradas de las puertas en caso de entregas sin operario con códigos QR y otras aplicaciones de control de acceso. Capture automáticamente imágenes de las matrículas y tome las medidas adecuadas, como abrir una puerta para vehículos autorizados o registrar automáticamente los vehículos de reparto. Haga un seguimiento de personas y vehículos y active una alarma y/o mensajes pregrabados si han estado en un área no autorizada predefinida durante demasiado tiempo.",
          },
        ],
      },
    ],

    header: [
      {
        headerTitle: "Situaciones especializadas para el sector privado.",
        header:
          "La seguridad privada es un valor estratégico para cualquier industria. La situación aislada de las instalaciones industriales, su enorme extensión y perímetro y el elevado valor de materiales y productos en stock son algunos de los factores que determinan como se debe plantear un servicio de seguridad para las empresas industriales. El objetivo del servicio es garantizar la continuidad del proceso productivo, de modo que la empresa pueda dedicarse a su auténtico negocio, dejando la seguridad en manos de los especialistas.",
      },
    ],
    subHeader: [
      {
        imageHeader: require("@/assets/images/props/industrial/header2.jpg"),
        subHeaderTitle: "Protección Perimetral",
        subHeaderIcon: "verified_user",
        subHeader:
          "Intrusión, interrupción, lesión. Estas son las amenazas principales para la productividad, la rentabilidad y el bienestar de los empleados en sus instalaciones. Las soluciones de infraestructura crítica de nuestras marcas le permiten abordar las tres de forma completa y rentable, con un único sistema integrado. \r\n Nuestros sistemas de vigilancia inteligentes, abiertos y basados en IP están diseñados para que todas las partes puedan comunicarse entre sí. Están preparados para el futuro, son escalables y fáciles de integrar con otros sistemas. Además, lo más importante es que habilitan la supervisión de varios sitios de forma remota, desde una única sala de control.",
      },
      {
        // imageHeader: require('@/assets/images/props/oilmining/header3.jpg'),
        subHeaderTitle: "Proteja sus instalaciones críticas de intrusiones",
        subHeaderIcon: "warning",
        subHeader:
          "Spectrum Tecnología, una solución de protección frente a intrusiones en sus instalaciones de forma fiable. Cámaras visuales y térmicas con análisis incorporados combinados con seguimiento por radar para alertar a los operadores de la sala de control. Activan automáticamente advertencias pregrabadas a los posibles intrusos, que pueden ser identificados mediante cámaras PTZ. Dentro y alrededor del núcleo crítico, nuestros sistemas de control de acceso no solo evitan el acceso no autorizado, sino que también le permiten supervisar las actividades de su personal. Asegúrese de contar siempre con las personas correctas, en los lugares correctos, que realicen lo correcto.",
      },
      {
        // imageHeader: require('@/assets/images/props/oilmining/header3.jpg'),
        subHeaderTitle: "Protección perimetral",
        subHeaderIcon: "security",
        subHeader:
          "Detecte y verifique un intruso potencial en su perímetro desde prácticamente cualquier ubicación en tiempo real. Haga que el radar y las cámaras térmicas y visuales detecten, verifiquen e identifiquen intrusos potenciales. Nuestros sistemas de vigilancia están diseñados para funcionar incluso en condiciones de iluminación complicadas o en oscuridad total. El análisis inteligente activa advertencias y alerta a su personal, lo cual ahorra tiempo y dinero en patrullas y en atender falsas alarmas. Las advertencias también pueden activar un anuncio pregrabado para disuadir al intruso.",
      },
      {
        // imageHeader: require('@/assets/images/props/oilmining/header3.jpg'),
        subHeaderTitle: "Soluciones Comerciales",
        subHeaderIcon: "adjust",
        subHeader:
          "Identifique a personas en áreas amplias con cámaras con movimiento horizontal/vertical y zoom para observar áreas específicas de interés. Actúe sobre las alarmas y utilice audio pregrabado para impedir actividades no deseadas. Con una solución, todo esto se puede gestionar desde una ubicación remota, en cualquier lugar y en cualquier momento.",
      },
      {
        // imageHeader: require('@/assets/images/props/oilmining/header3.jpg'),
        subHeaderTitle: "Control de acceso",
        subHeaderIcon: "business",
        subHeader:
          "Supervisar las entradas y salidas para garantizar que solo el personal autorizado tiene acceso. Nuestras soluciones de control de acceso ofrecen control en muchos niveles y en varios sitios y todo desde una única ubicación remota. Un edificio, una habitación dentro de este o un armario de la habitación. Nuestras soluciones van más allá del control. Le permiten controlar el bienestar de todas las personas que se encuentran en las instalaciones, especialmente en las zonas más críticas, sensibles o vulnerables.",
      },
    ],
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
    },
  },
};
