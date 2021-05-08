<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch({
        type: 'incrase',
        value: 1
      });
    }
  }
}
</script>

<style>

</style>