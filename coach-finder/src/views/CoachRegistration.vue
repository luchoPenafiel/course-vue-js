<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <registration-form @submit-form="submitForm"></registration-form>
    </base-card>
  </section>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.vue';

export default {
  components: {
    RegistrationForm,
  },
  methods: {
    submitForm(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>
