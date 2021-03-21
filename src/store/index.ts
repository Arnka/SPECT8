import Vue from 'vue';
import Vuex from 'vuex';

import Auth from "./modules/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [
      { 
        title: 'FC Bayern vs Real Madrid',
        id: 1,
        user: 'Rhein Stars Koln',
        poster: require('@/assets/thumb2.png'),
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo! Vel voluptate amet eveniet dignissimos modi suscipit reprehenderit neque asperiores! Sapiente reprehenderit quisquam tempore laudantium fugit aut ratione cupiditate molestias, similique vitae non suscipit dicta deleniti enim fugiat error, nihil sit corrupti. Totam, harum est cupiditate soluta accusamus quaerat inventore nemo officia quod sapiente blanditiis odit optio porro nostrum ex.',
        tag: 'Basketball',
      },
      { 
        title: 'Paris Saint-Germain vs Manchester United',
        id: 2,
        user: 'Rhein Stars Koln',
        poster: require('../assets/thumb3.png'),
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo! Vel voluptate amet eveniet dignissimos modi suscipit reprehenderit neque asperiores! Sapiente reprehenderit quisquam tempore laudantium fugit aut ratione cupiditate molestias, similique vitae non suscipit dicta deleniti enim fugiat error, nihil sit corrupti. Totam, harum est cupiditate soluta accusamus quaerat inventore nemo officia quod sapiente blanditiis odit optio porro nostrum ex.',
        tag: 'Basketball',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth
  },
});
