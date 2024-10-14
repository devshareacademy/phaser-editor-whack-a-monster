
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Timer extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.text = "30";
		this.setStyle({ "fontFamily": "Creepster", "fontSize": "64px" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		// each time the scene is updated, call the `update` method
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		// if the object is destroyed, call the `destroy` method
        this.on(Phaser.GameObjects.Events.DESTROY, this.cleanup, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	seconds = 0;
	/** @type {boolean} */
	isFinished = false;

	/* START-USER-CODE */
	/** @type {Phaser.Time.TimerEvent} */
	timer;

	// Write your code here.
	start() {
		this.timer = this.scene.time.addEvent({
			delay: this.seconds * 1000,
			paused: false
		});
	}

	update() {
		if (this.timer === undefined) {
			return;
		}
		if (this.isFinished) {
			return;
		}
		this.setText(this.timer.getRemainingSeconds().toFixed(0));
		if (this.timer.getProgress() === 1) {
			this.isFinished = true;
			return;
		}
	}

    cleanup() {
        // the object is destroyed, so we remove all the event handlers
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
