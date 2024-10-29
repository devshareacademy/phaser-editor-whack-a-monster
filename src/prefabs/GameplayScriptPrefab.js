
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameplayScriptPrefab extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.startGame();
		});
		this.scene.events.on('custom-monster-destroyed', (points) => {
			if (this.isGameOver) {
				return;
			}
			this.score += points;
			this.scoreTextGameObject.setText(this.score.toString(10));
			this.monsterDestroyedAudioScript.execute();
		});
		this.scene.events.on('custom-timer-finished', () => {
			this.gameOver();
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;
	/** @type {Phaser.GameObjects.Text} */
	titleTextGameObject;
	/** @type {SpawnerGroupPrefab[]} */
	spawnerGroups = [];
	/** @type {BaseMonsterPrefab[]} */
	monsters = [];
	/** @type {Phaser.GameObjects.Text} */
	scoreTextGameObject;
	/** @type {Phaser.GameObjects.Text} */
	gameOverTextGameObject;
	/** @type {ScriptNode} */
	timerScript;
	/** @type {NodeScript} */
	backgroundMusicScript;
	/** @type {NodeScript} */
	monsterDestroyedAudioScript;

	/* START-USER-CODE */
	spawnAt = 1000;
	spawnInterval = 1000;
	gameStarted = false;
	score = 0;
	isGameOver = false;

	// Write your code here.
	startGame() {
		this.uiLayer.visible = true;
		this.titleTextGameObject.visible = false;
		this.gameStarted = true;
		this.timerScript.execute();
	}

	update(ts, dt) {
		if (this.isGameOver || !this.gameStarted) {
			return;
		}

		this.spawnAt -= dt;
		if (this.spawnAt > 0) {
			return;
		}
		this.spawnMonster();
		this.spawnAt = this.spawnInterval;
	}

	spawnMonster() {
		const availableSpawners = [];
		this.spawnerGroups.forEach((spawnerGroup) => {
			spawnerGroup.spawners.forEach((spawner) => {
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

	gameOver() {
		this.isGameOver = true;
		this.gameOverTextGameObject.visible = true;
		this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.scene.scene.restart();
		});
	}
	
	start() {
		this.backgroundMusicScript.execute();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
