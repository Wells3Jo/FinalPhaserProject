
// You can write more code here

/* START OF COMPILED CODE */

class PrefabBloodyPlatform extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 112, y ?? 240, texture || "ground", frame ?? 115);

		scene.physics.add.existing(this, true);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.checkCollision.down = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(16, 16, false);

		/* START-USER-CTR-CODE */
		// Write your code here.

		//import PrefabBloodyPlatform from "PrefabBloodyPlatform.js"

		//this.group.get(90,150);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
