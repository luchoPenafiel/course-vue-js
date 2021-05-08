<template>
  <header>Counter: {{ finalCounter }}</header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['finalCounter'])
  }
};
</script>