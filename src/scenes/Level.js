
// You can write more code here

/* START OF COMPILED CODE */

import MainTextPrefab from "../prefabs/MainTextPrefab.js";
import SpawnerGroupPrefab from "../prefabs/SpawnerGroupPrefab.js";
import UiTextPrefab from "../prefabs/UiTextPrefab.js";
import TimerScriptPrefab from "../prefabs/TimerScriptPrefab.js";
import BatPrefab from "../prefabs/monsters/BatPrefab.js";
import JackPrefab from "../prefabs/monsters/JackPrefab.js";
import VampirePrefab from "../prefabs/monsters/VampirePrefab.js";
import WitchPrefab from "../prefabs/monsters/WitchPrefab.js";
import WolfPrefab from "../prefabs/monsters/WolfPrefab.js";
import GameplayScriptPrefab from "../prefabs/GameplayScriptPrefab.js";
import GhostPrefab from "../prefabs/monsters/GhostPrefab.js";
import AudioPrefab from "../prefabs/AudioPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundLayer
		const backgroundLayer = this.add.layer();

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);
		backgroundLayer.add(background);

		// titleTextLayer
		const titleTextLayer = this.add.layer();

		// titleText
		const titleText = new MainTextPrefab(this, 640, 360);
		titleText.text = "Whack\nA\nMonster";
		titleTextLayer.add(titleText);

		// gameOverText
		const gameOverText = new MainTextPrefab(this, 640, 360);
		gameOverText.visible = false;
		gameOverText.text = "Game Over";
		titleTextLayer.add(gameOverText);

		// monsterSpawnerLayer
		const monsterSpawnerLayer = this.add.layer();

		// bottomSpawnerGroup
		const bottomSpawnerGroup = new SpawnerGroupPrefab(this, 0, 700);
		bottomSpawnerGroup.visible = true;
		monsterSpawnerLayer.add(bottomSpawnerGroup);

		// topSpawnerGroup
		const topSpawnerGroup = new SpawnerGroupPrefab(this, 0, 430);
		monsterSpawnerLayer.add(topSpawnerGroup);

		// uiLayer
		const uiLayer = this.add.layer();
		uiLayer.visible = false;

		// timerText
		const timerText = new UiTextPrefab(this, 1144, 10);
		timerText.text = "30";
		uiLayer.add(timerText);

		// timerScriptPrefab
		const timerScriptPrefab = new TimerScriptPrefab(timerText);

		// scoreText
		const scoreText = new UiTextPrefab(this, 10, 10);
		scoreText.text = "0";
		uiLayer.add(scoreText);

		// hourglass
		const hourglass = this.add.image(1215, 10, "hourglass");
		hourglass.setOrigin(0, 0);
		uiLayer.add(hourglass);

		// batPrefab
		const batPrefab = new BatPrefab(this);

		// jackPrefab
		const jackPrefab = new JackPrefab(this);

		// vampirePrefab
		const vampirePrefab = new VampirePrefab(this);

		// witchPrefab
		const witchPrefab = new WitchPrefab(this);

		// wolfPrefab
		const wolfPrefab = new WolfPrefab(this);

		// gameplayScriptPrefab
		const gameplayScriptPrefab = new GameplayScriptPrefab(this);

		// ghostPrefab
		const ghostPrefab = new GhostPrefab(this);

		// backgroundAudio
		const backgroundAudio = new AudioPrefab(this);

		// monsterDestroyedAudio
		const monsterDestroyedAudio = new AudioPrefab(this);

		// lists
		const spawners = [topSpawnerGroup, bottomSpawnerGroup];
		const monsters = [wolfPrefab, ghostPrefab, witchPrefab, vampirePrefab, jackPrefab, batPrefab];

		// timerScriptPrefab (prefab fields)
		timerScriptPrefab.seconds = 30;

		// gameplayScriptPrefab (prefab fields)
		gameplayScriptPrefab.uiLayer = uiLayer;
		gameplayScriptPrefab.titleTextGameObject = titleText;
		gameplayScriptPrefab.spawnerGroups = spawners;
		gameplayScriptPrefab.monsters = monsters;
		gameplayScriptPrefab.scoreTextGameObject = scoreText;
		gameplayScriptPrefab.gameOverTextGameObject = gameOverText;
		gameplayScriptPrefab.timerScript = timerScriptPrefab;
		gameplayScriptPrefab.backgroundMusicScript = backgroundAudio;
		gameplayScriptPrefab.monsterDestroyedAudioScript = monsterDestroyedAudio;

		// backgroundAudio (prefab fields)
		backgroundAudio.audioKey = "background_music";
		backgroundAudio.loop = true;

		// monsterDestroyedAudio (prefab fields)
		monsterDestroyedAudio.audioKey = "impactSoft_heavy_000";

		this.wolfPrefab = wolfPrefab;
		this.ghostPrefab = ghostPrefab;
		this.spawners = spawners;
		this.monsters = monsters;

		this.events.emit("scene-awake");
	}

	/** @type {WolfPrefab} */
	wolfPrefab;
	/** @type {GhostPrefab} */
	ghostPrefab;
	/** @type {SpawnerGroupPrefab[]} */
	spawners;
	/** @type {Array<WolfPrefab|GhostPrefab|WitchPrefab|VampirePrefab|JackPrefab|BatPrefab>} */
	monsters;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();

		// this.spawnerPrefab.spawnMonster(this.wolfPrefab);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
