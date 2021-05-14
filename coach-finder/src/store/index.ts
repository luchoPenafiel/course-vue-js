// Vendor
import { createStore } from 'vuex';

// Modules
import coaches from './modules/coaches';

const store = createStore({
  modules: {
    coaches,
  },
});

export default store;
