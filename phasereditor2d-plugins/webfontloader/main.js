window.addEventListener("load", () => {
  class WebFontsLoaderPlugin extends colibri.Plugin {
    constructor() {
      super("webfontloader");
    }

    registerExtensions(reg) {
      reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(async () => {
        this._log("plugin started, attempting to get project configuration");
        //const config = await ide.IDEPlugin.getInstance().requestProjectConfig();
        const data = await colibri.core.io.apiRequest("GetProjectConfig");
        const config = data?.custom?.webfontloader;
        if (config === undefined) {
          this._log("no webfontloader configuration found, please add configuration to phasereditor2d.config.json file");
          return;
        }
        this._log("using the following webfontloader configuration", config);

        await new Promise((resolve, reject) => {
          const webfontConfg = {
            active: () => {
              this._log("finished loading fonts");
              resolve(undefined);
            },
            inactive: () => {
              this._log("failed to load fonts");
              resolve(undefined);
            },
            fontactive: (familyName, fvd) => {
              this._log("successfully loaded font", familyName);
            },
            fontinactive: (familyName, fvd) => {
              this._log("failed to load font", familyName);
            }
          };
          if (config.custom !== undefined) {
            webfontConfg.custom = config.custom;
          }
          if (config.google !== undefined) {
            webfontConfg.google = config.google;
          }

          WebFont.load(webfontConfg);
        });
      }));
    }

    _log(message, ...args) {
      if (args === undefined || args.length === 0) {
        console.log(`WebFontsLoaderPlugin: ${message}`);
        return;
      }
      console.log(`WebFontsLoaderPlugin: ${message}`, args);
    }
  }

  colibri.Platform.addPlugin(new WebFontsLoaderPlugin());
});
