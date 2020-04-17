export default {
    
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,

        police:
            { src: require('@/assets/home/fuerza4.jpg'), title: 'Policia', text: 'Organismo Nacionales, Estadales, Municipals y Científicos.', },

        titlePoliceRadio: [
            {title: 'SOLUCIONES DE COMUNICACIÓN PROFESIONAL PARA CUERPOS POLICIALES', subtitle: 'TErrestrial Trunked RAdio'},],

        policeRadios: [
            { src: require('@/assets/images/props/publicsafety/radio0.png'), text: 'Radio 1', text2: 'Radio 1'},
            { src: require('@/assets/images/props/publicsafety/radio1.png'), text: 'Radio 1', text2: 'Radio 2'},
            { src: require('@/assets/images/props/publicsafety/radio3.png'), text: 'Radio 1', text2: 'Radio 3'},
            { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 4'},
        ],

        health: 
            { src: require('@/assets/home/fuerza7.jpg'), title: 'Salud', text: 'Hospitales, Centros de Salud y Ambulancias.'},

            titleHealthRadio: [
                {title: 'SOLUCIONES DE COMUNICACIÓN BOMBEROS', subtitle: 'TErrestrial Trunked RAdio'},],

            healthRadios: [
                { src: require('@/assets/images/props/publicsafety/radio0.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio1.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio3.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 1'},
            ],
        
        publics: 
            { src: require('@/assets/home/fuerza6.jpg'), title: 'Bomberos', text: 'Protección Civil, Bomberos y Guarda Parques.'},

            titlePublicRadio: [
                {title: 'SOLUCIONES DE COMUNICACIÓN BOMBEROS', subtitle: 'TErrestrial Trunked RAdio'},],

            publicRadios: [
                { src: require('@/assets/images/props/publicsafety/radio0.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio1.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio3.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 1'},
            ],

        covert: 
            { src: require('@/assets/home/fuerza3.jpg'), title: 'Encubiertos', text: 'Equipos para operaciones encubiertas.'},

            titleCovertRadio: [
                {title: 'SOLUCIONES DE COMUNICACIÓN BOMBEROS', subtitle: 'TErrestrial Trunked RAdio'},],

            covertRadios: [
                { src: require('@/assets/images/props/publicsafety/radio0.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 1'},
                { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'Radio 1', text2: 'Radio 1'},
            ],
      
      }
    },
  }