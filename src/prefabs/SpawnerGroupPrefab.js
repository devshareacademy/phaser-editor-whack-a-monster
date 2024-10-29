
// You can write more code here

/* START OF COMPILED CODE */

import SpawnerPrefab from "./SpawnerPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SpawnerGroupPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// spawner1
		const spawner1 = new SpawnerPrefab(scene, 220, 0);
		this.add(spawner1);

		// spawner2
		const spawner2 = new SpawnerPrefab(scene, 500, 0);
		this.add(spawner2);

		// spawner3
		const spawner3 = new SpawnerPrefab(scene, 770, 0);
		this.add(spawner3);

		// spawner4
		const spawner4 = new SpawnerPrefab(scene, 1040, 0);
		this.add(spawner4);

		// lists
		const spawners = [spawner1, spawner4, spawner3, spawner2];

		this.spawners = spawners;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const graphics = this.scene.add.graphics();
		graphics
			.fillStyle(0xffffff)
			.fillRect(0, 0, this.scene.scale.width, this.y - 40)
			.setVisible(false);
		const mask = graphics.createGeometryMask(graphics);
		this.setMask(mask);
		/* END-USER-CTR-CODE */
	}

	/** @type {SpawnerPrefab[]} */
	spawners;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
