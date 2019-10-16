import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: null
  },
  getters: {
    GET_TOKEN: state => {
      return state.token;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    Login: async (context, payload) => {
      await Axios.post("https://ionic-mee.glitch.me/login", {
        name: payload.name,
        password: payload.password
      })
        .then(function(response) {
          context.commit("SET_TOKEN", response.data);
          window.location.replace("#/dashboard/");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
