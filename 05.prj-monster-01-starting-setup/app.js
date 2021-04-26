function getRandomAttack(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      mosterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    mosterBarStyle() {
      if (this.mosterHealth < 0) {
        return { width: 0 + '%' };
      } else {
        return { width: this.mosterHealth + '%' };
      }
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: 0 + '%' };
      } else {
        return { width: this.playerHealth + '%' };
      }
    },
    specialAttackButton() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    mosterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.mosterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
  },
  methods: {
    startGame() {
      this.mosterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMoster() {
      this.currentRound++;

      const attackValue = getRandomAttack(12, 5);
      this.mosterHealth = this.mosterHealth - attackValue;

      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomAttack(15, 8);
      this.playerHealth = this.playerHealth - attackValue;

      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;

      const attackValue = getRandomAttack(25, 10);
      this.mosterHealth = this.mosterHealth - attackValue;

      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healthPlayer() {
      this.currentRound++;

      const health = getRandomAttack(20, 8);

      if (this.playerHealth + health > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + health;
      }

      this.addLogMessage('player', 'heal', health);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
