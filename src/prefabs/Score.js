
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Score extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.text = "0";
		this.setStyle({ "fontFamily": "Creepster", "fontSize": "64px" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.score = 0;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	/** @type {number} */
	score;

	/**
	 * @param {number} points
	 * @returns {void}
	 * */
	addScore(points) {
		this.score += points;
		this.text = this.score.toString(10);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
