<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @add-friend="addFriend"></add-friend>
    <ul>
      <friend
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email="friend.email"
        @toggle-favorite="toggleFavoriteStates"
        @delete-friend="deleteFriend"
      ></friend>
    </ul>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        friends: [
          {
            id: 'Lucho',
            name: 'Lucho',
            phone: '123',
            email: 'lucho@lucho.com'
          },
          {
            id: 'asfafa',
            name: 'Jhon Kite',
            phone: '987',
            email: 'asfas@asda.com'
          }
        ]
      }
    },
    methods: {
      toggleFavoriteStates(id) {
        console.log('this works', id)
      },
      addFriend(name, phone, email) {
        const newFriend = {
          id: new Date().toISOString(),
          name,
          phone,
          email
        }

        this.friends.push(newFriend);
      },
      deleteFriend(friendId) {
        const newFriendsArr = this.friends.filter((f) => f.id !== friendId);

        this.friends = newFriendsArr;
      }
    }
  }
</script>