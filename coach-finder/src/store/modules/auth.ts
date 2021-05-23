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
      return context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    },
    async signUp(context: any, payload: any) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'signUp',
      });
    },
    logout(context: any) {
      context.commit('setUser', {
        userId: null,
        token: null,
        tokenExpiration: null,
      });
    },
    async auth(context: any, payload: any) {
      const mode = payload.mode === 'login' ? 'signInWithPassword' : 'signUp';

      const response: any = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
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
        throw new Error(response.message || `Problemas en el ${mode}`);
      }

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    autoLogin(context: any) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null,
        });
      }
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
