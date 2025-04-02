export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'dude');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
    }

    preload(){
        this.load.atlas('idle', 'assets/images/Player/_Idle.png', { frameWidth: 120, frameHeight: 80, endFrame: 23 });
    }
    create(){

    }
    update(){
        if (left.isDown) {
            moveLeft()
        }
        else if (right.isDown) {
            moveRight()
        } else
            this.player.setVelocityX(0);
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