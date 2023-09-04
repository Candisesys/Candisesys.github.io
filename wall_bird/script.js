// How the 𝗳𝘂𝗰𝗸 did you get here
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "rgb(0, 105, 171)",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [Title, Game, GameOver]
}
var game = new Phaser.Game(config)