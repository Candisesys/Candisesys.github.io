class Bird {
    constructor (x, y, context = ctx) {
        this.x = x;
        this.y = y;
        
        this.context = context;
        this.velocity = {x:0, y:0};
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }


    draw() {
        this.context.save();

        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, Math.PI*2);
        this.context.closePath();
        this.context.fillStyle = "rgba(239, 239, 144, 1)";
        this.context.fill();


        this.context.restore();
    }
}