// You can write more code here
	let isRunnin = true;
	let isRolling = true;
	let isJumping = true;
	let isAttacking = true;
	let isGrounded = true;
	let isFalling = true;
	let maxHealth = 20;
	let currentHealth = maxHealth;

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
		const player = this.physics.add.sprite(39, 230, "_Idle", 0);
		player.name = "player";
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 80), Phaser.Geom.Rectangle.Contains);
		player.body.collideWorldBounds = true;
		player.body.onWorldBounds = true;
		player.body.setOffset(43, 40);
		player.body.setSize(23, 39, false);
		player.play("player_Idle");

		this.player = player;
		this.attack = attack;
		this.left = left;
		this.right = right;
		this.up = up;
		this.down = down;
		this.roll = roll;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
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

		this.playerMiss = this.sound.add("27_sword_miss_1");
		this.playerWalk = this.sound.add("25_orc_walk_stone_1")


	}
	update() {

		//this.health.setText(`Health: ${this.currentHealth}`);
		if (this.player.body.velocity.x == 0) {
			this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.player.play("player_Idle");
			})
		}

		if (this.right.isDown){
			if (isRunnin) {
				this.player.setVelocityX(150);
				this.player.play("player_Run");
				this.player.setFlipX(false);
				this.player.body.setOffset(44,43);
				isRunnin = false;
				this.playerWalk.play();
				if (this.player.body.onFloor){
					this.playerWalk.play();
				}

			} else 
			this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRunnin = true;
			})

		}
		else if (this.left.isDown) {
			if (isRunnin) {
				this.player.setVelocityX(-150);
				this.player.play("player_Run");
				this.player.setFlipX(true);
				this.player.body.setOffset(53,43);
				isRunnin = false;
				if (this.player.body.onFloor){
					this.playerWalk.play();
				}

			} else 
			this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRunnin = true;
			})
		}
		else {
			this.player.setVelocityX(0);

			isRunnin = true;
		}

		if (this.roll.isDown && this.right.isDown && this.player.body.onFloor()){
			if (isRolling) {
				this.player.x = this.player.x + 10;
				this.player.play("player_Roll");
				this.player.setFlipX(false);
				isRolling = false;
				//this.player.body.enable = false;
			} else {
			this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRolling = true;
				this.player.body.enable = true;
			});
			}
		} 
		else if (this.roll.isDown && this.left.isDown && this.player.body.onFloor()){
			if (isRolling) {
				this.player.x = this.player.x - 10;
				this.player.play("player_Roll");
				this.player.setFlipX(true);
				isRolling = false;
			} else {
			this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRolling = true;
			});
			}
		}

		if (this.player.body.onFloor()){
			if (this.up.isDown){
				this.player.setVelocityY(-150);
				this.player.play("player_Jump");
			}
		}


		if (!this.player.body.onFloor()) {
			if (this.player.body.velocity.y > 0) {
				this.player.play("player_Fall")

			} else  {
				this.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + "player_Fall", () => {
				this.player.play("player_Idle");

			});
			}
		}


		/*this.player.on("pointerdown", () => {
			this.player.play("player_Attack");
		});
		*/
		if (this.attack.isDown && this.player.body.velocity.y <= 0) {

			this.player.play("player_Attack");

			this.playerMiss.play();

		} 

	}

	hit() {
		this.currentHealth -= 1;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
