let targets = [];
let interval;
let counter = 0;
let score;
let button;
let windowWidth;
let windowHeight;
let started = false;

function setup() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
  	createCanvas(windowWidth, windowHeight);	

	button = createButton('start');
	score = createP(counter);
	score.hide();
}

function timeIt() {
	let x = random(width);
	let y = random(height);
	let target = new Target(x, y, 35);
	targets.push(target);
}

function mouseClicked() {
	if (started === false) {
		startGame();
	} else {
        let found = false;
        for (let i = targets.length - 1; i >= 0; i--) {
            if (targets[i].contains(mouseX, mouseY)) {
                found = true;
                targets.splice(i, 1);
                counter = counter + 1;
                break;
            }
        }
        if (!found) {
            counter = counter - 10;
        }
    }
}

function startGame() {
    counter = 0;
    started = true;
	interval = setInterval(timeIt, 500);
	button.hide();
	score.show();
}

function stopGame() {
	location.reload();
}

function draw() {
	background(0, 0, 255);
	if (counter >= 0 && targets.length >= 0 && targets.length <= 6) {
		for (let i = 0; i < targets.length; i++) {
			targets[i].show();
		}
	} else {
		stopGame();
	}
	score.html(counter);
} 
