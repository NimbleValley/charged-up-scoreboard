var score = 0;

const title = document.getElementById("title");

const lights = document.getElementsByClassName("lights");

var ok = false;

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
    if (event.key == "-") {
        score--;
    }
    if (score < 0) {
        score = 0;
    }
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
