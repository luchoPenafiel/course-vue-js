<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <badge v-for="area in areas" :key="area" :type="area" :title="area"></badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Badge from '../components/Badge/Badge.vue';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Badge,
  },
  data() {
    return {
      selectedCoach: undefined,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find((coach) => coach.id === this.id);
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    rate() {
      return this.selectedCoach.rate;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    description() {
      return this.selectedCoach.description;
    },
    areas() {
      return this.selectedCoach.areas;
    },
  },
});
</script>
