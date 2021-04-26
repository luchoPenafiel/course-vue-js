<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="name">
    </div>

    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone">
    </div>

    <div>
      <label>E-mail</label>
      <input type="email" v-model="email">
    </div>

    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
  export default {
    emits: ['add-friend'],
    data() {
      return {
        name: '',
        phone: '',
        email: ''
      }
    },
    methods: {
      submitData() {
        this.$emit('add-friend', this.name, this.phone, this.email);
        this.name = ''
      }
    }
  }
</script>