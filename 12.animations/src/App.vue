<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  

<script>
// import UserList from './components/ListaData';

// export default {
//   components: { UserList },
//   data() {
//     return { dialogIsVisible: false, showParagraphs: true };
//   },
//   methods: {
//     beforeEnter(el) {
//       console.log('==> Before enter')
//       console.log('==> Before enter: el', el)
//       el.style.opacity = 0;
//     },
//     enter(el, done) {
//       let round = 1
//       const interval = setInterval(() => {
//         console.log('==> Round', round);

//         el.style.opacity = round * 0.01;
//         round++;
//         if (round > 100) {
//           clearInterval(interval)
//           done();
//         }
//       }, 20)
//     },
//     beforeLeave() {
//       console.log('Before leave')
//     },
//     showDialog() {
//       this.dialogIsVisible = true;
//     },
//     hideDialog() {
//       this.dialogIsVisible = false;
//     },
//     toggleP() {
//       this.showParagraphs = !this.showParagraphs
//     }
//   },
// };
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.5s linear;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0px);

}
.route-leave-active {
  transition: all 0.5s linear;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>