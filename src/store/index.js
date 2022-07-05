import Vue from "vue";
import Vuex from "vuex";
import days from "./modules/days.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    days
  },
});
