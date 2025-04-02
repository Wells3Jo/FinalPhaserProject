var gameSettings = {
    playerSpeed: 200,
    playerHealth: 20,
    playerDamage: 5,
    playerDefense: 1,
}
var config = {
    width: 1280,
    height: 720,
    title: "Kill the Necromancer!",
    parent: "GameContainer",
    backgroundColor: 0x000000,
    scene: [MenuScene],
  // 1.1 set the physics to arcade
  physics: {
    default: "arcade",
    arcade:{
        debug: false
    }
  }
}



var game = new Phaser.Game(config);

