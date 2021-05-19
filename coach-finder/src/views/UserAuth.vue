<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model.trim="password" />
      </div>

      <p v-if="!formIsValid">Please, check your data.</p>

      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ submitWitchCaption }} instead</base-button>
    </form>
    <p v-if="!!error">{{ error }}</p>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sing up';
      }
    },
    submitWitchCaption() {
      if (this.mode === 'login') {
        return 'Sing up';
      } else {
        return 'Login';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;

      if (this.email === '' || this.password.length < 6) {
        this.formIsValid = false;

        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          console.log('Login OK');
          this.$router.replace('/');
        } else {
          await this.$store.dispatch('signUp', {
            email: this.email,
            password: this.password,
          });
          console.log('Sign up OK');
          this.$router.replace('/');
        }
      } catch (err) {
        this.error = err.message || 'Faild to login, try later.';
      } finally {
        this.isLoading = false;
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
