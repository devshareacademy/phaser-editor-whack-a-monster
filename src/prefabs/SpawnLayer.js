
// You can write more code here

/* START OF COMPILED CODE */

import Spawner from "./Spawner.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SpawnLayer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// spawner
		const spawner = new Spawner(scene, 220, 0);
		this.add(spawner);

		// spawner2
		const spawner2 = new Spawner(scene, 500, 0);
		this.add(spawner2);

		// spawner3
		const spawner3 = new Spawner(scene, 770, 0);
		this.add(spawner3);

		// spawner4
		const spawner4 = new Spawner(scene, 1040, 0);
		this.add(spawner4);

		// lists
		const spawnerList = [spawner, spawner2, spawner3, spawner4];

		this.spawnerList = spawnerList;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const graphics = this.scene.add.graphics();
        graphics
			.fillStyle(0xffffff)
			.fillRect(0, 0, 1280, this.y - 40)
			.setVisible(false);
		const mask = graphics.createGeometryMask();
		this.setMask(mask);
		/* END-USER-CTR-CODE */
	}

	/** @type {Spawner[]} */
	spawnerList;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
