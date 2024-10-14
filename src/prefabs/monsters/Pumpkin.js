
// You can write more code here

/* START OF COMPILED CODE */

import MonsterBase from "./MonsterBase.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Pumpkin extends MonsterBase {

	constructor(parent) {
		super(parent);

		// this (prefab fields)
		this.points = 30;
		this.duration = 1600;
		this.texture = {"key":"spritesheet","frame":"Jack o latern1.png"};
		this.animationKey = "jack";

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
