
// You can write more code here
	//let isAttacking = false;
/* START OF COMPILED CODE */

class SkeletonScene extends Phaser.Scene {

	constructor() {
		super("SkeletonScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("asset-pack-skeleton", "assets/images/Skeleton/asset-pack-skeleton.json");
	}

	/** @returns {void} */
	editorCreate() {

		// skeleton
		const skeleton = this.physics.add.sprite(327, 197, "Idle", 0);
		skeleton.setInteractive(new Phaser.Geom.Rectangle(40, 40, 60, 60), Phaser.Geom.Rectangle.Contains);
		skeleton.flipX = true;
		skeleton.body.collideWorldBounds = true;
		skeleton.body.onWorldBounds = true;
		skeleton.body.setOffset(50, 50);
		skeleton.body.setSize(50, 50, false);
		skeleton.play("skeletonIdle");

		this.skeleton = skeleton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	skeleton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(3000, 6000), this.chooseAction, [], this);
	}

	update() {




	}

	chooseAction(){

		const t = Phaser.Math.Between(0, 100);

		if (t < 10) {
			if (this.skeleton.body.velocity.x == 0) {
					this.skeleton.play("skeletonIdle");
					this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(3000, 5000), this.chooseAction, [], this);

			}
		}


		else if (t < 80) {
			this.skeleton.play("skeletonAttack");
			this.skeleton.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.skeleton.play("skeletonIdle");
			});
			this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(3000, 6000), this.chooseAction, [], this);
		}
		else if (t < 90) {
			this.skeleton.setVelocityX(150);
			this.skeleton.setFlipX(false);
			this.skeleton.play("skeletonWalk");
			this.skeleton.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.skeleton.setVelocityX(0);
				this.skeleton.play("skeletonIdle");
			});
			this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(1000, 3000), this.chooseAction, [], this);
		}
		else if (t < 100) {
			this.skeleton.setFlipX(true);
			this.skeleton.setVelocityX(-150);
			this.skeleton.play("skeletonWalk");

			this.skeleton.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.skeleton.setVelocityX(0);
				this.skeleton.play("skeletonIdle");
			});
			this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(1000, 3000), this.chooseAction, [], this);
		}



	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
