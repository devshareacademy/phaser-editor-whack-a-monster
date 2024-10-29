
// You can write more code here

/* START OF COMPILED CODE */

import BaseMonsterPrefab from "./BaseMonsterPrefab.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class JackPrefab extends BaseMonsterPrefab {

	constructor(parent) {
		super(parent);

		// this (prefab fields)
		this.points = 30;
		this.duration = 1600;
		this.textureConfig = {"key":"spritesheet","frame":"Jack o latern1.png"};
		this.animationKey = "idleJack";

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
