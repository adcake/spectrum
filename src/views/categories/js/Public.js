// @ is an alias to /src
import PublicDialogPolice from '@/views/categories/modules/PublicDialogPolice.vue';

export default {
    components: {
      PublicDialogPolice
    },
    data: () => ({
      
      
      
      parrafos: [
          { header:'La seguridad pública es un elemento esencial y claramente vertebrador en las sociedades actuales. La confianza que depositan los ciudadanos en los cuerpos y agencias de seguridad pública permiten que se genere el entorno propicio y necesario para el desarrollo de todo tipo de actividades, contribuyendo al desarrollo social, económico y humano de las poblaciones, y en última instancia de nuestras sociedades.' },
          { subHeader: ' Por ello, se establece como prioritario que los efectivos de estas agencias de seguridad pública lleven el desempeño de sus tareas a las más altas cotas de eficiencia, servicio y coordinación, ya se trate de bomberos, policías, servicio de ambulancias, cuerpos de rescate… Para ello, los canales de comunicación que utilizan habitualmente en el acometimiento de sus tareas juegan un papel fundamental y decisivo, permitiendo un intercambio ágil y rápido de información en todo momento.' },
          { subHeader3: 'Spectrum Tecnoogía ofrece las tecnologías radio más punteras y modernas para cubrir las necesidades de comunicación de cualquier agencia de seguridad pública, independientemente de su alcance: local, regional o nacional. La experiencia adquirida durante más de 40 años al lado de agencias de seguridad pública de todo el mundo nos permite conocer claramente las necesidades de operación en el sector, y podemos dar respuesta a los requerimientos de cada proyecto con los sistemas y soluciones más sofisticados.'}
      ],
  
      radiosEquip: [
        { src: require('@/assets/images/props/publicsafety/radio0.png'), },
        { src: require('@/assets/images/props/publicsafety/radio1.png'), },
        { src: require('@/assets/images/props/publicsafety/radio3.png'), },
        { src: require('@/assets/images/props/publicsafety/radio4.png'), },
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
          case 'xs': return "1.5em !important";
          case 'sm': return "1.5em !important";
          default: return "2em !important";
        }
      }
    },
}
  