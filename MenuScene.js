class MenuScene extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
      //Menu Background
      this.load.image("bg", "assets/images/MenuScene/main_background.png");

      //Menu music
      this.load.audio('menuMusic', [
        'assets/sounds/MenuScene/menuMusic.mp3'
    ]);

    //Menu interact
    this.load.image("menuInteract", "assets/images/MenuScene/RectangleBox_96x96.png");
    this.load.image("playButton", "assets/images/MenuScene/Button_52x14.png");
    }

    create() {
      //Menu Background
      this.add.image(0,0,"bg").setOrigin(0,0);

      //Menu music
      const music = this.sound.add('menuMusic');
      music.play();
      this.sound.pauseOnBlur = true;

      //Menu interact
      const interact = this.add.image(500,300,"menuInteract");
      interact.scale = 2;
      let playBtn = this.add.image(500,300,"playButton").scale = 2;
      this.add.text(480, 290, 'Play');
      playBtn.setInteractive();

      playBtn.on('pointerdown', () => {
        playBtn.setPosition(
                Phaser.Math.Between(100, 700),
                Phaser.Math.Between(100, 500)
            );
      });

    }

    update() {
    
    }

    playButton(){
      
    }


}



