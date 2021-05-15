// Vendor
import { createStore } from 'vuex';

// Modules
import coaches from './modules/coaches';

const store = createStore({
  modules: {
    coaches,
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
