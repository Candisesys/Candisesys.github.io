class HeyScene extends Phaser.Scene {
    constructor () {
        super("main")
    }
    preload() {
        this.load.setPath("./assets")
        // Load assets
        this.load.image("error", "sign.png")
        this.load.image("link", "arrow.png")
    }
    create() {
        console.log(config.height)
        this.cameras.main.setBackgroundColor("rgb(238, 200, 66)")

        this.waring = this.add.image(200, 100, "error")
        this.waring    
            .setScale(0.5)
            .setAlpha(0)
        this.add.tween({targets: this.waring, alpha: 1, duration: 250})
        this.arrowLink = this.add.image(215, 240, "link")
        this.arrowLink    
            .setScale(0.15)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                window.open("https://parrotgamesie.neocities.org/", "_blank");
                window.close()
            })
            .on(Phaser.Input.Events.POINTER_OVER, () => {
               this.arrowLink.setTint(Phaser.Display.Color.RGBStringToColor("255, 0, 0"))
               window.document.body.style.cursor = "pointer"
            })
            .on(Phaser.Input.Events.POINTER_OUT, () => {
                this.arrowLink.clearTint()
                window.document.body.style.cursor = "default"
            })

    }
}
