class MenuScene extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
      this.load.image("bg", "assets/images/MenuScene/main_background.png");
      this.load.audio('menu', [
        'assets/sounds/MenuScene/Pixel 11.mp3',
        'assets/sounds/MenuScene/Pixel 11.ogg'
    ]);
    }

    create() {
      this.add.image(0,0,"bg").setOrigin(0,0);

      const music = this.sound.add('menu');

      music.play();

      this.sound.pauseOnBlur = true;
    }

    update() {

    }




}



