import Home from '@/views/Home.vue';// @ is an alias to /src

export default {
    components: {
        Home
        },
    data () {
        return {
            banners: [
            {src: require('@/assets/banner/one.jpg')},
            // {src: require('@/assets/banner/two.jpg')},
            // {src: require('@/assets/banner/three.jpg')},
            // {src: require('@/assets/banner/four.jpg')},
            // {src: require('@/assets/banner/five.jpg')},
            // {src: require('@/assets/banner/six.jpg')},
            // {src: require('@/assets/banner/seven.jpg')},
            ],

            industries: [
            {color:'primary', title: 'Seguridad Pública', src: require('@/assets/home/industrias.jpg'), flex: 6, text: 'Comunicaciones líderes para la seguridad pública.'},

            ],
        }
        },

        computed: {
            fontSize() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return "1.2em !important";
                    case 'sm': return "1.3em !important";
                    case 'md': return "1.5em !important";
                    default: return "1.5em !important";
                }
            },

            borderTop() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return "3px solid black !important";
                    default: return "0px solid black !important";
                }
            },
            borderLeft() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return "0px solid black !important";
                    default: return "4px solid black !important";
                }
            }
        },
}
