export default {
    
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,


        titleDialogRadio: [
            {title: 'SOLUCIONES DE COMUNICACIÓN PROFESIONAL PARA CUERPOS POLICIALES', subtitle: 'TErrestrial Trunked RAdio'},],

        dialogRadios: [
            { src: require('@/assets/images/props/publicsafety/radio0.png'), text: 'SEPURA', text2: ' Radio1'},
            { src: require('@/assets/images/props/publicsafety/radio1.png'), text: 'KENWOOD', text2: 'Radio 2'},
            { src: require('@/assets/images/props/publicsafety/radio3.png'), text: 'ICOM', text2: 'Radio 3'},
            { src: require('@/assets/images/props/publicsafety/radio4.png'), text: 'HYTERA', text2: 'Radio 4'},
        ],
      
      }
    },
  }