var sceneData = {
    winner: "none"
}
class Main extends Phaser.Scene {
    constructor () {
        super("main")
    }
    
    preload() {
        // Loading path
        this.load.setPath("./assets/")
        
        // Assets loading
        this.load.image("bug", "bug.png")
    }
    create() {
        this.bugSpeed = 120
        // Sprite definitions
        /// First bug
        this.bug = this.physics.add.sprite(220, 240, "bug")
        /// Second bug
        this.secondBug = this.physics.add.sprite(400, 240, "bug")
        /// Dots group
        this.playerOneDots = this.physics.add.group({})
        this.playerTwoDots = this.physics.add.group({})
        // Sprite properties & actions
        this.bug
            .setAngle(0)
            .setTint(Phaser.Display.Color.GetColor(255, 255, 0))
            //// Data start
            .setDataEnabled()
            .setData("speed", this.bugSpeed)
            .setData("health", 10000) 
            //// Data end
            .setScale(1.35)
        this.secondBug
            .setAngle(180)
            .setTint(Phaser.Display.Color.GetColor(255, 0, 0))
            //// Data start
            .setDataEnabled()
            .setData("speed", this.bugSpeed)
            .setData("health", 10000) 
            //// Data end
            .setScale(1.35)

        // Add text
        this.bugHealth = this.add.text(10, 10, `${this.bug.data.get("health")}`, {color:"rgb(255, 0, 0)", fontFamily:"Arial", fontStyle: "bold", fontSize:"24px"})
        this.secondBugHealth = this.add.text(520, 10, `${this.secondBug.data.get("health")}`, {color:"rgb(255, 255, 0)", fontSize:"24px", fontFamily:"Arial", fontStyle: "bold"})
        //
        this.bugHealth
            .setDepth(5)
        this.secondBugHealth
            .setDepth(5)
        // Events
        this.input.keyboard.on("keydown-C", () => {
            let newDot = this.add.circle(this.bug.x, this.bug.y, 10, 0xffff00)
            this.playerOneDots.add(newDot)
        })
        this.input.keyboard.on("keydown-M", () => {
            let newDot = this.add.circle(this.secondBug.x, this.secondBug.y, 10, 0xff0000)
            this.playerTwoDots.add(newDot)
        })
        this.firstPlayerControls = this.input.keyboard.addKeys("E, R")
        this.secondPlayerControls = this.input.keyboard.addKeys("O, P")
        console.log(config.height)
        // Collision event
        this.physics.add.overlap(this.playerOneDots, this.secondBug, () => {
            console.log("Player 2 lose")
            this.bug.data.values.health--;
        })
        this.physics.add.overlap(this.playerTwoDots, this.bug, () => {
            console.log("Player 1 lose")
            this.secondBug.data.values.health--;

        })
        
    }
    update() {
        // Change velocity of bug based on angle (angle, speed, velocity vector)
        this.physics.velocityFromAngle(this.bug.angle, this.bug.data.get("speed"), this.bug.body.velocity)
        this.physics.velocityFromAngle(this.secondBug.angle, this.secondBug.data.get("speed"), this.secondBug.body.velocity)
        // Controls of first player
        if (this.firstPlayerControls.E.isDown == true) {
            this.bug.setAngle(this.bug.angle -= 5)
        }
        if(this.firstPlayerControls.R.isDown == true) {
            this.bug.setAngle(this.bug.angle += 5)
        }
        // Controls of second player
        if (this.secondPlayerControls.O.isDown == true) {
            this.secondBug.setAngle(this.secondBug.angle -= 5)
        }
        if (this.secondPlayerControls.P.isDown == true) {
            this.secondBug.setAngle(this.secondBug.angle += 5)
        }
        // Wrap bugs
        this.physics.world.wrap(this.bug)
        this.physics.world.wrap(this.secondBug)
        // Set text
        this.bugHealth.setText(`${this.bug.data.get("health")}`)
        this.secondBugHealth.setText(`${this.secondBug.data.get("health")}`)
        // Endgame
        if (this.secondBug.data.values.health < 0) {
            sceneData.winner = "Red"
            this.scene.start("end_game")
        } else if (this.bug.data.values.health < 0) {
            sceneData.winner = "Yellow"
            this.scene.start("end_game")
        }
    }
}