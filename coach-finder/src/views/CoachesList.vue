<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="getCoaches">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasCoaches && !isLoading">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <p v-if="!hasCoaches && !isLoading">No coaches found.</p>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../components/CoachItem/CoachItem.vue';
import CoachFilter from '../components/CoachFilter/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) return true;
        if (this.activeFilters.backend && coach.areas.includes('backend')) return true;
        if (this.activeFilters.career && coach.areas.includes('career')) return true;

        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  created() {
    this.getCoaches();
  },
  methods: {
    setFilters(updatedFilter) {
      this.activeFilters = updatedFilter;
    },
    async getCoaches() {
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
