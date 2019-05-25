<template>
  <div id="app">
    <GameView :selectedPlayers="this.databasePlayers"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GameService from '@/services/gameService.js'
import GameView from '@/views/gameview.vue'

export default {
  name: 'app',
  data(){
    return{
      databasePlayers: [],
    }
  },
  components: {
    HelloWorld,
    GameView
  },
  methods: {
    fetchPlayers(){
      GameService.getPlayers()
      .then((players) => this.databasePlayers = players)
    },

    remove(option){
      const index = this.chosenPlayers.indexOf(option)
      this.chosenPlayers.splice(index, 1)
    }
  },

  mounted(){
    this.fetchPlayers();
    //eventBus.$on('add-player', this.fetchPlayers);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
