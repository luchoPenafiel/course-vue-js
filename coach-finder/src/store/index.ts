// Vendor
import { createStore } from 'vuex';

// Modules
import coaches from './modules/coaches';
import requests from './modules/requests';

const store = createStore({
  modules: {
    coaches,
    requests,
  },
  state() {
    return {
      userId: 'c1241',
    };
  },
  getters: {
    userId(state: any) {
      return state.userId;
    },
  },
});

export default store;
