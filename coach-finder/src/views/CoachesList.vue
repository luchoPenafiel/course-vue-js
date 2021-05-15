<template>
  <section>FILTER</section>
  <section>
    <card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.rate"
          :areas="coach.areas"
        />
      </ul>
      <p v-else>No coaches found.</p>
    </card>
  </section>
</template>

<script>
import CoachItem from '../components/CoachItem/CoachItem.vue';
import Card from '../components/Card/Card.vue';

export default {
  components: { CoachItem, Card },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
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
