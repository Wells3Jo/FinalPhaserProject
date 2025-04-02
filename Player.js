class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'Texture');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
    }

    preload(){
        //this.load.atlas('idle', 'assets/images/Player/_Idle.png', { frameWidth: 120, frameHeight: 80, endFrame: 23 });
        this.load.image("sword", "assets/images/broadsword.png");
    }
    create(){
        //this.add.atlas(0,0,"idle").setOrigin(0,0);
        this.add.image(0,0,"sword").setOrigin(0,0);
        var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceBar.on('down', listener)
        //var keyObjects = scene.input.keyboard.addKeys('W,S,A,D', enableCapture, emitOnRepeat);
        this.input.keyboard.on('keydown-A', this.moveLeft(), this);
        this.input.keyboard.on('keydown-A', event =>
            {
    
                console.log('Hello from the A Key!');
    
            });

    }
   update(){

    }


    moveLeft() {
        this.player.setVelocityX(-this.playerSpeed);

    }

    moveRight(){
        this.player.setVelocityX(this.playerSpeed);
    }

    attack(){

    }

    idle(){

    }

    jump() {
        
    }
}