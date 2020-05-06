export default {
    props: ['item'],
    
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      
      }
    },
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