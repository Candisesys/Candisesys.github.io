class Title extends Phaser.Scene {
    constructor() {
        super("title")
    }
    
    preload() {
        this.load.setPath("./assets/")

        this.load.image("title", "title.png")
        this.load.image("play", "play.png")

        this.load.audio("activated", "sound_active.mp3")
    }
    create() {
        this.soundActive = false;
        this.add.image(0, 0, "title")
            .setOrigin(0)
        this.add.image(540, 540, "play")
            .setInteractive()
            .on("pointerdown", () => {
                document.body.style.cursor = "default"
                this.scene.start("main")
            })
            .on("pointerover", () => {
                document.body.style.cursor = "pointer"
            })
            .on("pointerout", () => {
                document.body.style.cursor = "default"
            })
        this.input.on("pointerdown", () => {
            if (this.soundActive == false) {
                this.sound.add("activated").play()
            }
            this.soundActive = true   
        })
    }
}
