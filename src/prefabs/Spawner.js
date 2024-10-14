
// You can write more code here

/* START OF COMPILED CODE */

import Explosion from "./Explosion.js";
import MonsterBase from "./monsters/MonsterBase.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Spawner extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// monsterImageGameObject
		const monsterImageGameObject = scene.add.sprite(0, 0, "_MISSING");
		monsterImageGameObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		monsterImageGameObject.scaleX = 3;
		monsterImageGameObject.scaleY = 3;
		monsterImageGameObject.visible = false;
		this.add(monsterImageGameObject);

		// explosion
		const explosion = new Explosion(scene, 0, 0);
		explosion.visible = true;
		this.add(explosion);

		// monster
		const monster = new MonsterBase(this);

		this.monsterImageGameObject = monsterImageGameObject;
		this.explosion = explosion;
		this.monster = monster;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.monsterImageGameObject.disableInteractive();
		this.monsterImageGameObject.on(Phaser.Input.Events.POINTER_DOWN, () => {
			this.monsterImageGameObject.disableInteractive();
			this.monsterImageGameObject.visible = false;
			this.explosion.visible = true;
			this.explosion.setY(this.monsterImageGameObject.y);
			this.explosion.playAnimation();
			this.scene.events.emit(this.monsterDefeatedEvent, this.monster.points);
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	monsterImageGameObject;
	/** @type {Explosion} */
	explosion;
	/** @type {MonsterBase} */
	monster;
	/** @type {boolean} */
	isMonsterSpawned = false;
	/** @type {string} */
	monsterDefeatedEvent = "CustomerMonsterDefeated";

	/* START-USER-CODE */

	// Write your code here.
	/** @type {MonsterBase} */
	spawnMonster(monster) {
		this.isMonsterSpawned = true;
		this.monster = monster;

		// update texture on image game object
		this.monsterImageGameObject.setTexture(monster.texture.key).setFrame(monster.texture.frame);
		this.monsterImageGameObject.play(monster.animationKey);
		// start tween for having monster appear
		this.showMonster();
	}

	showMonster() {
		this.monsterImageGameObject.visible = true;
		this.monsterImageGameObject.setInteractive();
		this.scene.tweens.add({
			y: this.monsterImageGameObject.y - 100,
			targets: this.monsterImageGameObject,
			duration: 300,
			onComplete: () => {
				// wait a brief period of time before hiding monster
				this.scene.time.delayedCall(this.monster.duration, () => {
					this.hideMonster();
				});
			},
		});
	}

	hideMonster() {
		this.scene.tweens.add({
			y: this.monsterImageGameObject.y + 100,
			targets: this.monsterImageGameObject,
			duration: 300,
			onComplete: () => {
				this.monsterImageGameObject.disableInteractive();
				this.monsterImageGameObject.visible = false;
				this.isMonsterSpawned = false;
			},
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
