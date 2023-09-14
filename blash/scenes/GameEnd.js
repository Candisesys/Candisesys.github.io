class EndGame extends Phaser.Scene {
    constructor(){
        super("end_game")
    }
    
    preload() {
        this.load.setPath("./assets/")
        
        this.load.image("replay", "replay.png")
    }
    create() {
        console.log(sceneData.winner)
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${sceneData.winner} wins.`))

        this.replay = this.add.image(300, 300, "replay")
        this.add.text(40, 40,  `${sceneData.winner} wins.`)
            .setFontSize("24px")
            .setColor("rgb(0, 0, 0)")
        this.replay
            .setInteractive()
            .on("pointerover", () => {
                window.document.body.style.cursor = "pointer"
            })
            .on("pointerout", () => {
                window.document.body.style.cursor = "default"
            })
            .on("pointerdown", () => {
                window.document.body.style.cursor = "default"
                this.scene.start("main")
            })
        //this.cameras.main.setBackgroundColor(Phaser.Display.Color.GetColor(0, 0, 0))
    }
}