
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TimerScriptPrefab extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	seconds = 30;

	/* START-USER-CODE */
	/** @type {Phaser.Time.TimerEvent} */
	timer;
	isFinished = false;

	// Write your code here.
	execute() {
		this.timer = this.scene.time.addEvent({
			delay: this.seconds * 1000,
			paused: false,
		});
	}

	update() {
		if (this.timer === undefined) {
			return;
		}
		if (this.isFinished) {
			return;
		}

		this.gameObject.setText(this.timer.getRemainingSeconds().toFixed(0));
		if (this.timer.getProgress() === 1) {
			this.isFinished = true;
			this.scene.events.emit('custom-timer-finished');
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
