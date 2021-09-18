import Toasted from 'vue-toasted'
import Vue from 'vue'
Vue.use(Toasted, {
    position: "bottom-right",
    theme: "bubble",
    duration: 3000,
    iconPack: "fontawesome",
})