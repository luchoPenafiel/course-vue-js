const API_KEY = 'AIzaSyB2xZixgsVBuNxZ90_gcIaFKWB6EIazoBY'; // TODO: put in .env, not here.

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
    async login(context: any, payload: any) {
      const response: any = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
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

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    async signUp(context: any, payload: any) {
      const response: any = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error(response);
        throw new Error(response.message || 'Problemas en el sing up');
      }

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
  getters: {
    userId(state: any): string {
      return state.userId;
    },
    token(state: any): string {
      return state.token;
    },
    isAuth(state: any): boolean {
      return !!state.token;
    },
  },
};
