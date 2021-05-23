<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import TheHeader from './components/Header/Header.vue';

export default {
  components: { TheHeader },
  created() {
    this.$store.dispatch('autoLogin');
  },
};
</script>

<style lang="scss">
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
