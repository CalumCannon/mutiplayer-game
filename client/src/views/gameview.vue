<template lang="html">
<div class="container">
  <canvas id="myCanvas" width="600" height="300"></canvas>
  <select class="selector" name="" v-model:playerindex="playerindex">
    <option selected value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>
</template>

<script>
import Player from '@/services/player.js';
import Input from '@/services/input.js';
import Renderer from '@/services/canvasRenderer.js';
import GameService from '@/services/gameService.js';

export default {
  name: 'gameview',
  props: ['selectedPlayers'],
  data(){
    return {
      players : [],
      player : {},
      renderer : {},
      input : {},
      playerindex : 0,
    }
  },
  mounted(){
    this.initRenderer();
    this.selectPlayer();
    document.querySelector('.selector').addEventListener('change', () => {
      console.log("CHANGE");
      this.selectPlayer();
    });//

    //Delayed render : BECOS OF ERROR
    setTimeout(() => {
        this.initPlayerObjects();
        //this.selectPlayer(this.playerindex);
    }, 500);

    setTimeout(() => {
        //this.initPlayerObjects();
        this.initInput();
        this.renderer.renderPlayers(this.players);
    }, 1000);

    setTimeout(() => {
      this.renderPlayers();
    },1000);


    setTimeout(() => {
      console.log("LOOP ENABLED");
      this.savePlayerPositionLoop();
    },3000);


  },
  methods:{
    initPlayerObjects(){
      this.selectedPlayers.forEach((player) => {
      this.players.push(new Player(player.name, player.avatar ,player.wins, player.losses, player._id, player.xpos, player.ypos));

      setTimeout(() => {
        initPlayerObjects();
      }, 1000);

      });
    },

    savePlayerPositionLoop(){
      setTimeout(() => {
        this.savePlayerPosition();
        this.savePlayerPositionLoop();
        console.log("POSITION SAVED");
      },5000);
    },

    initRenderer(){
      const canvas = document.querySelector('#myCanvas');
      const ctx =  canvas.getContext("2d");
      this.renderer = new Renderer(canvas, ctx);
    },

    renderPlayers(){
      this.renderer.renderPlayers(this.players);
    },

    savePlayerPosition(){
  //  event.preventDefault()
    //eventBus.$emit('player-added')

    const player = {
      // _id: {
      //        "$oid": "5ce6e4eafb6fc01bf23b3dfe"
      // },

      name: this.player.name,
      wins: 0,
      losses: 0,
      avatar: this.player.avatar.src,
      xpos: this.player.xpos,
      ypos: this.player.ypos,
      _id: this.player._id
    }
    GameService.updatePlayerPosition(this.player._id,player)
    .then((res) => {
    //  eventBus.$emit('add-player', res)
    })
  },

    initInput(){
      //document.addEventListener('keydown',press)
      document.addEventListener('keydown',event =>{
        this.movePlayerX(xPress(event));
        this.movePlayerY(yPress(event));
        this.renderPlayers();
        //this.savePlayerPosition();
      });

      function yPress(e){
        let ypos = 0;
        //console.log();
        if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
          ypos -= 1;
        }
        if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
          ypos += 1;
        }
        return ypos;
        //renderer.renderPlayers(players);
      }

      function xPress(e){
        let xpos = 0;
        if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
        xpos += 1;
        }
        if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
        xpos -= 1;
        }
        return xpos;
      }
    },
    selectPlayer(){
      console.log("PLAYER SELECTED");
      this.player = this.players[this.playerindex-1];
    },
    movePlayerX(val){
      this.player.moveX(val)
    },
    movePlayerY(val){
      this.player.moveY(val)
    //  this.renderPlayers(this.players);
    },
  }
}
</script>

<style lang="css" scoped>
.container{
  background-color: grey;
}

</style>
