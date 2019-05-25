const createRenderer = function(canvasElement, context) {

  const renderer = {

    renderPlayer(player, offset = 0){
      //Canvas
      var canvas = canvasElement;
      var ctx = context;

      //BOUDS
      // if(x == 0){
      //   x = 6;
      // }

    //  player.setCoordinates(xPos,yPos);

      //RENDER
      ctx.drawImage(player.avatar, player.xpos,  player.ypos);

      //
      // let name = player.nickname;
      // ctx.font = "bold 30px Arial";
      // ctx.fillStyle = "black";
      // ctx.textAlign = "left";
      // ctx.fillText(name, xPos,yPos + 50);
      // ctx.fillStyle = "black";
      // ctx.strokeText(name, xPos, yPos + 50);

      // //Return true if player has reached target
      // if(player.position < player.targetPosition){
      //   return false;
      // }
      // return true;

    },

    clear(){
      //Canvas
      var canvas = canvasElement;
      var ctx = context;

      ctx.clearRect(0,0,canvas.width, canvas.height);

    },

    renderPlayers(inArray){
      this.clear();
      //console.log(inArray, "RENDERING");
      for(let i=0; i<inArray.length; i++){
        this.renderPlayer(inArray[i]);
      }

    },

  }


  return renderer;
}

module.exports = createRenderer;
