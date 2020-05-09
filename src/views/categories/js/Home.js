import Home from "@/views/Home.vue"; // @ is an alias to /src

export default {
  components: {
    Home,
  },
  data() {
    return {
        randomBanner: [
            require("@/assets/banner/one.jpg"),
            require("@/assets/banner/two.jpg"),
            require("@/assets/banner/three.jpg")],
      selectedImage: '',
      industries: [
        {
          color: "primary",
          title: "Seguridad Pública",
          src: require("@/assets/home/industrias.jpg"),
          flex: 6,
          text: "Comunicaciones líderes para la seguridad pública.",
        },
      ],
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.randomBanner.length);
    this.selectedImage = this.randomBanner[idx];
  },

  computed: {
    fontTitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2em !important";
        case "sm":
          return "1.7em !important";
        case "md":
          return "1.9em !important";
        default:
          return "2.2em !important";
      }
    },
    fontSubtitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1em !important";
        case "sm":
          return "1em !important";
        case "md":
          return "1.2em !important";
        default:
          return "1.5em !important";
      }
    },

    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2em !important";
        case "sm":
          return "1.3em !important";
        case "md":
          return "1.5em !important";
        default:
          return "1.5em !important";
      }
    },

    borderTop() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "3px solid black !important";
        default:
          return "0px solid black !important";
      }
    },
    borderLeft() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "0px solid black !important";
        default:
          return "4px solid black !important";
      }
    },
  },
};
