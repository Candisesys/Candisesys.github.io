
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let assets = [new Audio("icq-uh-oh.mp3"), new Audio("oh-no.mp3"), new Audio("type.wav")];
let initialBirdSpeed = 0.75;

for (let loadedAssets = 0; loadedAssets < assets.length; loadedAssets++) {
    let asset = assets[loadedAssets];
    asset.addEventListener("loadeddata", function() {
        console.log(asset.volume);
        if (loadedAssets == assets.length - 1) {
            draw();
        }
    })    
}


canvas.width = 300;
canvas.height = 500;

let bird = new Bird(canvas.width/2, canvas.height/2);
let word = words[Math.floor(Math.random() * (words.length - 1))];
let keyStrokes = [];
let wins = 0;
bird.velocity.y = initialBirdSpeed;

function regenWord() {
    keyStrokes = [];
    keyIndex = 0;
    word = words[Math.floor(Math.random() * (words.length - 1))];
}

function drawLetter(x, y, letter, correct, size) {
    ctx.save();
    ctx.translate(x, y)
    if (!correct) {
        ctx.fillStyle = "rgba(51, 51, 51, 0.15)";
    } else {
        ctx.fillStyle = "rgba(178, 255, 178, 0.51)";
    }
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.font = `${size/1.5}px Arial`;
    ctx.fillText(letter, size/4, size/1.5);
    ctx.restore();
}

function drawWord(x, y, size, gap = 5, word = "hi", correctArray = [true, true]) {
    for (let i = 0; i < word.length; i++) {
        let xPosition = x + ((size * i) + (gap* i));
        drawLetter(xPosition, y, word.toUpperCase()[i], correctArray[i], size);
    }
}

function compareWords(word1 = "", word2 = "") {
    let length = Math.max(word1.length, word2.length);
    let compArray = [];
    for (let i = 0; i < length; i++) {
        if(word1[i] && word2[i]) {
            if (word1[i] == word2[i]) {
                compArray.push(true);
            } else {
                compArray.push(false);
            }
        } else {
            compArray.push(false);
        }
    }
    return compArray;
}

let keyIndex = 0;

document.addEventListener("keyup", function(e) {
    let asciiCode = e.key.toLowerCase().charCodeAt(0);
    if (e.key == "Backspace") {
        keyStrokes = [];
        keyIndex = 0;
        console.log(keyStrokes.length, "delete");
        // exp output: 0, delete
    }
    if (e.key.length == 1 && asciiCode > 96 && asciiCode < 123) {
        keyStrokes.push(e.key.toLowerCase());
        keyIndex++;
        let typedWord = keyStrokes.join("");

        if (typedWord[typedWord.length - 1] != word[keyIndex-1]) {
            let clonedAudio = assets[0].cloneNode();
            clonedAudio.volume = 0.5;
            clonedAudio.play();
            keyStrokes = [];
            keyIndex = 0;
        } else {
            let pingSound = assets[2].cloneNode();
            pingSound.volume = 0.5;
            pingSound.play();
        }

        if (typedWord == word) {
            wins++;
            bird.velocity.y *= -1;
            bird.velocity.y += (0.25 * (bird.velocity.y/Math.abs(bird.velocity.y)));
            regenWord();
        }
    }
});

function draw() {

    if (bird.y < -10 || bird.y > canvas.height + 10) {
        bird.y = canvas.height/2;
        regenWord();
        wins = 0;
        bird.velocity.y = initialBirdSpeed;
        assets[1].volume = 0.5;
        assets[1].play();
    }

    bird.update();

    ctx.fillStyle = "rgb(171, 171, 171)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.font = "96px Arial";
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillText(wins, canvas.width/2-(24 * wins.toString().length), canvas.height/2+12);
    ctx.restore();
    
    bird.draw();

    drawWord(60, 20, 30, 5, word, compareWords(keyStrokes.join(""), word));
    

    requestAnimationFrame(draw);
}
