
// You can write more code here

/* START OF COMPILED CODE */

class PrefabPlayer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 40, y ?? 25.97474926183879);

		// player
		const player = scene.physics.add.sprite(0, 204, "_Idle", 0);
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 80), Phaser.Geom.Rectangle.Contains);
		player.body.collideWorldBounds = true;
		player.body.onWorldBounds = true;
		player.body.setOffset(43, 41);
		player.body.setSize(23, 39, false);
		player.play("player_Idle");
		this.add(player);

		this.player = player;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;

	/* START-USER-CODE */
	create() {


		this.editorCreate();



	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
