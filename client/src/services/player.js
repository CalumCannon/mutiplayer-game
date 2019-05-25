const Player = function(name, img, wins, losses,id, x, y){
  this.nickname = name;
  this.avatar = new Image();
  this.avatar.src = img;
  this.position = 1;
  this.targetPosition = 1;
  this.wins = wins;
  this.losses = losses;
  this.xpos = x;
  this.ypos = y;
  this.up;
  this.down;
  this.left;
  this.right;
  this._id = id;
}

Player.prototype.setTargetPositon = function(targetPosition){
  this.targetPosition = this.position + targetPosition;

  this.moveForward();

  //Lower Limit
  if(this.position < 1){
    this.position = 1;
  }
  //Upper Limit
  if(this.position > 36){
    this.position = 36;
  }

}

Player.prototype.reachedTarget = function(){

  if(this.targetPosition == this.position){
      console.log("PLAYER REACHED TARGET", this.targetPosition, this.position);
    return true;
  }
  console.log("PLAYER NOT AT TARGET POS ", this.targetPosition, this.position);
  return false;
}


Player.prototype.moveY = function(yIN){
  this.ypos += yIN*3;
}

Player.prototype.moveX = function(xIN){
  this.xpos += xIN*3;
}


module.exports = Player;
