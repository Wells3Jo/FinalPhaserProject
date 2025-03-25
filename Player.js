export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'dude');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
    }

    moveLeft() {

    }

    moveRight(){

    }

    attack(){

    }

    idle(){

    }

    jump() {
        
    }
}