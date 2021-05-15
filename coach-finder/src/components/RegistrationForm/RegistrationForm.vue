<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.value" @blur="validateForm('firstName')" />
      <p v-if="!firstName.isValid">Firstname is invalid.</p>
    </div>

    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName.value" @blur="validateForm('lastName')" />
      <p v-if="!lastName.isValid">Lastname is invalid.</p>
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.value"
        @blur="validateForm('description')"
      ></textarea>
      <p v-if="!description.isValid">Description is invalid.</p>
    </div>

    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Rate</label>
      <input type="number" id="rate" v-model.number="rate.value" @blur="validateForm('rate')" />
      <p v-if="!rate.isValid">Rate is invalid.</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="validateForm('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="validateForm('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="career"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="validateForm('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">Areas is invalid.</p>
    </div>

    <p v-if="!formIsValid">Please check your data.</p>
    <base-button v-if="!isCoach">Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['submit-form'],
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    validateForm(input) {
      this.formIsValid = true;

      if (input) {
        this[input].isValid = true;
        if (this[input].value === '') {
          this[input].isValid = false;
          this.formIsValid = false;
        }
        return;
      }

      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }

      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }

      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }

      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }

      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      } else {
        const formData = {
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          description: this.description.value,
          hourlyRate: this.rate.value,
          areas: this.areas.value,
        };

        this.$emit('submit-form', formData);
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label,
.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
