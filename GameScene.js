class GameScene extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    preload(){
        this.load.image("bg", "assets/images/background1.png");
  
    }

    create() {
        this.add.image(0,0,"bg").setOrigin(0,0);
        this.player = new Player(this, 100, 450)
    }

    update() {

    }


}
