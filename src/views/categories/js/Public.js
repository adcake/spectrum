// @ is an alias to /src
import PublicDialog from '@/views/categories/modules/PublicDialog.vue';



export default {
    methods: {
      method (url) {
        this.videoId = this.$youtube.getIdFromURL(url)
        this.startTime = this.$youtube.getTimeFromURL(url)
      }
    },

    components: {
      PublicDialog,
    },
    data: () => ({
      
      dialog: false,
     

      homeCards: [
        { 
        title: 'Policía', subtitle: 'Organismo Nacionales, Estadales, Municipals y Científicos.', src: require('@/assets/home/fuerza4.jpg'), titlePop: 'Fuerza Policial',  
          texts: [
            {},
            {},
        ], 
        youtubeEmbed: [{
          videoId: 'nl0i-6LgRec', width: '100%',
        }],
        
        brandLogos: [
          { src: require('@/assets/logo/brands/brand2.gif'), },
          { src: require('@/assets/logo/brands/brand5.gif'), },
          { src: require('@/assets/logo/brands/brand9.gif'), },
          { src: require('@/assets/logo/brands/brand4.gif'), },

          { src: require('@/assets/logo/brands/brand10.gif'), },
          { src: require('@/assets/logo/brands/brand6.gif'), },

          { src: require('@/assets/logo/brands/brand7.gif'), },
          { src: require('@/assets/logo/brands/brand8.gif'), },
        ],
        
        picList1: [
          {src: require('@/assets/images/props/publicsafety/radioPolice0.png'), text1: "Sepura", text2: " STP-9000"},
          {src: require('@/assets/images/props/publicsafety/radioPolice1.png'), text1: "Kenwood", text2: "TK-2402VK/3402UK"},
          {src: require('@/assets/images/props/publicsafety/radioPolice3.png'), text1: "Icom", text2: "IC-F4161/3161"},
          {src: require('@/assets/images/props/publicsafety/radioPolice4.png'), text1: "Hytera", text2: "PD 786"},
        ],
        publicSafetyInfo: [
          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        description: [
          {
          src: require('@/assets/images/props/publicsafety/radioPolice0.png'), 
          title: "Conectar para mejorar la eficiencia", 
          headerPic: '', imageHeaderPic: require('@/assets/images/props/publicsafety/header.png'),
          subtitle: "Soluciones para ciudades inteligentes.", 
          description: "Con la confianza de innumerables fuerzas policiales en todo el mundo, nuestras marcas y soluciones de comunicación especializadas brindan comunicaciones cifradas de voz y datos altamente seguras, una cobertura nítida en cualquier entorno y comunicación instantánea con otros servicios de emergencia y agencias de protección civil.",  
          description2:'De abierto a encubierto, las soluciones de Spectrum son las más confiables para proporcionar comunicaciones vitales incluso a las operaciones más avanzadas.', image2: require('@/assets/images/props/radios.png'), image2Description: "Teltronic / PBS – Portable Base Station",
          description4: ' Nuestras marcas proporcionan comunicaciones de avanzadas, con soluciones confiables, robustas y seguras.', image4: require('@/assets/images/props/publicsafety/image4.png'), image4Description: "Hikvision / DS-2DF6223-CX",
          
          },
        ],
        picList2: [
          {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
          {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
          {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
          {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
        ],
        
        descriptionList: [
          { iconListing: 'send', preListing: '' , listing: 'Comunicaciones de voz, tanto individuales como de grupo, con distintos permisos y prioridades de llamada para asegurar que las llamadas críticas progresarán ante cualquier circunstancia.' },
          { iconListing: 'send', preListing: '' , listing:'Transmisión de datos críticos. Servicios de mensajería entre unidades o desde/para el centro de control.' },
          { iconListing: 'send', preListing: '' , listing: 'Posicionamiento GPS y localización automática de vehículos (AVL), con aplicaciones de transmisión automática y periódica de la información de posición al centro de control.' },
          { iconListing: 'send', preListing: '' , listing: 'Centro de control para la gestión y coordinación centralizada, con aplicaciones de gestión de las comunicaciones de voz y datos críticos, mapas con información y localización GPS y almacenamiento y gestión de información vinculada a servicios e incidentes.' },
          { iconListing: 'send', preListing: '' , listing: 'Acceso a vídeo móvil y fijo desde el centro de control, con modernas consolas vehiculares equipadas con cámaras de vídeo y cámaras fijas situadas en puntos estratégicos de las ciudades.' }
          ],
        },

        { 
          title: 'Salud', subtitle: 'Hospitales, Centros de Salud y Ambulancias.', src: require('@/assets/home/fuerza7.jpg'), titlePop: 'Comunicaciones para la atención médica crítica.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/health/radio0.png'), text1: "Sepura", text2: " SC21"},
            {src: require('@/assets/images/props/health/radio4.png'), text1: "Kenwood", text2: "TK-2402VK/3402UK"},
            {src: require('@/assets/images/props/health/radio5.png'), text1: "Icom", text2: "F52D/F52D UL (IS)"},
            {src: require('@/assets/images/props/health/radio6.png'), text1: "Hytera", text2: "PD 786"},
          ],
          

          youtubeEmbed: [{
            videoId: 'nl0i-6LgRec', width: '100%',
          }],
          
          brandLogos: [
            { src: require('@/assets/logo/brands/brand2.gif'), },
            { src: require('@/assets/logo/brands/brand5.gif'), },
            { src: require('@/assets/logo/brands/brand9.gif'), },
            { src: require('@/assets/logo/brands/brand4.gif'), },
            { src: require('@/assets/logo/brands/brand10.gif'), },
            { src: require('@/assets/logo/brands/brand6.gif'), },
            { src: require('@/assets/logo/brands/brand7.gif'), },
            { src: require('@/assets/logo/brands/brand8.gif'), },
          ],
          
          
          publicSafetyInfo: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          ],
          description: [
            {
            src: require('@/assets/images/props/publicsafety/radioPolice0.png'), 
            title: "Transformando comunicaciones para servicios de ambulancia", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/health/header.png'),
            subtitle: "Soluciones para ciudades inteligentes.", 
            description: "La seguridad es el núcleo de todos nuestros productos y su amplia cartera de soluciones tiene por objetivo proteger a los pacientes, el personal sanitario, las visitas y la propiedad. Spectrum Tenología ofrece protección, seguridad y fiabilidad apta para todos los entornos hospitalarios, desde el quirófano hasta la ambulancia.", 
            description1: "Entrega de comunicación rápida y confiable a los operadores de servicios de salud. Nuentras soluciones permiten tiempos de respuesta más rápidos y una prestación de servicio más eficiente al combinar comunicaciones de radio bidireccionales, mensajería, telefonía móvil y datos móviles.",  
            description2:'Las organizaciones de ambulancias de todo el mundo actualmente usan nuestras marcas para sus sistemas de comunicaciones de respuesta a emergencias y disfrutan de los considerables beneficios proporcionados por las radios TETRA.', image2: require('@/assets/images/props/radios.png'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description3: 'Spectrum Tecnología tiene un conocimiento profundo de los requisitos operativos y de comunicaciones de los servicios de ambulancia; entregando soluciones que pueden satisfacer las necesidades de ambulancia en cualquier parte del mundo. A través de radios de mano usadas por los paramédicos y radios móviles, instaladas en ambulancias, vehículos de respuesta rápida y motocicletas, nuestros euqipos entregan las comunicaciones clave requeridas por los equipos médicos de emergencia.',
            description4: ' Nuestras marcas proporcionan comunicaciones de avanzadas, con soluciones confiables, robustas y seguras.', image4: require('@/assets/images/props/health/image6.png'), image4Description: "DS-MH2211 1080p Body Camera"
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
            {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
            {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
            {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
            
          ],
          descriptionList: [
            { iconListing: 'adjust', preListing: '' , listing: 'Comunicaciones de voz, tanto individuales como de grupo, con distintos permisos y prioridades de llamada para asegurar que las llamadas críticas progresarán ante cualquier circunstancia.' },
            { iconListing: 'adjust', preListing: '' , listing:'Transmisión de datos críticos. Servicios de mensajería entre unidades o desde/para el centro de control.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Posicionamiento GPS y localización automática de vehículos (AVL), con aplicaciones de transmisión automática y periódica de la información de posición al centro de control.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Centro de control para la gestión y coordinación centralizada, con aplicaciones de gestión de las comunicaciones de voz y datos críticos, mapas con información y localización GPS y almacenamiento y gestión de información vinculada a servicios e incidentes.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Acceso a vídeo móvil y fijo desde el centro de control, con modernas consolas vehiculares equipadas con cámaras de vídeo y cámaras fijas situadas en puntos estratégicos de las ciudades.' }
            ],
          },

        { 
          title: 'Bomberos', subtitle: 'Protección Civil, Bomberos y Guarda Parques.', src: require('@/assets/home/fuerza6.jpg'), titlePop: 'Comunicaciones para bomberos y rescate.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/fire/radio0.png'), text1: "Sepura", text2: " SP8X000"},
            {src: require('@/assets/images/props/fire/radio1.png'), text1: "Kenwood", text2: "TK-NX200"},
            {src: require('@/assets/images/props/fire/radio2.png'), text1: "Icom", text2: "F70D/F80D"},
            {src: require('@/assets/images/props/fire/radio3.png'), text1: "Hytera", text2: "PD715IS / PD795I"},
          ],
          

          youtubeEmbed: [{
            videoId: 'nl0i-6LgRec', width: '100%',
          }],
          
          brandLogos: [
            { src: require('@/assets/logo/brands/brand2.gif'), },
            { src: require('@/assets/logo/brands/brand5.gif'), },
            { src: require('@/assets/logo/brands/brand9.gif'), },
            { src: require('@/assets/logo/brands/brand4.gif'), },
            { src: require('@/assets/logo/brands/brand10.gif'), },
            { src: require('@/assets/logo/brands/brand6.gif'), },
            { src: require('@/assets/logo/brands/brand7.gif'), },
            { src: require('@/assets/logo/brands/brand8.gif'), },
          ],
          
          
          publicSafetyInfo: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          ],
          description: [
            {
            src: require('@/assets/images/props/publicsafety/radioPolice0.png'), 
            title: "Soluciones que pueden soportar el calor.", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/fire/header.png'),
            subtitle: "Soluciones para ciudades inteligentes.", 
            description: "Con la confianza de numerosos servicios de bomberos en todo el mundo, nuestras marcas especializadas brindan comunicaciones seguras de voz y datos con excelente claridad de audio incluso en los entornos operativos más exigentes.", 
            description1: "Nuestras soluciones de comunicaciones, basadas en el estándar TETRA y tecnologías de banda ancha, proporcionan comunicación y transferencia continua  datos entre los centros de control, los vehículos y los que están en tierra. Esto garantiza que todos los recursos estén totalmente informados y actualizados en cada fase de la implementación.",  
            description2:'Las organizaciones de incendio de todo el mundo actualmente usan nuestras marcas para sus sistemas de comunicaciones de respuesta a emergencias y disfrutan de los considerables beneficios proporcionados por las radios TETRA.', image2: require('@/assets/images/props/radios.png'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description3: 'Spectrum Tecnología tiene un conocimiento profundo de los requisitos operativos y de comunicaciones de los servicios de ambulancia; entregando soluciones que pueden satisfacer las necesidades de ambulancia en cualquier parte del mundo. A través de radios de mano usadas por los paramédicos y radios móviles, instaladas en ambulancias, vehículos de respuesta rápida y motocicletas, nuestros euqipos entregan las comunicaciones clave requeridas por los equipos médicos de emergencia.',
            description4: ' Nuestras marcas proporcionan comunicaciones de avanzadas, con soluciones confiables, robustas y seguras.', image4: require('@/assets/images/props/fire/image6.png'), image4Description: "NEXEDGE VHF/UHF/700-800"
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
            {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
            {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
            {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
            
          ],
          descriptionList: [
            { iconListing: 'adjust', preListing: '' , listing: 'Comunicaciones de voz, tanto individuales como de grupo, con distintos permisos y prioridades de llamada para asegurar que las llamadas críticas progresarán ante cualquier circunstancia.' },
            { iconListing: 'adjust', preListing: '' , listing:'Transmisión de datos críticos. Servicios de mensajería entre unidades o desde/para el centro de control.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Posicionamiento GPS y localización automática de vehículos (AVL), con aplicaciones de transmisión automática y periódica de la información de posición al centro de control.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Centro de control para la gestión y coordinación centralizada, con aplicaciones de gestión de las comunicaciones de voz y datos críticos, mapas con información y localización GPS y almacenamiento y gestión de información vinculada a servicios e incidentes.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Acceso a vídeo móvil y fijo desde el centro de control, con modernas consolas vehiculares equipadas con cámaras de vídeo y cámaras fijas situadas en puntos estratégicos de las ciudades.' }
            ],
          },

        { 
          title: 'Encubiertos', subtitle: 'Vigilancia encubierta', src: require('@/assets/home/fuerza3.jpg'), titlePop: 'Comunicaciones para bomberos y rescate.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/covert/radio0.png'), text1: "Sepura", text2: " SC21"},
            {src: require('@/assets/images/props/covert/radio1.png'), text1: "Hytera", text2: "Z1p"},
          ],
          

          youtubeEmbed: [{
            videoId: 'nl0i-6LgRec', width: '100%',
          }],
          
          brandLogos: [
            { src: require('@/assets/logo/brands/brand2.gif'), },
            { src: require('@/assets/logo/brands/brand5.gif'), },
            { src: require('@/assets/logo/brands/brand9.gif'), },
            { src: require('@/assets/logo/brands/brand4.gif'), },
            { src: require('@/assets/logo/brands/brand10.gif'), },
            { src: require('@/assets/logo/brands/brand6.gif'), },
            { src: require('@/assets/logo/brands/brand7.gif'), },
            { src: require('@/assets/logo/brands/brand8.gif'), },
          ],
          
          
          publicSafetyInfo: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          ],
          description: [
            {
            src: require('@/assets/images/props/publicsafety/radioPolice0.png'), 
            title: "Vigilancia encubierta", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/fire/header.png'),
            subtitle: "Soluciones para ciudades inteligentes.", 
            description: "Los productos encubiertos de Spectrum Tecnología proporcionan una solución perfectamente integrada para equipos encubiertos, lo que les permite comunicarse de manera clara y efectiva en una amplia gama de ubicaciones.", 
            description1: "Nuestras soluciones permiten que los oficiales de vigilancia encubiertos se comuniquen a la vez que se mantienen discretos.",  
            description2:'Con soluciones para conectarse a TETRA, GSM y Wi-Fi, las soluciones de Sepura ofrecen una serie de opciones alternativas para fortalecer la seguridad del usuario final y ampliar la flexibilidad.', image2: require('@/assets/images/props/radios.png'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description3: 'Spectrum Tecnología tiene un conocimiento profundo de los requisitos operativos y de comunicaciones de los servicios de ambulancia; entregando soluciones que pueden satisfacer las necesidades de ambulancia en cualquier parte del mundo. A través de radios de mano usadas por los paramédicos y radios móviles, instaladas en ambulancias, vehículos de respuesta rápida y motocicletas, nuestros euqipos entregan las comunicaciones clave requeridas por los equipos médicos de emergencia.',
            description4: ' Nuestras marcas proporcionan comunicaciones de avanzadas, con soluciones confiables, robustas y seguras.', image4: require('@/assets/images/props/fire/image6.png'), image4Description: "NEXEDGE VHF/UHF/700-800"
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
            {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
            {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
            {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
            
          ],
          descriptionListTitle: [
            {title: 'Nuestras soluciones son utilizadas globalmente por.'}
          ],
          descriptionList: [
            { iconListing: 'adjust', preListing: '' , listing: 'Equipos de Investigación de Delincuencia Organizada.' },
            { iconListing: 'adjust', preListing: '' , listing:'Unidades de lucha contra el terrorismo.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Unidades militares.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Equipos de Investigación de Drogas.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Equipos de investigación de fraudes serios.' },
            { iconListing: 'adjust', preListing: '' , listing: 'Unidades de contraespionaje.' }
            ],
          },

      ],


      parrafos: { 
        header:'La seguridad pública es un elemento esencial y claramente vertebrador en las sociedades actuales. La confianza que depositan los ciudadanos en los cuerpos y agencias de seguridad pública permiten que se genere el entorno propicio y necesario para el desarrollo de todo tipo de actividades, contribuyendo al desarrollo social, económico y humano de las poblaciones, y en última instancia de nuestras sociedades.' , 
        subHeader: ' Por ello, se establece como prioritario que los efectivos de estas agencias de seguridad pública lleven el desempeño de sus tareas a las más altas cotas de eficiencia, servicio y coordinación, ya se trate de bomberos, policías, servicio de ambulancias, cuerpos de rescate… Para ello, los canales de comunicación que utilizan habitualmente en el acometimiento de sus tareas juegan un papel fundamental y decisivo, permitiendo un intercambio ágil y rápido de información en todo momento.' , 
        subHeader3: 'Spectrum Tecnoogía ofrece las tecnologías radio más punteras y modernas para cubrir las necesidades de comunicación de cualquier agencia de seguridad pública, independientemente de su alcance: local, regional o nacional. La experiencia adquirida durante más de 40 años al lado de agencias de seguridad pública de todo el mundo nos permite conocer claramente las necesidades de operación en el sector, y podemos dar respuesta a los requerimientos de cada proyecto con los sistemas y soluciones más sofisticados.'},
  
      radiosEquip: [
        { src: require('@/assets/images/props/publicsafety/radioPolice0.png'), },
        { src: require('@/assets/images/props/publicsafety/radioPolice1.png'), },
        { src: require('@/assets/images/props/publicsafety/radioPolice3.png'), },
        { src: require('@/assets/images/props/publicsafety/radioPolice4.png'), },
      ],
  
      logoTechs: [
        { src: require('@/assets/logo/tecnologia/tetra.png'), },
        { src: require('@/assets/logo/tecnologia/p25.png'), },
        { src: require('@/assets/logo/tecnologia/lte.png'), },
        { src: require('@/assets/logo/tecnologia/icc.png'), },
      ],
  
      techs: [
        { src: require('@/assets/images/props/techlist/tech1.jpg'), text:'Cumplimiento de tráfico' },
        { text:'Gestión del flujo de tráfico', },
        { text:'Aplicaciones de vehículos', },
        { text:'Reconocimiento facial', },
      ],
  
  
      sectorOption: [
        { icon: 'videocam', text:'De abierto a encubierto, las soluciones de Sepura son confiables para proporcionar comunicaciones vitales incluso a las operaciones más avanzadas.' },
        { icon: 'memory', text: ' Tras proporcionar comunicaciones de radio avanzadas a más de 100 fuerzas policiales en todo el mundo, las soluciones de Sepura son confiables, robustas y seguras.' },
      ],
  
      itemsSector: [
          { src: require('@/assets/images/hikvision/ptz.png'), icon: 'videocam', text:'Soluciones CCTV que cubran áreas críticas de una ciudad e integre datos de video entre dichas áreas para visualizar el estado de seguridad subyacente a nivel de ciudad.' },
          { src: require('@/assets/images/teltronic/nebula.png'), icon: 'memory', text: ' Infraestructura de comunicaciones radio TETRA y LTE Equipamiento para infraestructuras de red de transporte.' },
          { src: require('@/assets/images/props/radios.png'), icon: 'wifi_tethering', text: 'Equipos radio móviles y portátiles con soporte de las mejores marcas en materia de seguridad púbica.' },
          { src: require('@/assets/images/props/camerabody.png'), icon: 'videocam', text:'Consolas vehiculares y vídeo en movilidad en tiempo real.' },
          { src: require('@/assets/images/props/videowall.png'), icon: 'memory', text: 'Unidades de despacho y centro de control para gestión centralizada.' },
          { src: require('@/assets/images/props/portalify3.png'), icon: 'wifi_tethering', text: ' Centros de atención telefónica 911/112.' },
          
      ],
      itemsTetra: [
          { title: 'Comunicaciones de voz,', text:' tanto individuales como de grupo, con distintos permisos y prioridades de llamada para asegurar que las llamadas críticas progresarán ante cualquier circunstancia.' },
          { title: 'Transmisión de datos críticos.', text: ' Servicios de mensajería entre unidades o desde/para el centro de control.' },
          { title: 'Posicionamiento GPS y localización automática de vehículos (AVL),', text: ' con aplicaciones de transmisión automática y periódica de la información de posición al centro de control.' },
          { title: 'Centro de control para la gestión y coordinación centralizada,', text: ' con aplicaciones de gestión de las comunicaciones de voz y datos críticos, mapas con información y localización GPS y almacenamiento y gestión de información vinculada a servicios e incidentes.' },
          { title: 'Acceso a vídeo móvil y fijo desde el centro de control,', text: ' con modernas consolas vehiculares equipadas con cámaras de vídeo y cámaras fijas situadas en puntos estratégicos de las ciudades.' },  
          
      ],
      
      itemsSpec: [
          { title: 'Control de los procesos de diseño y fabricación', text:
          'Personalización de los productos y soluciones.', text2:'Flexibilidad en integración de todas las soluciones suministradas por TELTRONIC con soluciones complementarias o sistemas existentes.'
          },
          { title: 'Gran variedad de soluciones de acuerdo a la funcionalidad requerida', text:'Adaptación a los requisitos de cada proyecto.',},
          { title: 'Seguimiento completo del proyecto en todas sus fases', text:'Desde la planificación previa con estudios de cobertura a la atención de postventa cuando los sistemas ya se encuentran en funcionamiento'},
          { title: 'Evolución y modernización continua de los productos y soluciones', text:'Incorporación constante de nuevas funcionalidades y mejoras sobre los productos, manteniéndolos actualizados a las últimas tendencias de mercado',},
          { title: 'Fiabilidad y disponibilidad máximas', text:'Redundancia de elementos.', text2:'Soluciones de monitorización y control para un mantenimiento preventivo que garantice el perfecto funcionamiento de los sistemas'},
          { title: 'Componentes y elementos estándar', text:'Asegurando el acceso a economías de escala para reducir los costes a la vez que se evita la obsolescencia de los dispositivos.'},
          { title: 'Sistema unificado multi-servicio', text:'Soportando varias aplicaciones y servicios desde los mismos sistemas y soluciones, con lo que se reduce tanto la inversión inicial como los costes de mantenimiento.'},
          { title: 'Solución 100% IP, tanto para señalización como para transporte de voz y datos de usuario', text:'Reducción del ancho de banda requerido en la red de transporte y en el coste de los elementos intermedios de conmutación'},
          { title: 'Escalabilidad y soluciones con capacidad de crecimiento', text:'Para la expansión futura de la red, la integración de nuevos servicios o la evolución hacia nuevas versiones de los estándares.',}
      ]
  
    }),

    
    
    computed: {
      fontSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "1.2em !important";
          case 'sm': return "1.3em !important";
          default: return "1.5em !important";
        }
      }
    },

    
}
  