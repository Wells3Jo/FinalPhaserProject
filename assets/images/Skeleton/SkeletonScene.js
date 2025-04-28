
// You can write more code here

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
		skeleton.setInteractive(new Phaser.Geom.Rectangle(39, 46, 60.3186810561808, 57.46866463808418), Phaser.Geom.Rectangle.Contains);
		skeleton.flipX = true;
		skeleton.body.collideWorldBounds = true;
		skeleton.body.onWorldBounds = true;
		skeleton.body.setOffset(75, 75);
		skeleton.body.setSize(32, 32, false);
		skeleton.play("SkeletonIdle");

		this.skeleton = skeleton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	skeleton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {
		if (this.skeleton.body.velocity.x == 0) {
			this.skeleton.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
				this.skeleton.play("skeletonIdle");
			})
		}
		//this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(3000, 6000), this.chooseAction, [], this);


	}

	chooseAction(){

		const t = Phaser.Math.Between(0, 100);

		if (t <= 10) {
			if (this.skeleton.body.velocity.x == 0) {


					this.skeleton.play("skeletonIdle");

			}
		}


		if (t > 10) {

			this.skeleton.play("skeletonAttack");
			this.chooseEvent = this.time.delayedCall(Phaser.Math.Between(3000, 6000), this.chooseAction, [], this);
		}

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
