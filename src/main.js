import { WebFontFile } from "./fileloaders/WebFontFile.js";
import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

// register "webfont" to the loader plugin: `this.load.webfont(key, config)`
Phaser.Loader.LoaderPlugin.prototype.webfont = function (key, config) {
	this.addFile(new WebFontFile(this, key, config));
};

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}
