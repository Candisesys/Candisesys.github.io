class Title extends Phaser.Scene {
    constructor() {
        super("tscr")
    }
    
    preload() {
        this.load.setPath("./assets")
        this.load.image("title_bg", "title_bg.png")
        this.load.image("audio_off", "audio0000.png")
        this.load.image("audio_on", "audio0001.png")
        //this.load.image("bird", "bird.png")
    }
    create() {
        this.cameras.main.setBackgroundColor("rgb(71, 0, 171)")
        this.add.image(0, 0, "title_bg")
            .setOrigin(0)
        let audio_img = this.add.image(30, 30, "audio_off")
        this.add.text(270, (600-15)-25, "Press B to Jump & Start Game", {fontFamily: "Arial"})
            .setFontSize(25)
        // ** Events **
        
        // Switch scenes
        this.input.keyboard.on("keyup", (event) => {
            if (event.key == "b") {
                this.scene.switch("game")
            }
        })
        // Audio validation
        this.input.on("pointerdown", () => {
            audio_img.setTexture("audio_on")
        })

        // erm why the fuck is this here
        //console.log(this.input.eventNames())
    }
}
