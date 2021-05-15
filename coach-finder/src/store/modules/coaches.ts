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
    setCoaches(state: State, payload: Coach[]) {
      state.coaches = payload;
    },
  },

  actions: {
    async registerCoach(context: any, payload: Coach) {
      const coachId = context.rootGetters.userId;
      const coach = {
        firstName: payload.firstName,
        areas: payload.areas,
        lastName: payload.firstName,
        description: payload.description,
        hourlyRate: payload.hourlyRate,
      };

      const response = await fetch(`https://vue-course-de7fa-default-rtdb.firebaseio.com/coaches/${coachId}.json`, {
        method: 'PUT',
        body: JSON.stringify(coach),
      });

      // const responseData = await response.json();

      if (!response.ok) {
        // TODO: handle error
      }

      context.commit('registerCoach', { ...coach, id: coachId });
    },
    async loadCoaches(context: any) {
      const response = await fetch('https://vue-course-de7fa-default-rtdb.firebaseio.com/coaches.json');
      const data = await response.json();

      const coaches = [];

      for (const key in data) {
        const coach = {
          id: key,
          firstName: data[key].firstName,
          areas: data[key].areas,
          lastName: data[key].firstName,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
        };

        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
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
