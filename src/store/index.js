import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import cart from "./cart"
Vue.use(Vuex);


const store = new Vuex.Store({

    modules:{
        home,
        cart
    }
})


export default store;
