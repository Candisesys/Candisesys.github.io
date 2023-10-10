let current_scene;
let SCENES = {
    title: 0,
    game: 1,
    gameOver: 2
}

let projectiles = []
let tick = 0;
let totalSeconds = 0;
let die;

let sounds = [];
function setup() {
    createCanvas(640, 480);
    sounds = [
        new Sound("bouncesound.mp3")
    ]
    frameRate(60)
    die = () => {
        projectiles = []
        totalSeconds = tick/60;
        tick = 0;
        noCursor()
        current_scene = SCENES.gameOver
    }
    current_scene = 0;
}

function draw() {
    switch (current_scene) {
        case SCENES.title:
            noCursor()
            background(0, 114, 0);
            tick++
            push()
            textSize(48)
            fill(171)
            text("AVOID THE CIRCLES", width/2 - (6 * (tick%200)) + 200, height/2)
            pop()
            textSize(48)
            text("THE BONX", 49, 49)  
            textSize(36)
            text("Space to play", 120, 120)
            push()        
            break;
        case SCENES.game:
            background(220);
            tick++;
            if (tick%60 == 0) {
                var newProject = new Projectile(random(width), random(height))
                newProject.velocity = {x: random(-5, 5), y: random(-5, 5)}
                newProject.bounce = function() {
                    sounds[0].play()
                }
                projectiles.push(newProject)
            }
            projectiles.forEach((project) => {
                project.update()
                if (collidePointCircle(mouseX, mouseY, project.x, project.y, project.size)) {
                    console.log("collide!")
                    die()
                }
                if (mouseX > width || mouseY > height) {
                    die()
                }
            }) 
            break;
        case SCENES.gameOver:
            tick++
            background(171, 0, 0)
            textSize(48)
            text("You lasted", width/2 - 80, height/2 - 80)
            textSize(72)
            text(floor(totalSeconds.toString()), width/2, height/2)
            textSize(48)
            text("seconds.", width/2 - 80, height/2 + 80)
            if (tick == 1) {
                alert("Press SPACE to replay")
            }
            break;
        default:
            break;
    }
}

function keyPressed() {
    switch (current_scene) {
        case SCENES.title:
            if (keyCode == 32) {
                tick = 0
                cursor("default")
                current_scene = SCENES.game
            }       
            break;
        case SCENES.game:
            break;
        case SCENES.gameOver:
            if (keyCode == 32) {
                cursor("default")
                current_scene = SCENES.game
            }  
        default:
            break;
    }
}