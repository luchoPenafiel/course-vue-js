<template>
  <the-header title="The Header"></the-header>
  <learning-resources :resources="storedResources"></learning-resources>
</template>

<script>
import LearningResources from './components/learning-resources/StoredResources';
import TheHeader from './components/layouts/TheHeader'

export default {
  components: { LearningResources, TheHeader },
  data() {
    return {
      storedResources: [
        {
          id: 1,
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 2,
          title: 'Google',
          description: 'Of course',
          link: 'https://google.com'
        }
      ]
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>