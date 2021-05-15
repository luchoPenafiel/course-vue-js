type Coach = {
  id: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number;
};

type State = {
  coaches: Coach[];
};

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    registerCoach(state: State, payload: Coach) {
      state.coaches.push(payload);
    },
  },
  actions: {
    registerCoach(context: any, payload: Coach) {
      const coach = {
        firstName: payload.firstName,
        lastName: payload.firstName,
        areas: payload.areas,
        description: payload.description,
        hourlyRate: payload.hourlyRate,
        id: context.rootGetters.userId,
      };

      context.commit('registerCoach', coach);
    },
  },
  getters: {
    coaches({ coaches }: State) {
      return coaches;
    },
    hasCoaches({ coaches }: State) {
      return coaches && coaches.length > 0;
    },
    isCoach(state: any, getters: any, rootState: any, rootGetters: any) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;

      return coaches.some((coach: any) => coach.id === userId);
    },
  },
};
