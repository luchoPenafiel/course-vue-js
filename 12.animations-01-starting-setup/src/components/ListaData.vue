<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
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

  .user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 1s linear;
  }
  
  .user-list-enter-to,
  .user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  .user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>