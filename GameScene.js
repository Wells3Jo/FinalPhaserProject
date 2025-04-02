class GameScene extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    preload(){
        this.load.image("bg", "assets/images/background1.png");
  
    }

    create() {
        this.add.image(0,0,"bg").setOrigin(0,0);
        
    }

    update() {

    }


}
