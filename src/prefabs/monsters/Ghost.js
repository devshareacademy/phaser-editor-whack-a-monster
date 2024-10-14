
// You can write more code here

/* START OF COMPILED CODE */

import MonsterBase from "./MonsterBase.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Ghost extends MonsterBase {

	constructor(parent) {
		super(parent);

		// this (prefab fields)
		this.points = 20;
		this.duration = 2000;
		this.texture = {"key":"spritesheet","frame":"Ghost1.png"};
		this.animationKey = "ghost";

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
