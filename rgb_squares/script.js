function setup() {
    var canvas = createCanvas(200, 200)
    var size = 20
    // Create bouncers
    var redBouncer = new Bouncer(5, 5, size)
    redBouncer.color.b = 0
    redBouncer.color.g = 0
    redBouncer.velocity = {x: random(-5, 5), y: random(-5, 5)}
    var greenBouncer = new Bouncer(5, 5, size)
    // greenBouncer.color.r = 0
    greenBouncer.color.b = 0
    greenBouncer.velocity = {x: random(-5, 5), y: random(-5, 5)}
    var blueBouncer = new Bouncer(10, 5, size)
    blueBouncer.color.g = 0
    blueBouncer.color.r = 0
    blueBouncer.velocity = {x: random(-5, 5), y: random(-5, 5)}

    redBouncer.color.a = 80
    greenBouncer.color.a = 80
    blueBouncer.color.a = 80

    var changeVelocityButton = createButton("Change velocity")
    var picture = createButton("Take a picture :D")
    changeVelocityButton.mouseClicked(() => {
        for (var bouncees in bouncers) {
            bouncers[bouncees].velocity.x = random(-5, 5)
            bouncers[bouncees].velocity.y = random(-5, 5)
        }
    })
    changeVelocityButton.style("cursor", "pointer")
    picture.mouseClicked(() => {
        saveCanvas("bouncers", "png")
    })
    picture.style("cursor", "pointer")
}

function draw() {
    background(200)
    for (var bouncees in bouncers) {
        var bounceeObject = bouncers[bouncees]
        bounceeObject.update()
        
    }
}
