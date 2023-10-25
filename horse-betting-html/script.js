var scenes = {
    title: 0,
    game: 1,
    win: 2
}

var currentScene = scenes.title;
var tick = 0;
var winningColor;
var winningNumber;

var bet;
var difficultySlider;
var betNumber;
var difficulty = 10;
var sounds;
function preload() {
    sounds = [
        loadSound("datr.mp3")
    ]
}
function setup() {
    createCanvas(800, 400)
    
    bet = createInput('0', "number")
    bet.position(400 - 50,200 + 20)
    bet.style("width", 20+"px")
    bet.size(50)

    sounds[0].setVolume(0.2)

    difficultySlider = createSlider(2, 9, 6, 1)
    difficultySlider.position(width/2 - 100, 0)
    difficultySlider.style("cursor", "pointer")
}

function draw() {
    tick++;
    // Title screen UI
    bet.style("visibility", currentScene == scenes.title ? "visible" : "hidden")
    difficultySlider.style("visibility", currentScene == scenes.title ? "visible" : "hidden")
    // Scene management
    switch (currentScene) {
        case scenes.title:
            background(100)
            // Init value
            movers = []
            tick = -1
            // Set difficulty
            difficulty = difficultySlider.value()

            push()
            textSize(24)
            text("Press B to play.", width/2 - (80*1.5), height/2 - 24)
            text(`Cheer a horse (1-${difficulty}) to win by typing their number on this text box!`, width/2 - 350, height/2 + 10)
            
            text("Difficulty:", (width/2 - 100) - 125, 20)
            pop()
            // Scene trans.
            if (keyIsDown(66)) {
                tick = 0
                betNumber = bet.elt.value
                currentScene = scenes.game
            }
            break
        case scenes.game:
            background(0, 50, 0);
            
            // Init condition
            if (tick == 2) {
                // Play music
                sounds[0].play()
                // Init. racers
                for (var i = 1; i < difficulty + 1; i++) {
                    var newMover = new Mover(0, 30 * i - (difficulty * 2.5), i)
                }
            }
            // Racer array loop

            movers.forEach(movee => {
                movee.update()
                // Game end condition
                if (movee.x > width + 10) {
                    winningColor = movee.color
                    winningNumber = movee.number
                    tick = 0
                    currentScene = scenes.win
                }
            });
            break;
        case scenes.win:
            // Remove movers
            movers = []
            // Init conditional
            if (tick == 2) {
                // Stop all sounds
                for (var soundIndex in sounds) {
                    var sound = sounds[soundIndex]
                    sound.stop()
                }
                // Check if player wins bet
                if (parseInt(betNumber) != winningNumber) {
                    alert("You lost.")
                } else {
                    alert("You win!")
                }
            }
            // Display
            background(255, 255, 0)
            push()
            fill(winningColor.r, winningColor.g, winningColor.b)
            circle(width/2, height/2, 100)
            pop()
            push()
            textSize(72)
            text(winningNumber, width/2 - 20, height/2 + 20)
            text("Wins!", width/2 - (20 * 4.5), height - 20)
            textSize(12)
            text("Space to play again.", width/2 - 45, height - 5)
            pop()
            // Scene trans.
            if (keyIsDown(32)) {
                tick = 0
                currentScene = scenes.title
            }
            break
        default:
            break;
    }
}