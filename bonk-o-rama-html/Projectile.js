class Projectile {
    constructor (x, y) {
        this.x = x
        this.y = y
        
        this.size = random(25, 30)
        this.color = {r: random(255), g: random(255), b: random(255)}
        this.velocity = {x:0, y:0}
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x > width || this.x < 0) {
            this.velocity.x *= -1;
            this.bounce();
        }
        
        if (this.y > height || this.y < 0) {
            this.velocity.y *= -1;
            this.bounce();
        }
        push()
        fill(this.color.r, this.color.g, this.color.b)
        circle(this.x, this.y, this.size);
        pop()
    }

    bounce() {

    }
}