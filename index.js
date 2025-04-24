var gameSettings = {
    playerSpeed: 200,
    playerHealth: 20,
    playerDamage: 5,
    playerDefense: 1,
}
var config = {
    width: 1024,
    height: 576,
    title: "Slay the Necromancer!",
    parent: "gameContainer",
    backgroundColor: 0x000000,
    scene: [Player],
    pixelArt: true,
  // 1.1 set the physics to arcade
  physics: {
    default: "arcade",
    arcade:{
        debug: true,
        gravity: {
          x: 0,
          y: 300
        },
    }
  },
  input: {
    queue: true
  },
}



var game = new Phaser.Game(config);

