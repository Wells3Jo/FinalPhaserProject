
// You can write more code here

/* START OF COMPILED CODE */

class MenuScene extends Phaser.Scene {

	constructor() {
		super("MenuScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(110, 76, "", {});
		text_1.text = "A = Move left\nD = Move right\nW = Jump\nSPACE = attack\nSHIFT = Roll\n\nClick to start.";
		text_1.setStyle({  });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
    this.input.manager.enabled = true;

    this.input.once('pointerdown', function () {

    this.scene.start('GameScene');

    }, this);
    //
	}
  update() {

  }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
//

