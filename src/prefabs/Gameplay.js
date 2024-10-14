
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Gameplay extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.on(this.monsterDefeatedEvent, (points) => {
			if (this.isGameOver) {
				return;
			}
			this.score.addScore(points);
		});
		this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.startGame();
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {SpawnLayer[]} */
	spawnLayers;
	/** @type {BaseMonster[]} */
	monsters;
	/** @type {Timer} */
	timer;
	/** @type {boolean} */
	isGameOver = false;
	/** @type {string} */
	monsterDefeatedEvent = "CustomerMonsterDefeated";
	/** @type {Score} */
	score;
	/** @type {GameOver} */
	gameOverObj;
	/** @type {Title} */
	titleObject;
	/** @type {Phaser.GameObjects.Image} */
	timerIcon;

	/* START-USER-CODE */

	// Write your code here.
	/** @type {number} */
	spawnAt = 1000;
	/** @type {number} */
	spawnInterval = 1000;
	gameStarted = false;

	startGame() {
		this.titleObject.visible = false;
		this.score.visible = true;
		this.timer.visible = true;
		this.timerIcon.visible = true;
		this.timer.start();
		this.gameStarted = true;
	}

	update(ts, dt) {
		if (this.isGameOver || !this.gameStarted) {
			return;
		}
		if (this.timer.isFinished) {
			this.roundOver();
		}

		this.spawnAt -= dt;
		if (this.spawnAt > 0) {
			return;
		}
		this.spawnMonster();
		this.spawnAt = this.spawnInterval;
	}

	roundOver() {
		this.isGameOver = true
		console.log('called');
		this.gameOverObj.showText();
		this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			console.log('click')
			//this.scene.scene.stop();
			//this.scene.scene.start("Level");
			this.scene.scene.restart();
			// this.scene.tweens.getTweens().forEach((tween) => {
			// 	tween.stop();
			// });
			// this.scene.time.delayedCall(1000, () => {
			// 	this.scene.scene.restart();
			// });
		});
	}

	spawnMonster() {
		/** @type {Spawner[]} */
		const availableSpawners = [];
		this.spawnLayers.forEach((spawnLayer) => {
			spawnLayer.spawnerList.forEach((spawner) => {
				if (spawner.isMonsterSpawned) {
					return;
				}
				availableSpawners.push(spawner);
			});
		});
		if (availableSpawners.length === 0) {
			return;
		}
		const randomSpawner = Phaser.Utils.Array.GetRandom(availableSpawners);
		const randomMonster = Phaser.Utils.Array.GetRandom(this.monsters);
		randomSpawner.spawnMonster(randomMonster);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
