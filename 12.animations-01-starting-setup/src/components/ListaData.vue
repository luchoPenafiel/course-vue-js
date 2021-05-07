<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </ul>
  <div>
    <input type="text" ref="userNameInput">
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      users: ['name1', 'name2', 'name3', 'name4']
    }
  },
  methods: {
    removeUser(userName) {
      this.users = this.users.filter((u) => u !== userName);
    },
    addUser() {
      const enterUserName = this.$refs.userNameInput.value;
      this.users.unshift(enterUserName)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 20px;
    border: 1px solid gray;
    text-align: center;
  }
</style>