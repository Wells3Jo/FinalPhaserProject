
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

	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(200, 133, "background1");
		background1.scaleX = 0.95;
		background1.scaleY = 0.7;

		// background2
		const background2 = this.add.image(209, 101, "background2");
		background2.scaleY = 0.7;

		// background3
		this.add.image(211, 135, "background3");

		// background6
		const background6 = this.add.image(235, 79, "background6");
		background6.scaleX = 1.1;

		// background5
		const background5 = this.add.image(212, 112, "background5");
		background5.flipY = true;

		this.background1 = background1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background1;

	/* START-USER-CODE */

	// Write your code here

	create() {
        this.scene.launch("Player");
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
