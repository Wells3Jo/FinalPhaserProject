
// You can write more code here

/* START OF COMPILED CODE */

class GameScene extends Phaser.Scene {

	constructor() {
		super("GameScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("asset-pack-level-1", "asset-pack-level-1.json");
		this.load.pack("asset-pack-platform", "assets/images/GameScene/asset-pack-platform.json");
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(213, 136, "background1");
		background1.scaleY = 0.7;

		// background2
		const background2 = this.add.image(213, 136, "background2");
		background2.scaleY = 0.7;

		// background3
		const background3 = this.add.image(213, 136, "background3");
		background3.scaleY = 0.7;

		// background6
		const background6 = this.add.image(213, 136, "background6");
		background6.scaleY = 0.7;

		// background5
		const background5 = this.add.image(213, 136, "background5");
		background5.scaleY = 0.7;
		background5.flipY = true;

		this.background1 = background1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

 		//this.cameras.main.setSize(400, 270);
        const music = this.sound.add("gameMusic");
        music.play()
        this.player = this.scene.launch("Player");
        this.necromancer = this.scene.launch("NecromancerScene");
	 	//this.cameras.main.startFollow(this.player);


        this.physics.add.overlap(this.player, this.skeleton, this.player.hit);
	}

    update(){
        //this.health.setText(`Health: ${this.player.currentHealth}`);
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
