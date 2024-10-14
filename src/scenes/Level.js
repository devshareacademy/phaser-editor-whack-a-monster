
// You can write more code here

/* START OF COMPILED CODE */

import AudioPrefab from "../prefabs/AudioPrefab.js";
import SpawnLayer from "../prefabs/SpawnLayer.js";
import Timer from "../prefabs/Timer.js";
import Score from "../prefabs/Score.js";
import GameOver from "../prefabs/GameOver.js";
import Title from "../prefabs/Title.js";
import Wolf from "../prefabs/monsters/Wolf.js";
import Ghost from "../prefabs/monsters/Ghost.js";
import Gameplay from "../prefabs/Gameplay.js";
import Pumpkin from "../prefabs/monsters/Pumpkin.js";
import Bat from "../prefabs/monsters/Bat.js";
import Vampire from "../prefabs/monsters/Vampire.js";
import Witch from "../prefabs/monsters/Witch.js";
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

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);

		// audioPrefab
		const audioPrefab = new AudioPrefab(background);

		// bottomSpawnLayer
		const bottomSpawnLayer = new SpawnLayer(this, 0, 700);
		this.add.existing(bottomSpawnLayer);

		// topSpawnLayer
		const topSpawnLayer = new SpawnLayer(this, 0, 430);
		this.add.existing(topSpawnLayer);

		// timer
		const timer = new Timer(this, 1168, 10);
		this.add.existing(timer);
		timer.visible = false;

		// score
		const score = new Score(this, 10, 10);
		this.add.existing(score);
		score.visible = false;

		// gameOver
		const gameOver = new GameOver(this, 640, 360);
		this.add.existing(gameOver);
		gameOver.visible = false;

		// title
		const title = new Title(this, 640, 360);
		this.add.existing(title);

		// hourglass
		const hourglass = this.add.image(1215, 10, "hourglass");
		hourglass.setOrigin(0, 0);
		hourglass.visible = false;

		// wolf
		const wolf = new Wolf(this);

		// ghost
		const ghost = new Ghost(this);

		// gameplay
		const gameplay = new Gameplay(this);

		// pumpkin
		const pumpkin = new Pumpkin(this);

		// bat
		const bat = new Bat(this);

		// vampire
		const vampire = new Vampire(this);

		// witch
		const witch = new Witch(this);

		// lists
		const monsters = [ghost, pumpkin, wolf, witch, vampire, bat];
		const spawnLayers = [topSpawnLayer, bottomSpawnLayer];

		// audioPrefab (prefab fields)
		audioPrefab.key = "background_music";
		audioPrefab.loop = true;

		// timer (prefab fields)
		timer.seconds = 30;

		// gameplay (prefab fields)
		gameplay.spawnLayers = spawnLayers;
		gameplay.monsters = monsters;
		gameplay.timer = timer;
		gameplay.score = score;
		gameplay.gameOverObj = gameOver;
		gameplay.titleObject = title;
		gameplay.timerIcon = hourglass;

		this.gameplay = gameplay;
		this.monsters = monsters;
		this.spawnLayers = spawnLayers;

		this.events.emit("scene-awake");
	}

	/** @type {Gameplay} */
	gameplay;
	/** @type {Array<Ghost|Pumpkin|Wolf|Witch|Vampire|Bat>} */
	monsters;
	/** @type {SpawnLayer[]} */
	spawnLayers;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
