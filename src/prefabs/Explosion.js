
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Explosion extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "smoke_fx", frame ?? 77);

		this.scaleX = 2;
		this.scaleY = 2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	animation = "smokesmoke_fx";

	/* START-USER-CODE */

	// Write your code here.
	playAnimation() {
		this.play(this.animation);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
