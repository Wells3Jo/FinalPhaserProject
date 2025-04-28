
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
		const skeleton = this.add.sprite(317, 242, "Skeleton Idle", 0);
		skeleton.flipX = true;

		this.skeleton = skeleton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	skeleton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {
		this.skeleton.play("SkeletonIdle")
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
