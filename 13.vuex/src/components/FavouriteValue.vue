<template>
  <header>Counter: {{ finalCounter }}</header>
  <p>We do more...</p>
  <hr>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['finalCounter'])
  }
};
</script>