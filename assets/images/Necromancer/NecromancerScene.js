
// You can write more code here

/* START OF COMPILED CODE */

class NecromancerScene extends Phaser.Scene {

	constructor() {
		super("NecromancerScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("asset-pack-necromancer", "assets/images/Necromancer/asset-pack-necromancer.json");
	}

	/** @returns {void} */
	editorCreate() {

		// necromancer
		const necromancer = this.physics.add.sprite(349, 18, "Necromancer_creativekind-Sheet", 0);
		necromancer.setInteractive(new Phaser.Geom.Rectangle(0, 0, 160, 128), Phaser.Geom.Rectangle.Contains);
		necromancer.flipX = true;
		necromancer.body.allowGravity = false;
		necromancer.body.collideWorldBounds = true;
		necromancer.body.checkCollision.none = true;
		necromancer.body.setOffset(50, 55);
		necromancer.body.setSize(60, 60, false);
		necromancer.play("idle_Necromancer");

		this.necromancer = necromancer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	necromancer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		//this.necromancer.setFlipX(false);
	}

	update () {

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
