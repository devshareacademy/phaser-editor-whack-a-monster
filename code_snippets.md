# Code Snippets

## index.html

```html
<link rel="stylesheet" href="assets/fonts/fonts.css">
<script src="https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.min.js"></script>
```

## main.js

```javascript
import { WebFontFile } from "./fileloaders/WebFontFile.js";

// register "webfont" to the loader plugin: `this.load.webfont(key, config)`
Phaser.Loader.LoaderPlugin.prototype.webfont = function (key, config) {
	this.addFile(new WebFontFile(this, key, config));
};
```

## Preload.js

```javascript
// in the preload method
this.load.webfont("Nosifer");
this.load.webfont("Creepster");
```
