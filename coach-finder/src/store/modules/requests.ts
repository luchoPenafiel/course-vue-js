export default {
  namespaced: true,
  state(): any {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state: any, payload: any): any {
      state.requests.push(payload);
    },
    setRequests(state: any, payload: any) {
      state.requests = payload;
    },
  },
  actions: {
    async addRequest(context: any, payload: any) {
      const newRequest = {
        email: payload.email,
        message: payload.message,
      };

      const response = await fetch(
        `https://vue-course-de7fa-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
        },
      );

      const responseData = await response.json();

      const newRequestWithIDs = { ...newRequest, id: responseData.name, coachId: payload.coachId };

      context.commit('addRequest', newRequestWithIDs);
    },
    async loadRquests(context: any) {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;

      const response = await fetch(
        `https://vue-course-de7fa-default-rtdb.firebaseio.com/requests/${userId}.json?auth=${token}`,
      );
      const responseData = await response.json();

      const requests = [];

      for (const key in responseData) {
        const element = {
          id: key,
          coachId: userId,
          email: responseData[key].email,
          message: responseData[key].message,
        };

        requests.push(element);
      }

      context.commit('setRequests', requests);
    },
  },
  getters: {
    requests(state: any, getters: any, rootState: any, rootGetters: any): any {
      const coachId = rootGetters.userId;
      return state.requests.filter((req: any) => req.coachId === coachId);
    },
    hasRequests(state: any, getters: any): any {
      return getters.requests && getters.requests.length > 0;
    },
  },
};
