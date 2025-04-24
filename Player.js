
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.Scene {

	constructor() {
		super("Player");

		/* START-USER-CTR-CODE */

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("player-asset-pack", "assets/images/Player/player-asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// attack
		const attack = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// left
		const left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// right
		const right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// up
		const up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// down
		const down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		// roll
		const roll = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

		// player
		const player = this.physics.add.sprite(59, 536, "_Idle", 0);
		player.name = "player";
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 20, 38), Phaser.Geom.Rectangle.Contains);
		player.body.collideWorldBounds = true;
		player.body.setSize(20, 38, false);
		player.play("player_Idle");

		this.attack = attack;
		this.left = left;
		this.right = right;
		this.up = up;
		this.down = down;
		this.roll = roll;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	attack;
	/** @type {Phaser.Input.Keyboard.Key} */
	left;
	/** @type {Phaser.Input.Keyboard.Key} */
	right;
	/** @type {Phaser.Input.Keyboard.Key} */
	up;
	/** @type {Phaser.Input.Keyboard.Key} */
	down;
	/** @type {Phaser.Input.Keyboard.Key} */
	roll;

	/* START-USER-CODE */

	// Write your code here
	create() {


		this.editorCreate();
	}

	update() {

		/*this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + "player_Attack", () => {
		this.player.play("player_Idle");
		})*/
		if (this.right.isDown){
			this.player.setVelocityX(150);
			this.player.play("player_Run");
			this.player.setFlipX(false);
		}
		else if (this.left.isDown) {
			this.player.setVelocityX(-150);
			this.player.play("player_Run");
			this.player.setFlipX(true);
		}
		else {
			this.player.setVelocityX(0);
		
		}

		/*if (this.up.isDown){
			this.player.setVelocityY(-150);
		} else {
			this.player.setVelocityY(175);
		}*/

		/*if (this.attack.isDown) {
			this.player.play("player_Attack");
		} else {
			this.player.play("player_Idle");
		}*/
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
