<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading && !error">Loading data....</p>
      <ul v-else-if="!isLoading && !error && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isLoading && !error">There are no data to show</p>
      <p v-if="error">Ocurrio un error.</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: true,
      error: false
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = false;
      
      fetch('https://vue-course-de7fa-default-rtdb.firebaseio.com/surveys')
        .then((response) => response.json())
        .then((data) => {
          const results = [];

          for (const id in data) {
            results.push({
              id: id,
              name: data[id].userName,
              rating: data[id].rating,
            })
          }

          this.results = results;
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = true;
          this.isLoading = false;

          console.log(error)
        });
    },
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>