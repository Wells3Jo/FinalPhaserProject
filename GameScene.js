

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
		this.load.pack("asset-pack-necromancer", "assets/images/Necromancer/asset-pack-necromancer.json");
		this.load.pack("player-asset-pack", "assets/images/Player/player-asset-pack.json");
		this.load.pack("asset-pack-skeleton", "assets/images/Skeleton/asset-pack-skeleton.json");
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

		// prefabBloodyPlatform
		const prefabBloodyPlatform = new PrefabBloodyPlatform(this, 101, 248);
		this.add.existing(prefabBloodyPlatform);
		prefabBloodyPlatform.scaleX = 0.5;
		prefabBloodyPlatform.scaleY = 0.5;

		// prefabBloodyPlatform_1
		const prefabBloodyPlatform_1 = new PrefabBloodyPlatform(this, 188, 238);
		this.add.existing(prefabBloodyPlatform_1);
		prefabBloodyPlatform_1.scaleX = 0.5;
		prefabBloodyPlatform_1.scaleY = 0.5;

		// prefabBloodyPlatform_2
		const prefabBloodyPlatform_2 = new PrefabBloodyPlatform(this, 170, 160);
		this.add.existing(prefabBloodyPlatform_2);
		prefabBloodyPlatform_2.scaleX = 0.5;
		prefabBloodyPlatform_2.scaleY = 0.5;

		// prefabBloodyPlatform_3
		const prefabBloodyPlatform_3 = new PrefabBloodyPlatform(this, 262, 221);
		this.add.existing(prefabBloodyPlatform_3);
		prefabBloodyPlatform_3.scaleX = 0.5;
		prefabBloodyPlatform_3.scaleY = 0.5;

		// prefabBloodyPlatform_4
		const prefabBloodyPlatform_4 = new PrefabBloodyPlatform(this, 257, 168);
		this.add.existing(prefabBloodyPlatform_4);
		prefabBloodyPlatform_4.scaleX = 0.5;
		prefabBloodyPlatform_4.scaleY = 0.5;

		// prefabBloodyPlatform_5
		const prefabBloodyPlatform_5 = new PrefabBloodyPlatform(this, 338, 177);
		this.add.existing(prefabBloodyPlatform_5);
		prefabBloodyPlatform_5.scaleX = 0.5;
		prefabBloodyPlatform_5.scaleY = 0.5;

		// prefabBloodyPlatform_6
		const prefabBloodyPlatform_6 = new PrefabBloodyPlatform(this, 336, 208);
		this.add.existing(prefabBloodyPlatform_6);
		prefabBloodyPlatform_6.scaleX = 0.5;
		prefabBloodyPlatform_6.scaleY = 0.5;

		// prefabBloodyPlatform_7
		const prefabBloodyPlatform_7 = new PrefabBloodyPlatform(this, 77, 149);
		this.add.existing(prefabBloodyPlatform_7);
		prefabBloodyPlatform_7.scaleX = 0.5;
		prefabBloodyPlatform_7.scaleY = 0.5;

		// prefabBloodyPlatform_8
		const prefabBloodyPlatform_8 = new PrefabBloodyPlatform(this, 9, 129);
		this.add.existing(prefabBloodyPlatform_8);
		prefabBloodyPlatform_8.scaleX = 0.5;
		prefabBloodyPlatform_8.scaleY = 0.5;

		// prefabBloodyPlatform_9
		const prefabBloodyPlatform_9 = new PrefabBloodyPlatform(this, 88, 109);
		this.add.existing(prefabBloodyPlatform_9);
		prefabBloodyPlatform_9.scaleX = 0.5;
		prefabBloodyPlatform_9.scaleY = 0.5;

		// prefabBloodyPlatform_10
		const prefabBloodyPlatform_10 = new PrefabBloodyPlatform(this, 170, 101);
		this.add.existing(prefabBloodyPlatform_10);
		prefabBloodyPlatform_10.scaleX = 0.5;
		prefabBloodyPlatform_10.scaleY = 0.5;

		// health
		const health = this.add.text(24, 16, "", {});
		health.text = "Health: 20";
		health.setStyle({ "fontSize": "10" });

		// prefabPlayer
		const prefabPlayer = new PrefabPlayer(this, 60, 26);
		this.add.existing(prefabPlayer);

		// playerWithPlatformsCollider
		this.physics.add.collider(prefabPlayer, prefabBloodyPlatform, undefined, undefined,  );

		this.background1 = background1;
		this.prefabBloodyPlatform = prefabBloodyPlatform;
		this.prefabBloodyPlatform_1 = prefabBloodyPlatform_1;
		this.prefabBloodyPlatform_2 = prefabBloodyPlatform_2;
		this.prefabBloodyPlatform_3 = prefabBloodyPlatform_3;
		this.prefabBloodyPlatform_4 = prefabBloodyPlatform_4;
		this.prefabBloodyPlatform_5 = prefabBloodyPlatform_5;
		this.prefabBloodyPlatform_6 = prefabBloodyPlatform_6;
		this.prefabBloodyPlatform_7 = prefabBloodyPlatform_7;
		this.prefabBloodyPlatform_8 = prefabBloodyPlatform_8;
		this.prefabBloodyPlatform_9 = prefabBloodyPlatform_9;
		this.prefabBloodyPlatform_10 = prefabBloodyPlatform_10;
		this.prefabPlayer = prefabPlayer;
		this.attack = attack;
		this.left = left;
		this.right = right;
		this.up = up;
		this.down = down;
		this.roll = roll;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background1;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_1;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_2;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_3;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_4;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_5;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_6;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_7;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_8;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_9;
	/** @type {PrefabBloodyPlatform} */
	prefabBloodyPlatform_10;
	/** @type {PrefabPlayer} */
	prefabPlayer;
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

 		//this.cameras.main.setSize(400, 270);
        const music = this.sound.add("gameMusic");
        music.play()
        //this.player = this.scene.launch("Player");
        this.necromancer = this.scene.launch("NecromancerScene");
	 	//this.cameras.main.startFollow(this.player);


        //this.physics.add.collider(this.player, prefabBloodyPlatform);
		//this.prefabPlayer.physics.add;
		this.playerMiss = this.sound.add("27_sword_miss_1");
		this.playerWalk = this.sound.add("25_orc_walk_stone_1")
	}

	update() {

		//this.health.setText(`Health: ${this.currentHealth}`);

		//Player control and animation logic

		//Checks to see if the player is not moving then plays the idle animation
		if (this.prefabPlayer.player.body.velocity.x == 0) {
			this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.prefabPlayer.player.play("player_Idle");
			})
		}

		//Checks to see if the player is running right and grounded
		if (this.right.isDown){
			if (isRunnin) {
				this.prefabPlayer.player.setVelocityX(150);
				this.prefabPlayer.player.play("player_Run");
				this.prefabPlayer.player.setFlipX(false);
				this.prefabPlayer.player.body.setOffset(44,41);
				isRunnin = false;
				this.playerWalk.play();
				if (this.prefabPlayer.player.body.onFloor){
					this.playerWalk.play();
				}

			} else 
			this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRunnin = true;
			})

		}
		//Checks to see if the player is running left and grounded
		else if (this.left.isDown) {
			if (isRunnin) {
				this.prefabPlayer.player.setVelocityX(-150);
				this.prefabPlayer.player.play("player_Run");
				this.prefabPlayer.player.setFlipX(true);
				this.prefabPlayer.player.body.setOffset(53,41);
				isRunnin = false;
				if (this.prefabPlayer.player.body.onFloor){
					this.playerWalk.play();
				}

			} else 
			this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRunnin = true;
			})
		}
		else {
			this.prefabPlayer.player.setVelocityX(0)

			isRunnin = true;
		}

		//Roll right
		if (this.roll.isDown && this.right.isDown && this.prefabPlayer.player.body.onFloor()){
			if (isRolling) {
				this.prefabPlayer.player.x = this.prefabPlayer.player.x + 10;
				this.prefabPlayer.player.play("player_Roll");
				this.prefabPlayer.player.setFlipX(false);
				isRolling = false;
				//this.player.body.enable = false;
			} else {
			this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRolling = true;
				//this.prefabPlayer.player.body.enable = true;
			});
			}
		} 
		//Roll left
		else if (this.roll.isDown && this.left.isDown && this.prefabPlayer.player.body.onFloor()){
			if (isRolling) {
				this.prefabPlayer.player.x = this.prefabPlayer.player.x - 10;
				this.prefabPlayer.player.play("player_Roll");
				this.prefabPlayer.player.setFlipX(true);
				isRolling = false;
			} else {
			this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				isRolling = true;
			});
			}
		}
		//Jumping
		if (this.prefabPlayer.player.body.onFloor()){
			if (this.up.isDown){
				this.prefabPlayer.player.setVelocityY(-150);
				this.prefabPlayer.player.play("player_Jump");
			}
		}

		//Falling
		if (!this.prefabPlayer.player.body.onFloor()) {
			if (this.prefabPlayer.player.body.velocity.y > 0) {
				this.prefabPlayer.player.play("player_Fall")

			} else  {
				this.prefabPlayer.player.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + "player_Fall", () => {
				this.prefabPlayer.player.play("player_Idle");

			});
			}
		}


		/*this.player.on("pointerdown", () => {
			this.player.play("player_Attack");
		});
		*/
		//Attack check
		if (this.attack.isDown && this.prefabPlayer.player.body.velocity.y <= 0) {

			this.prefabPlayer.player.play("player_Attack");

			this.playerMiss.play();

		} 

	}

	hit() {
		this.currentHealth -= 1;
	}

        //this.health.setText(`Health: ${this.player.currentHealth}`);
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
