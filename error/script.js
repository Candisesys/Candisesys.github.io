var config = {
    type: Phaser.WEBGL,
    width: 400,
    height: 300,
    pixelArt:true,
    backgroundColor: "#000000",
    physics: {
        default: "arcade"
    },
    scene: [HeyScene]
}
var game = new Phaser.Game(config)