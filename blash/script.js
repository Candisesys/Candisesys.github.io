var config = {
    type: Phaser.WEBGL,
    width: 600,
    height: 600,
    backgroundColor: "rgb(225, 225, 225)",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [Title, Main, EndGame]
}
var game = new Phaser.Game(config)