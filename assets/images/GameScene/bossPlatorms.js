
// You can write more code here

/* START OF COMPILED CODE */

class bossPlatorms extends Phaser.Scene {

	constructor() {
		super("bossPlatorms");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// ground162
		const ground162 = this.physics.add.image(92, 261, "ground", 162);
		ground162.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		ground162.body.allowGravity = false;
		ground162.body.collideWorldBounds = true;
		ground162.body.setSize(16, 16, false);

		// ground163
		const ground163 = this.physics.add.image(108, 261, "ground", 163);
		ground163.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		ground163.body.allowGravity = false;
		ground163.body.collideWorldBounds = true;
		ground163.body.setSize(16, 16, false);

		// ground164
		const ground164 = this.physics.add.image(124, 261, "ground", 164);
		ground164.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		ground164.body.collideWorldBounds = true;
		ground164.body.setSize(16, 16, false);

		// ground165
		const ground165 = this.physics.add.image(140, 261, "ground", 165);
		ground165.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		ground165.body.collideWorldBounds = true;
		ground165.body.setSize(16, 16, false);

		// ground170
		const ground170 = this.physics.add.image(155, 261, "ground", 170);
		ground170.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		ground170.body.collideWorldBounds = true;
		ground170.body.setSize(16, 16, false);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
