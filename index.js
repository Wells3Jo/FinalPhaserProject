var gameSettings = {
    playerSpeed: 200,
    playerHealth: 20,
    playerDamage: 5,
    playerDefense: 1,
}
var config = {
    width: 400,
    height: 270,
    title: "Fantasy Survivors",
    parent: "gameContainer",
    backgroundColor: 0x000000,
    scene: [MenuScene, GameScene, Player, SkeletonScene, NecromancerScene],
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



const game = new Phaser.Game(config);

