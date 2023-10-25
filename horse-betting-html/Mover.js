var movers = []
class Mover {
    constructor(x, y, number = 0) {
        this.x = x
        this.y = y
        movers.push(this)
        this.color = {r: floor(random(255)), b: floor(random(255)), g: floor(random(255))}
        this.number = number
    }

    forward(value) {
        this.x += value
    }

    update() {
        this.forward(random(1, 5))
        push()
        fill(this.color.r, this.color.g, this.color.b)
        circle(this.x, this.y, 20)
        pop()
        text(this.number, this.x - 5, this.y + 5)
    }
}