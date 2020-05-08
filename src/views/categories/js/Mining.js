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
           
      
      miningCards: [
       
        ///Mineria
        { 
          title: 'Minería', subtitle: 'Soluciones especializadas en minería', src: require('@/assets/home/industrias11.jpg'), titlePop: 'Comunicaciones para la atención médica crítica.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/mining2/radio1.png'), text1: "Sepura", text2: "STP9100"},
            {src: require('@/assets/images/props/mining2/radio5.png'), text1: "Hytera", text2: " PT790X"},
            {src: require('@/assets/images/props/mining2/radio6.png'), text1: "Icom", text2: "IC-F4202DEX"},
            {src: require('@/assets/images/props/mining2/radio4.png'), text1: "Kenwood", text2: "Kenwood NX-5000 Series"},
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
            headerPic: '', imageHeaderPic: require('@/assets/images/props/mining2/header.jpg'),
            subtitle: "Soluciones para ciudades inteligentes.", 
            description: "Nuestras completas soluciones especializadas le brindan una poderosa red de datos y voz que puede automatizar y agilizar procesos esenciales, brindando datos precisos y consistentes en tiempo real, mayor seguridad de los trabajadores y una protección de activos superior.", 
            description1: "Altamente seguro, y sin un solo punto de falla, nuestros sistemas pueden mantenerlo en comunicación cuando otros sistemas fallan. Y nuestros terminales resistentes pueden lidiar con algunas de las condiciones más duras de la tierra y sin comprometer la funcionalidad.",  
            description2:'Con opciones intrínsecamente seguras que cumplen con los estándares IECEx / ATEX, nuestras soluciones especializadas proporcionan una poderosa red de voz y datos que puede automatizar y agilizar procesos esenciales, proporcionando una mayor seguridad en el sitio y una protección de activos superior.', image2: require('@/assets/images/props/radios.jpg'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description3: 'La seguridad del trabajador se prioriza a través de funciones como Man-Down, que usa sensores de movimiento para detectar la falta de movimiento, y Lone Worker, que se puede configurar para realizar una llamada de emergencia si se detecta un cambio de estado.',
            description4: 'Las compañías mineras más grandes del mundo confían en nuestras marcas para su seguridad y funcionamiento.', image4: require('@/assets/images/props/mining2/image2.jpg'), image4Description: "NEXEDGE NXDN and NEXEDGE DMR "
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
            {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
            {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
            {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
          ],
          descriptionListTitle: [
            {title: 'Comunicaciones avanzadas e intrinsicamente seguras'}
          ],
          descriptionList: [
            { iconListing: 'language', preListing: 'POSICIONAMIENTO GLOBAL' ,listing: 'Servicios de localización GPS incluidos para seguimiento, disparadores y respuesta de emergencia' },
            { iconListing: 'filter_hdr', preListing: 'RESISTENTE' ,listing: 'Los auriculares resistentes y el audio nítido garantizan una comunicación precisa, por ruidosa que sea el entorno.' },
            { iconListing: 'signal_cellular_alt', preListing: 'COBERTURA y ACCESO' ,listing: 'Las puertas de enlace móviles van contigo para extender la cobertura, incluso en puntos muertos.' },
            { iconListing: 'radio_button_checked', preListing: 'COMUNICACIÓN DEL EQUIPO' ,listing: 'Los grupos de conversación permiten que los equipos individuales se comuniquen simultáneamente.' },
            { iconListing: 'dvr', preListing: 'RASTREAR E INFORMAR' ,listing: 'El monitoreo de equipos remotos elimina viajes costosos a sitios remotos o instalaciones de almacenamiento, y le permite seleccionar e implementar recursos en función de la ubicación y el estado. La automatización proporciona una pista de auditoría completa, esencial para informes precisos y responsabilidad.' },
            { iconListing: 'scatter_plot', preListing: 'A PRUEBA DE POLVO' ,listing: 'Todas las radios portátiles de Sepura tienen clasificaciones de protección ambiental, lo que significa que el dispositivo es a prueba de polvo.' },
            { iconListing: 'flare', preListing: 'ERGONOMICOS' ,listing: 'Las radios y accesorios de diseño ergonómico permiten una operación rápida y fácil, incluso con manos enguantadas.' },
            { iconListing: 'phone_in_talk', preListing: 'VOZ Y DATOS' ,listing: 'Las comunicaciones simultáneas de voz y datos permiten compartir información en tiempo real con el personal de campo y la sala de control.' },
            { iconListing: 'my_location', preListing: 'GPS' ,listing: 'Características como Lone Worker y Man-Down se combinan con una ubicación precisa del GPS para garantizar la seguridad del personal.' },
            { iconListing: 'layers', preListing: 'ACCESORIOS MINEROS' ,listing: 'El exclusivo sRSM Dustguard garantiza un audio intacto incluso en presencia de polvo de mineral de hierro magnético.' },

          ],
        },

        ///Petroleo
        { 
          title: 'Petróleo y gas', subtitle: 'Infraestructuras Críticas', src: require('@/assets/home/industrias10.jpg'), titlePop: 'Infraestructuras Críticas.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/mining/radio0.png'), text1: "Sepura", text2: "STP8X100"},
            {src: require('@/assets/images/props/mining/radio1.png'), text1: "Hytera", text2: "PT790"},
            {src: require('@/assets/images/props/mining/radio2.png'), text1: "Kenwood", text2: "NX-330EXE"},
            {src: require('@/assets/images/props/mining/radio3.png'), text1: "Icom", text2: "F3201DEX / F4201DEX"},
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
            title: "Soluciones con seguridad intrínseca para entornos de riesgo crítico.", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/mining/header.jpg'),
            subtitle: "Infraestructuras Críticas.", 
            description: "Las empresas de petróleo y gas operan en un sector muy competitivo en el que los problemas de infraestructura o producción conllevan enormes pérdidas económicas. Para garantizar el funcionamiento continuo y eficaz, a la vez que se cumplen todas las normas de protección, seguridad y medio ambiente, la vigilancia de vídeo en red juega un papel muy importante en toda la cadena de suministro.", 
            description1: "La integración de la vigilancia por vídeo en el sistema de producción le permite supervisar la producción de forma remota e inspeccionar y comprobar visualmente qué funciones y procesos se desarrollan correctamente. Así, puede prever el mantenimiento necesario, incluso en zonas de difícil acceso, y ofrecer ayuda remota mediante mantenimiento planeado.",  
            description2:'Los corredores de tuberías, ubicados en zonas enormes y remotas, son la parte más vulnerable de la cadena de suministro y la de más costosa protección. La supervisión remota es imprescindible para proteger eficazmente contra daños la compleja red de conductos. Nuestra solución de protección perimetral proporciona a los operadores información visual para que puedan tomar decisiones acertadas antes de enviar al equipo de trabajo correspondiente.', image2: require('@/assets/images/props/mining/picList4.jpg'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description3: 'La protección de los empleados, el público y el medio ambiente es nuestra principal prioridad. La integración del vídeo en red con sistemas HSE contribuye a garantizar que se siguen las reglas y los procesos de seguridad y que las herramientas y los equipos se gestionan correctamente. Nuestras soluciones proporcionan información esencial en tiempo real para identificar riesgos, lo que permite reaccionar inmediatamente y, potencialmente, salvar vidas.',
            description4: 'Nuestras marcas proporcionan comunicaciones de avanzadas, con soluciones confiables, robustas y seguras.', image4: require('@/assets/images/props/mining/image4.jpg'), image4Description: "Hikvision / DS-2DF6223-CX",
            description5: 'Seguridad Intrínseca (Intrinsic safety-IS) es una técnica de protección para operación segura de equipos eléctricos en áreas peligrosas que limita que se encienda la energía eléctrica y térmica. En refinerías petroquímicas y minas, se encuentran áreas con concentraciones peligrosas de gases o polvos inflamables. Como una disciplina, es la palicación de la seguridad intrínseca en la instrumentación. Los circuitos de alto poder tales como los motores eléctricos o de luz no pueden usar métodos de protección intrínsecamente seguros. Todos los radios, accesorios de audio y sensores desarrollados por terceros que integran las soluciones Hytera cuentan con certificación IS para cumplir con los requerimientos de seguridad de este ambiente de trabajo.', descriptionTitle5: '¿Qué es Seguridad Intrínseca?',
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/teltronic/pbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "PBS2 Portátil"},
            {src: require('@/assets/images/teltronic/dbs.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "DBS"},
            {src: require('@/assets/images/teltronic/mbs2.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "MBS2"},
            {src: require('@/assets/images/teltronic/scn.jpg'), text1: "Teltronic / eNEBULA TETRA ", text2: "SCN"},
          ],

          picList3: [
            {src: require('@/assets/images/props/mining/picList3_1.jpg'), text1: "Cámaras térmicas", text2: "HikvisionDS-2TD2466-50Y"},
            {src: require('@/assets/images/props/mining/picList3_2.jpg'), text1: "Cámaras protegidas contra explosiones", text2: "DS-2XE6126FWD-HS"},
            {src: require('@/assets/images/props/mining/picList3_3.jpg'), text1: "Control de acceso", text2: "DS-K1104"},
            {src: require('@/assets/images/props/mining/picList3_4.jpg'), text1: "Perimeter Defender", text2: "DS-PI-Q250"},
          ],


          descriptionListTitle: [
            {title: 'Comunicaciones avanzadas e intrinsicamente seguras'}
          ],
          descriptionList: [
            { iconListing: 'lock', preListing: 'SEGURIDAD' ,listing: 'El cifrado avanzado ofrece seguridad adicional' },
            { iconListing: 'zoom_out_map', preListing: 'FLEXIBILIDAD Y ESCALABILIDAD' ,listing: 'Desde pequeñas operaciones en un solo sitio hasta redes nacionales' },
            { iconListing: 'location_on', preListing: 'GEOFENCING' ,listing: 'Geofencing limita el acceso a áreas restringidas, indica movimiento no autorizado de equipos y alerta al personal sobre la proximidad a zonas peligrosas.' },
            { iconListing: 'radio_button_checked', preListing: 'TIEMPOS RÁPIDOS DE CONFIGURACIÓN DE LLAMADAS' ,listing: 'Utilizando Push-To-Talk (PTT) tradicional.' },
            { iconListing: 'visibility', preListing: 'SCADA' ,listing: 'Desde pozos de producción hasta tanques de almacenamiento, SCADA permite el monitoreo de equipos remotos, eliminando los viajes a sitios de perforación inaccesibles e instalaciones de almacenamiento, y permite el apagado y recuperación de equipos en caso de emergencia..' },
            { iconListing: 'signal_cellular_alt', preListing: 'CONECTIVIDAD' ,listing: 'La conectividad multiplataforma brinda a las cuadrillas acceso a mensajes de texto e imágenes, correo electrónico y datos del sistema de fondo, incluso en ubicaciones remotas.' },
            { iconListing: 'apps', preListing: 'APLICACIONES PERSONALIZADAS' ,listing: 'Las aplicaciones personalizables mantienen una pista de auditoría completa y promueven entornos que cumplen con la seguridad, reduciendo incidentes y exposición de responsabilidad.' },
          ],
        },

        ///Energía
        { 
          title: 'Electricidad y Agua', subtitle: 'Garantizar la producción de energía', src: require('@/assets/home/industrias13.jpg'), titlePop: 'Infraestructuras Críticas.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/mining/radio0.png'), text1: "Sepura", text2: "STP8X100"},
            {src: require('@/assets/images/props/mining/radio1.png'), text1: "Hytera", text2: "PT790"},
            {src: require('@/assets/images/props/mining/radio2.png'), text1: "Kenwood", text2: "NX-330EXE"},
            {src: require('@/assets/images/props/mining/radio3.png'), text1: "Icom", text2: "F3201DEX / F4201DEX"},
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
            title: "Protección de sus propiedades y beneficios", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/electricity/header.jpg'),
            subtitle: "Soluciones comerciales",
            description: "Sin electricidad, el mundo se detendría. Spectrum Tecnología dispone de una solución que garantizará la seguridad de sus instalaciones y sus empleados. A veces, controlar la eficiencia de la producción es tan importante como velar por la seguridad de sus instalaciones. Con nuestras soluciones de videovigilancia puede hacer las dos cosas, para que su planta funcione sobre ruedas y al mismo tiempo consiga multiplicar la eficiencia.", 
            descriptionListing: [
                {listingDes: "Gracias a los avanzados domos PTZ (movimiento horizontal/vertical y zoom) de alta velocidad, podrá disponer de una panorámica general y, al mismo tiempo, ampliar para ver detalles concretos de una acción, incluso después de que se produzca.",},
                {listingDes: "A través de la obtención periódica de datos de producción de instalaciones remotas, combinada con información visual, podrá aumentar la eficiencia y reducir los tiempos de inactividad."},
                {listingDes: "Spectrum Tecnología le ofrece cámaras con refrigeración activa, calefacción para el cristal de la cámara y parasoles ajustables, para que pueda obtener vídeos a temperaturas de entre -50°C y +75°C."},
            ],
            description1: "",  
            description2:'Además de proteger sus espacios de trabajo, las cámaras de red son una herramienta útil para aumentar la eficiencia global de la producción y crear un entorno de trabajo seguro para los empleados. La integración del sistema de cámaras en el sistema de producción le ofrece la posibilidad de recibir de forma remota imágenes en vivo a través de la conexión de red, lo que permite:', image2: require('@/assets/images/props/comercial/image1.jpg'), image2Description: "TETRA & DMR Radios, Sistemas & Aplicaciones" , 
            description2Listing: [
                {listingDes: "Supervisar las líneas de producción de forma remota, inspeccionar y comprobar visualmente que las funciones y procesos funcionan correctamente.",},
                {listingDes: "Garantizar que se siguen las reglas y los procesos de seguridad y que las herramientas y los equipos se gestionan correctamente."},
                {listingDes: "Proporcionar solución de problemas y asistencia remota con mantenimiento y soporte."},
            ],
            description3: 'Cree y mantenga un entorno donde los clientes y el personal se sientan seguros, tanto dentro de su tienda como en los alrededores.',
            description4: 'Las compañías mineras más grandes del mundo confían en nuestras marcas para su seguridad y funcionamiento.', image4: require('@/assets/home/industrias14.jpg'), image4Description: "Face Recognition Module DS-K5671-Z"
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/props/comercial/picList2_1.jpg'), text1: "Hikvision 128-ch 4U 4K Super NVR", text2: "DS-96128NI-I24"},
            {src: require('@/assets/images/props/comercial/picList2_2.jpg'), text1: "2MP AcuSense Mini Bullet Network Camera", text2: "DS-2CD2026G2-I(U)"},
            {src: require('@/assets/images/props/comercial/picList2_3.jpg'), text1: "2MP AcuSense Varifocal Dome Network Camera", text2: "DS-2CD2726G2-IZS"},
            {src: require('@/assets/images/props/comercial/picList2_4.jpg'), text1: "4MP AcuSense Fixed Turret Network Camera", text2: "DS-2CD2346G2-I(U)"},
          ],

          picList3: [
            {src: require('@/assets/images/props/comercial/picList3_1.jpg'), text1: "Control de acceso", text2: "K1A802 Value Series Fingerprint"},
            {src: require('@/assets/images/props/comercial/picList3_2.jpg'), text1: "4MP 4X DarkFighter IR Network Speed Dome", text2: "DS-2DE2A404IW-DE3/W"},
            {src: require('@/assets/images/props/comercial/picList3_3.jpg'), text1: "Pro 1103 Series Card Reader", text2: "DS-K1103"},
            {src: require('@/assets/images/props/mining/picList3_4.jpg'), text1: "Perimeter Defender", text2: "DS-PI-Q250"},
          ],
          
          descriptionListTitle: [
            {title: 'Comunicaciones avanzadas e intrinsicamente seguras'}
          ],
          descriptionList: [
            { iconListing: 'language', preListing: 'Entradas y salidas' ,listing: 'Manténgase informado de quién entra y sale de sus instalaciones y asegúrese de que sus clientes y su personal se sienten bienvenidos y protegidos. Tenga un control total sobre las entregas desatendidas, así como sobre todas las entradas y salidas en cualquier momento del día. Asegúrese de que ningún objeto bloquea las salidas de emergencia y tome medidas ante comportamientos sospechosos o agresivos. Haga que sus clientes, contratistas y personal se sientan seguros al acercarse y salir de su tienda.' },
            { iconListing: 'filter_hdr', preListing: 'Área de venta' ,listing: 'Mantenga sus instalaciones seguras y evite resbalones y caídas u otros accidentes. Reciba notificaciones automáticas en caso de comportamientos agresivos, envíe alertas inmediatas y avise a los guardias de seguridad en tiempo real. Detecte a los merodeadores y ayude a prevenir delitos como actos vandálicos, asegurándose de que el entorno de su tienda sea seguro y de que sus clientes se sientan protegidos. Cuente con una cobertura completa de los incidentes y con un análisis y una documentación de búsqueda sencillos que reduzcan el tiempo y los costes de investigación.' },
            { iconListing: 'signal_cellular_alt', preListing: 'Sala de efectivo' ,listing: 'Asegúrese de que únicamente su personal y las personas autorizadas tengan acceso a su sala de efectivo, capturando en tiempo real la entrada de personas. Reconocer, identificar o verificar personal autorizado.' },
            { iconListing: 'radio_button_checked', preListing: 'Estacionamientos' ,listing: 'Haga que sus clientes y su personal se sientan seguros al llegar y al salir de su aparcamiento, tanto durante el día como por la noche. Capture automáticamente imágenes de la matrícula de los vehículos que acceden a sus instalaciones y realice las acciones adecuadas, como abrir una puerta, añadir un cargo o generar una alerta.' },
            { iconListing: 'dvr', preListing: 'Despacho' ,listing: 'Proteja sus instalaciones y rastree las mercancías de sus proveedores, para saber exactamente dónde se encuentra un paquete en cada etapa de su viaje. Proteja sus entradas y salidas, antes, durante y después del horario comercial, otorgando permisos y controlando el acceso de los diferentes proveedores a sus instalaciones. Evite los dobles accesos cuando el personal accede a sus instalaciones.' },
            {iconListing: 'dvr', preListing: 'Almacenamiento y carga' ,listing: 'Asegure las entradas de las puertas en caso de entregas sin operario con códigos QR y otras aplicaciones de control de acceso. Capture automáticamente imágenes de las matrículas y tome las medidas adecuadas, como abrir una puerta para vehículos autorizados o registrar automáticamente los vehículos de reparto. Haga un seguimiento de personas y vehículos y active una alarma y/o mensajes pregrabados si han estado en un área no autorizada predefinida durante demasiado tiempo.' },

          ],
        },

        ///Telecomunicaciones
        { 
          title: 'Telecomunicaciones', subtitle: 'Protección total de los sistemas de telecomunicaciones', src: require('@/assets/home/industrias14.jpg'), titlePop: 'Infraestructuras Críticas.',  
            texts: [
              {},
              {},
          ], 

          picList1: [
            {src: require('@/assets/images/props/telecommunication/radio0.png'), text1: "Teltronic", text2: "SBS – Estación base fija"},
            {src: require('@/assets/images/props/telecommunication/radio1.png'), text1: "Teltronic", text2: "MBS – Estación base de montaje en mástil"},
            {src: require('@/assets/images/props/telecommunication/radio2.png'), text1: "Teltronic", text2: "DBS – Estación base táctica"},
            {src: require('@/assets/images/props/telecommunication/radio4.png'), text1: "Sepura", text2: "STP9000"},
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
            title: "Protección de sus propiedades y beneficios", 
            headerPic: '', imageHeaderPic: require('@/assets/images/props/telecommunication/header.jpg'),
            subtitle: "Soluciones comerciales",
            description: "El mundo de hoy está impulsado por los servicios públicos. Desde el saneamiento hasta el suministro de energía, nuestra sociedad depende de redes sofisticadas para garantizar nuestro bienestar nacional y la continuidad de nuestros negocios. Nuestras soluciones en seguridad electrónica ayudan a mantener el flujo de agua, gas y electricidad:", 
            descriptionListing: [
                {listingDes: "Nuestras soluciones le permitirá obtener imágenes nítidas e identificables y, en situaciones de oscuridad absoluta, nuestras cámaras térmicas podrán detectar y vigilar cualquier posible amenaza.",},
                {listingDes: "En las zonas más importantes, las aplicaciones de vídeo inteligente desarrolladas junto con nuestros socios le ayudarán a identificar intrusos o comportamientos sospechosos. Desde la sala de control, podrá detectar la presencia de personas merodeando o coches aparcados y utilizar el reconocimiento facial en tiempo real."},
            ],
            description1: "",  
            description2:'Además de proteger espacios en zonas críticas, nuestras soluciones son una herramienta útil para aumentar la eficiencia global de la producción y crear un entorno seguro. La integración de sistemas de comunicación para voz y datos, ofrece la posibilidad de recibir de forma remota imágenes en vivo a través de nuestras soluciones para esos entornos:', image2: require('@/assets/images/props/telecommunication/image2.jpg'), image2Description: "Hikvision 2MP 23X DarkFighter IR Network Positioning System" , 
            description2Listing: [
              {listingDes: "Soluciones de comunicación de voz entre los usuarios de la instalación.",},
              {listingDes: "Soluciones de video vigilancia a medida a estos entornos y a su forma de explotación.",},
              {listingDes: "Soluciones de interoperabilidad que facilitan la comunicación con entidades externas como cuerpos y fuerzas de seguridad pública que colaborar con la seguridad privada de la infraestructura en un momento puntual.",},
              {listingDes: "Supervisión de zonas de forma remota, inspeccionar y comprobar visualmente que las funciones y procesos funcionan correctamente.",},
                {listingDes: "Garantizar que se siguen las reglas y los procesos de seguridad y que las herramientas y los equipos se gestionan correctamente."},
                {listingDes: "Proporcionar solución de problemas y asistencia remota con mantenimiento y soporte."},
            ],
            description3: '',
            description4: 'Nuestras marcas han estado trabajando por más de 40 años diseñando, fabricando y desplegando sistemas de comunicación para voz y datos en instalaciones críticas.', image4: require('@/assets/images/props/mining/picList3_4.jpg'), image4Description: "Perimeter Defender DS-PI-Q250"
            
            },
          ],
          picList2: [
            {src: require('@/assets/images/props/comercial/picList2_1.jpg'), text1: "Hikvision 128-ch 4U 4K Super NVR", text2: "DS-96128NI-I24"},
            {src: require('@/assets/images/props/comercial/picList2_2.jpg'), text1: "2MP AcuSense Mini Bullet Network Camera", text2: "DS-2CD2026G2-I(U)"},
            {src: require('@/assets/images/props/comercial/picList2_3.jpg'), text1: "2MP AcuSense Varifocal Dome Network Camera", text2: "DS-2CD2726G2-IZS"},
            {src: require('@/assets/images/props/comercial/picList2_4.jpg'), text1: "4MP AcuSense Fixed Turret Network Camera", text2: "DS-2CD2346G2-I(U)"},
          ],

          picList3: [
            {src: require('@/assets/images/props/comercial/picList3_1.jpg'), text1: "Control de acceso", text2: "K1A802 Value Series Fingerprint"},
            {src: require('@/assets/images/props/comercial/picList3_2.jpg'), text1: "4MP 4X DarkFighter IR Network Speed Dome", text2: "DS-2DE2A404IW-DE3/W"},
            {src: require('@/assets/images/props/comercial/picList3_3.jpg'), text1: "Pro 1103 Series Card Reader", text2: "DS-K1103"},
            {src: require('@/assets/images/props/mining/picList3_4.jpg'), text1: "Perimeter Defender", text2: "DS-PI-Q250"},
          ],
          
          descriptionListTitle: [
            {title: 'Comunicaciones avanzadas e intrinsicamente seguras'}
          ],
          descriptionList: [
            { iconListing: 'language', preListing: 'Entradas y salidas' ,listing: 'Manténgase informado de quién entra y sale de sus instalaciones y asegúrese de que sus clientes y su personal se sienten bienvenidos y protegidos. Tenga un control total sobre las entregas desatendidas, así como sobre todas las entradas y salidas en cualquier momento del día. Asegúrese de que ningún objeto bloquea las salidas de emergencia y tome medidas ante comportamientos sospechosos o agresivos. Haga que sus clientes, contratistas y personal se sientan seguros al acercarse y salir de su tienda.' },
            { iconListing: 'radio_button_checked', preListing: 'Control de Acceso' ,listing: 'Asegure las entradas de las puertas sin operario y otras aplicaciones de control de acceso. Capture automáticamente imágenes de la matrícula de los vehículos que acceden a sus instalaciones y realice las acciones adecuadas, como abrir una puerta o generar una alerta, reconocer, identificar o verificar personal autorizado.' },
            { iconListing: 'dvr', preListing: 'Integración con la operación de la instalación' ,listing: 'Posibilidad de integrar con otros subsistemas como controles de accesos, sistemas de control telemétrico de la instalación, etc.' },
            { iconListing: 'dynamic_feed', preListing: 'Gestión de redundancias' ,listing: 'Máxima disponibilidad y confiabilidad de las soluciones desplegadas.Tanto en el acceso a red, bandas, aplicaciones de voz y datos críticos, como en las aplicaciones de vídeo que se basan en tecnología IP, codificación H.264 y son compatibles con estándares ONVIF. Instalación, despliegue y capacidad de los sistemas escalables 100% IP. Mantenimiento eficiente y distribuído' },
          ],
        },
      ],



      
      header :[
        { headerTitle: 'Soluciones especificas para entornos de seguridad crítica.',
        header:'Los entornos difíciles exigen soluciones difíciles. Nuestras marcas en materia de seguridad electronica, radiocomunicación y data para entornos peligrosos, proporcionan soluciones altamente seguras en las condiciones más duras, y están diseñadas a medida para cumplir con los desafíos que generalmente se encuentran en los entornos petroleros y de minería.',}
      ],
      subHeader: [
        {
        imageHeader: require('@/assets/images/props/oilmining/header2.jpg'),
        subHeaderTitle: 'Protección Perimetral',
        subHeaderIcon: 'verified_user',
        subHeader: 'Intrusión, interrupción y daños. Estas son las amenazas principales para la productividad, la rentabilidad y el bienestar de los empleados en sus instalaciones. Nuestras soluciones de infraestructura crítica le permiten abordar las tres de forma completa y rentable, con un único sistema integrado. \r\n Nuestros sistemas de vigilancia inteligentes, abiertos y basados en IP están diseñados para que todas las partes puedan comunicarse entre sí. Están preparados para el futuro, son escalables y fáciles de integrar con otros sistemas. Además, lo más importante es que habilitan la supervisión de varios sitios de forma remota, desde una única sala de control.',},
        {
        // imageHeader: require('@/assets/images/props/oilmining/header3.png'),
        subHeaderTitle: 'Proteja sus instalaciones críticas de intrusiones',
        subHeaderIcon: 'warning',
        subHeader: 'Una solución de protección frente a intrusiones, nuestras soluciones protegen sus instalaciones de forma fiable. Cámaras visuales y térmicas con análisis incorporados combinados con seguimiento por radar para alertar a los operadores de la sala de control. Activan automáticamente advertencias pregrabadas a los posibles intrusos, que pueden ser identificados mediante cámaras PTZ. Dentro y alrededor del núcleo crítico, los sistemas de control de acceso no solo evitan el acceso no autorizado, sino que también le permiten supervisar las actividades de su personal. Asegúrese de contar siempre con las personas correctas, en los lugares correctos, que realicen lo correcto.' , },
        {
        // imageHeader: require('@/assets/images/props/oilmining/header3.png'),
        subHeaderTitle: 'Protección perimetral',
        subHeaderIcon: 'security',
        subHeader: 'Detecte y verifique un intruso potencial en su perímetro desde prácticamente cualquier ubicación en tiempo real. Haga que el radar y las cámaras térmicas y visuales detecten, verifiquen e identifiquen intrusos potenciales. Nuestros sistemas de vigilancia están diseñados para funcionar incluso en condiciones de iluminación complicadas o en oscuridad total. El análisis inteligente activa advertencias y alerta a su personal, lo cual ahorra tiempo y dinero en patrullas y en atender falsas alarmas. Las advertencias también pueden activar un anuncio pregrabado para disuadir al intruso.' , },
        {
        // imageHeader: require('@/assets/images/props/oilmining/header3.png'),
        subHeaderTitle: 'Protección de la zona',
        subHeaderIcon: 'adjust',
        subHeader: 'Detecte cualquier actividad no deseada y realice un seguimiento de personas u objetos en varios sitios, con información sobre su velocidad, distancia y ángulo de movimiento. Identifique a personas en áreas amplias con cámaras con movimiento horizontal/vertical y zoom para observar áreas específicas de interés. Actúe sobre las alarmas y utilice audio pregrabado para impedir actividades no deseadas. Con las soluciones de Spectrum, todo esto se puede gestionar desde una ubicación remota, en cualquier lugar y en cualquier momento.' , },
        {
        // imageHeader: require('@/assets/images/props/oilmining/header3.png'),
        subHeaderTitle: 'Control de acceso',
        subHeaderIcon: 'business',
        subHeader: 'Supervisar las entradas y salidas para garantizar que solo el personal autorizado tiene acceso. Las soluciones de control de acceso ofrecen control en muchos niveles y en varios sitios y todo desde una única ubicación remota. Un edificio, una habitación dentro de este o un armario de la habitación. Nuestras soluciones van más allá del control. Le permiten controlar el bienestar de todas las personas que se encuentran en las instalaciones, especialmente en las zonas más críticas, sensibles o vulnerables.' , },        
      ],
      
  
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
          { src: require('@/assets/images/teltronic/nebula.jpg'), icon: 'memory', text: ' Infraestructura de comunicaciones radio TETRA y LTE Equipamiento para infraestructuras de red de transporte.' },
          { src: require('@/assets/images/props/radios.jpg'), icon: 'wifi_tethering', text: 'Equipos radio móviles y portátiles con soporte de las mejores marcas en materia de seguridad púbica.' },
          { src: require('@/assets/images/props/camerabody.jpg'), icon: 'videocam', text:'Consolas vehiculares y vídeo en movilidad en tiempo real.' },
          { src: require('@/assets/images/props/videowall.png'), icon: 'memory', text: 'Unidades de despacho y centro de control para gestión centralizada.' },
          { src: require('@/assets/images/props/portalify3.jpg'), icon: 'wifi_tethering', text: ' Centros de atención telefónica 911/112.' },
          
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
  