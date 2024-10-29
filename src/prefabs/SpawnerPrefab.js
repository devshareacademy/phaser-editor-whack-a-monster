
// You can write more code here

/* START OF COMPILED CODE */

import BaseMonsterPrefab from "./monsters/BaseMonsterPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SpawnerPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// monsterSprite
		const monsterSprite = scene.add.sprite(0, 0, "_MISSING");
		monsterSprite.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		monsterSprite.scaleX = 3;
		monsterSprite.scaleY = 3;
		monsterSprite.visible = false;
		this.add(monsterSprite);

		// explosionSprite
		const explosionSprite = scene.add.sprite(0, 0, "smoke_fx", 77);
		explosionSprite.scaleX = 2;
		explosionSprite.scaleY = 2;
		explosionSprite.visible = false;
		this.add(explosionSprite);

		// monster
		const monster = new BaseMonsterPrefab(this);

		this.monsterSprite = monsterSprite;
		this.explosionSprite = explosionSprite;
		this.monster = monster;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.monsterSprite.disableInteractive();
		this.monsterSprite.on(Phaser.Input.Events.POINTER_DOWN, () => {
			this.monsterSprite.disableInteractive();
			this.monsterSprite.visible = false;
			this.explosionSprite.visible = true;
			this.explosionSprite.setY(this.monsterSprite.y);
			this.explosionSprite.play('smoke');
			this.scene.events.emit('custom-monster-destroyed', this.monster.points);
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	monsterSprite;
	/** @type {Phaser.GameObjects.Sprite} */
	explosionSprite;
	/** @type {BaseMonsterPrefab} */
	monster;
	/** @type {boolean} */
	isMonsterSpawned = false;

	/* START-USER-CODE */

	// Write your code here.
	spawnMonster(monster) {
		this.isMonsterSpawned = true;

		this.monster.points = monster.points;
		this.monster.duration = monster.duration;
		this.monster.textureConfig = monster.textureConfig;
		this.monster.animationKey = monster.animationKey;

		this.monsterSprite.setTexture(this.monster.textureConfig.key, this.monster.textureConfig.frame);
		this.monsterSprite.play(this.monster.animationKey);

		this.showMonster();
	}

	showMonster() {
		this.monsterSprite.visible = true;
		this.monsterSprite.setInteractive();
		this.scene.tweens.add({
			y: this.monsterSprite.y - 100,
			targets: this.monsterSprite,
			duration: 300,
			onComplete: () => {
				this.scene.time.delayedCall(this.monster.duration, () => {
					this.hideMonster();
				});
			}
		});
	}

	hideMonster() {
		this.scene.tweens.add({
			y: this.monsterSprite.y + 100,
			targets: this.monsterSprite,
			duration: 300,
			onComplete: () => {
				this.monsterSprite.visible = false;
				this.isMonsterSpawned = false;
				this.monsterSprite.disableInteractive();
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
