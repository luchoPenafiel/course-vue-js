const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + "Peñafiel";
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log("fullname");
    //   if (this.name === "") {
    //     return "";
    //   } else {
    //     return this.name + " " + "Peñafiel";
    //   }
    // },
  },
  methods: {
    ouputFullName() {
      console.log("ouputFullName");

      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Peñafiel";
      }
    },
    submitForm() {
      console.log("Submitted!");
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      // this.name = event.target.value + " " + lastName;
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
