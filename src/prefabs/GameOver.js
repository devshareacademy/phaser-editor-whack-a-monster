
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOver extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.setOrigin(0.5, 0.5);
		this.text = "Game Over";
		this.setStyle({ "fontFamily": "Nosifer", "fontSize": "128px" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.visible = false;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	showText() {
		this.setScale(0.1);
		this.visible = true;
		this.scene.add.tween({
			targets: this,
			scale: 1,
			duration: 1500,
			ease: Phaser.Math.Easing.Sine.InOut,
			onComplete: () => {
				this.floatText();
			}
		});
	}

	floatText() {
		this.scene.add.tween({
			targets: this,
			y: this.y + 20,
			duration: 1000,
			ease: Phaser.Math.Easing.Sine.InOut,
			yoyo: true,
			repeat: -1
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
