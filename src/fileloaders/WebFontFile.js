export class WebFontFile extends Phaser.Loader.File {

    _config;

    constructor(loader, key, config) {
        super(loader, {
            type: "webfont",
            key: key
        });

        this._config = config;
    }

    load() {

        const config = {};

        if (this._config) {

            Object.assign(config, this._config);

        } else {

            config.custom = {
                families: [this.key]
            };
        }

        config.active = () => this.loader.nextFile(this, true);
        config.inactive = () => this.loader.nextFile(this, false);

        WebFont.load(config);
    }
}
