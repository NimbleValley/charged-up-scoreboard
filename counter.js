var score = 0;

const title = document.getElementById("title");
const lights = document.getElementsByClassName("lights");
const root = document.querySelector(':root');

var ok = false;

const blueBackground = "rgb(0, 30, 179)";
const blueFancy = "rgb(27, 88, 255)";
const redBackground = "rgb(179, 0, 0)";
const redFancy = "rgb(255, 27, 27)";
const orangeBackground = "rgb(137, 71, 0)";
const orangeFancy = "rgb(196, 97, 10)";

var buzzer = new Audio('sounds/buzzer.wav');
var bzzbzzbzz = new Audio('sounds/bzzbzzbzz.wav');
var click = new Audio('sounds/click.mp3');
var woo = new Audio("sounds/woowooaa.wav");

document.addEventListener('keypress', function (event) {
    if (event.key == "q") {
        score += 5;
    }
    if (event.key == "a") {
        score += 3;
    }
    if (event.key == "z") {
        score += 2;
    }
    if (event.key == "1") {
        score++;
    }
    if (event.key == "0") {
        score = 0;
    }
    if (event.key == "5") {
        score += 5;
    }
    if (event.key == "l") {
        score += 5;
    }
    if (event.key == "-") {
        score--;
    }
    if (event.key == "?") {
        score=3197;
    }

    if(event.key == "n") {
        bzzbzzbzz.play();
        return;
    }

    if(event.key == "m") {
        buzzer.play();
        return;
    }

    if(event.key == "k") {
        woo.play();
        return;
    }

    if (score < 0) {
        score = 0;
    }

    if (event.key == "b") {
        switchBlue();
    }
    if (event.key == "r") {
        switchRed();
    }
    if (event.key == "o") {
        switchOrange();
    }

    click.play();

    updateScore();
});

function updateScore() {
    title.innerText = "" + score;
    if (ok) {
        for (var i = 0; i < lights.length; i++) {
            lights[i].style.animation = "flash 0.5s linear";
        }
    } else {
        for (var i = 0; i < lights.length; i++) {
            lights[i].style.animation = "flash1 0.5s linear";
        }
    }
    ok = !ok;
}

function switchBlue() {
    root.style.setProperty("--background-color", blueBackground);
    root.style.setProperty("--fancy-color", blueFancy);
}

function switchRed() {
    root.style.setProperty("--background-color", redBackground);
    root.style.setProperty("--fancy-color", redFancy);
}

function switchOrange() {
    root.style.setProperty("--background-color", orangeBackground);
    root.style.setProperty("--fancy-color", orangeFancy);
}