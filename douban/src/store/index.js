import Vue from 'vue'
import Vuex from 'vuex'

import home from "./modules/home";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  actions,
  getters
})
