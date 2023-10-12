var bouncers = []
class Bouncer  {
    constructor(x, y, size, colorRGB = [255, 255, 255]) {
        this.x = x
        this.y = y
        this.size = size
        this.velocity = {
            x:0,
            y:0
        }
        this.color = {
            r: colorRGB[0],
            g: colorRGB[1],
            b: colorRGB[2],
            a: 255
        }
        bouncers.push(this)
    }
    update() {
        // Logic
        this.x += this.velocity.x
        this.y += this.velocity.y
        if (this.x > width - this.size || this.x < 0) {
            this.velocity.x *= -1
        }
        if (this.y > height - this.size || this.y < 0) {
            this.velocity.y *= -1
        }
        // Display
        push()
        fill(this.color.r, this.color.g, this.color.b, this.color.a)
        strokeWeight(0)
        rect(this.x, this.y, this.size, this.size)
        pop()
    }

    remove() {
        var thisIndex = bouncers.indexOf(this)
        bouncers.splice(thisIndex, 1)
    }
}