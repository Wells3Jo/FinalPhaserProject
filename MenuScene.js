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
      this.add.image(500,300,"playButton").scale = 2;
      this.add.text(480, 290, 'Play');
      
      //Adds a player controller to the scene
      this.player = this.physics.add.existing(new Player(this, 100, 100));
      this.player.body.allowGravity = true;
      this.player.setMaxVelocity(0, 200);
      this.input.manager.enabled = true;

      this.input.once('pointerdown', function () {

          this.scene.start('sceneB');
          //music.stop();

      }, this);
    }

    update() {
    
    }

    playButton(){
      
    }


}



