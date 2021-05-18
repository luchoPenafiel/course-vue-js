export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state: any, payload: any) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    // login() {},
    async signUp(context: any, payload: any) {
      const response: any = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2xZixgsVBuNxZ90_gcIaFKWB6EIazoBY`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        },
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error(response);
        throw new Error(response.message || 'Problemas en el login');
      }

      console.log('==> responseData', responseData);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
  getters: {
    userId(state: any) {
      return state.userId;
    },
  },
};
