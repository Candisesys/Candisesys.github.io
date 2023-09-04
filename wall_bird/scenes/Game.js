// Game-wide global variables
// !!HACKY SACK!!
var globalScore = 0

class Game extends Phaser.Scene {
    constructor () {
        super("game")
        this.walls;
    }
    preload() {
        this.load.setPath("./assets")

        this.load.image("bird", "bird.png")
        this.load.image("wall", "barrier.png")
        this.load.audio("coin", "coin.wav")
    }
    create() {
        this.physics.world.setFPS(60)
        
        /*
            this.does.some.wierd.shit()
            this.cameras.main.setZoom(0.5)
        */
        
        // Make objects
        let bird = this.physics.add.sprite(60, 60, "bird")
        let walls = this.physics.add.group({defaultKey: "wall", velocityX: -250, setDepth: 1})
        let amount = 5
        // Set globals
        this.walls = walls
        this.score = 0
        this.scoreLabel = this.add.text(0, 0, this.score, {color: "rgb(171, 171, 171)", fontSize: "24px", fontStyle: "bold"})
        // Sounds global
        this.sounds = [
            this.sound.add("coin")
        ]
        // Global properties
        this.scoreLabel
            .setDepth(2)
        // Create init sprites
        for (let i = 0; i < amount; i++) {
            walls.create(config.width + (180 * i), config.height - Phaser.Math.Between(0, 515))
        }
        // bird properties
        bird
            .setScale(0.35)
            .setCircle(60)
            .setGravityY(900)
            .setCollideWorldBounds(true)
        // Input detection    
        this.input.keyboard.on("keydown", function (event) {
            if (event.key == " " || event.key == "b") {
                bird.setVelocityY(-400)
            }
        }, this)
        // Collision detection w/ walls group & lose condition
        this.physics.add.overlap(bird, walls, () => {
            globalScore = this.score
            this.scene.start("game_over")
        })
    }

    update() {
        // Teleporting logic
        this.walls.getChildren().forEach((wall) => {
            if (wall.x < -45) {
                //console.log("gadzooks!")
                this.walls.remove(wall, true)
                this.sounds[0].play()
                this.score++
                this.scoreLabel.setText(this.score)
                this.walls.create(config.width + 50, config.height - Phaser.Math.Between(0, 515))
            }
        })
        /*
        this was supposed to be some wierd 
        overlap shit

        this.l_in = false;*/
    }
}