export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state: any, payload: any) {
      state.requests.push(payload);
    },
  },
  actions: {
    addRequest(context: any, payload: any) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        email: payload.email,
        message: payload.message,
      };

      context.commit('addRequest', newRequest);
    },
  },
  getters: {
    requests(state: any, getters: any, rootState: any, rootGetters: any) {
      const coachId = rootGetters.userId;
      return state.requests.filter((req: any) => req.coachId === coachId);
    },
    hasRequests(state: any, getters: any) {
      return getters.requests && getters.requests.length > 0;
    },
  },
};
