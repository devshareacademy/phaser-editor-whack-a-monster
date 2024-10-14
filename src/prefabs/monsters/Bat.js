
// You can write more code here

/* START OF COMPILED CODE */

import MonsterBase from "./MonsterBase.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bat extends MonsterBase {

	constructor(parent) {
		super(parent);

		// this (prefab fields)
		this.points = 40;
		this.duration = 1500;
		this.texture = {"key":"spritesheet","frame":"Bat1.png"};
		this.animationKey = "bat";

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
