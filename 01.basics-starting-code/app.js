const app = Vue.createApp({
  data() {
    return {
      couserGoalA: "Finish the course and lear Vue",
      couserGoalB: "Master Vue and create amazing apps.",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.couserGoalA;
      } else {
        return this.couserGoalB;
      }
    },
  },
});

app.mount("#user-goal");
