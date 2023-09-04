class GameOver extends Phaser.Scene {
    constructor() {
        super("game_over")
    }
    
    preload() {
        this.load.setPath("./assets")
        this.load.image("go_wall", "go_br.png")
        this.load.image("bang", "go_bn.png")

        this.load.audio("skid", "skid.mp3")
        this.load.audio("crash", "crash.mp3")
    }
    create() {
        // Add objects
        this.once = 0
        this.wall = this.add.sprite(400, 300, "go_wall")
        this.message = this.add.text(0, 600-24, `You avoided ${globalScore} wall(s)!`, {fontSize:24, fontFamily:"Arial"})
        
        this.add.text(800-(24*8), 600-24, `Press N to restart.`, {fontSize:24, fontFamily:"Arial"})
        this.sounds = [this.sound.add("skid"), this.sound.add("crash")]
        this.sounds[0].play()

        this.input.keyboard.on('keyup', (event) => {
            if (event.key == "n") {
                this.sound.stopAll()
                this.scene.start("game")
            }
        })
        
        console.log(globalScore)
    }
    update(undefined, delta) {
        if(this.wall.scale < 10 && this.wall.texture.key != "bang") {
            this.wall.setScale(this.wall.scale += 0.01 * delta)
        } else {
            this.wall.setScale(1)
            this.once++
            if(this.once == 1) {
                this.sounds[1].play()
            }
            this.wall.setTexture("bang")
        }
    }
}
