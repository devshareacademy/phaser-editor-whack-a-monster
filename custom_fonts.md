# Custom Fonts In Phaser Editor and Phaser 3 Games

In order to use custom web fonts in our Phaser 3 games, and to show those custom fonts in the Phaser Editor, there are two steps we need to do for our project:

1. Add a Phaser Editor plugin for Phaser Editor to our project
2. Add a Phaser 3 plugin for the Phaser 3 code

## Code Updates Needed For Phaser Editor Plugin

To use a custom plugin in Phaser Editor, we need to add the plugin source files to our project and update the editor config file to use this plugin.

In the `game-assets` zip folder that was provided, we need to add the `phasereditor2d-plugins` folder to the root of our project. Next, we need to update the `phasereditor2d.config.json` file with the following configuration:

```json
{
  "plugins": [
    "phasereditor2d-plugins"
  ],
  "skip": [],
  "custom": {
    "webfontloader": {
      "custom": {
        "families": ["Nosifer", "Creepster"],
        "urls": ["/editor/project/assets/fonts/fonts.css"]
      }
    }
  }
}
```

After these two steps are done, we need to reload the editor. From the "Menu", go to "File -> Reload".

## Code Updates Needed For Rex Plugin (Phaser 3 Plugin)

To use the custom webfonts in our Phaser 3 game, we need to use the [webfontloader](https://github.com/typekit/webfontloader) library to load these files, and we need to have custom CSS styles that indicate were our custom files are located in our project.

To simplify this process, we can use a Phaser 3 plugin to do this: [Rex webfontloader](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/webfontloader/).

To use this plugin, we need to do the following:

1. load the plugin source code in our Phaser game
2. using the plugin, provide the webfont config which will be passed to the webfontloader library

## Step 1 - Update Boot Scene

In the `src/main.js` file, add the following code to the `preload` method in the `Boot` class:

```javascript
this.load.plugin({
  type: 'plugin',
  key: 'rexwebfontloaderplugin',
  url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexwebfontloaderplugin.min.js',
  start: true
});
```

## Step 2 - Update Preload Scene

In the `src/scenes/Preload.js` file, add the following code to the `preload` method in the `Preload` class:

```javascript
this.plugins.get('rexwebfontloaderplugin').addToScene(this);
this.load.rexWebFont({
  "custom": {
    "families": ["Nosifer", "Creepster"],
    "urls": ["assets/fonts/fonts.css"]
  }
});
```
