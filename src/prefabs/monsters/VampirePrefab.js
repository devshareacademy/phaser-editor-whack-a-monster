
// You can write more code here

/* START OF COMPILED CODE */

import BaseMonsterPrefab from "./BaseMonsterPrefab.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class VampirePrefab extends BaseMonsterPrefab {

	constructor(parent) {
		super(parent);

		// this (prefab fields)
		this.points = 25;
		this.duration = 2100;
		this.textureConfig = {"key":"spritesheet","frame":"Vampire1.png"};
		this.animationKey = "idleVampire";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
