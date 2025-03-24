class Scene1 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    preload(){
        this.load.image("bg", "public/assets/bg.png");
  
    }

    create() {
        this.add.image(0,0,"bg").setOrigin(0,0);
    }

    update() {

    }


}