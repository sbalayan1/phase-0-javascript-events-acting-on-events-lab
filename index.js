// Your code here
//create new variable Dodger by getting via unique id 
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

//change dodger color using style 
dodger.style.backgroundColor = "#800080";
game.style.backgroundColor = 	"#FFFF00";

//add Event Listener to keydown action and record event 


//define function moveDodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = (`${left - 10}px`);
    }
}

//define function moveDodger right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = (`${right + 10}px`);
    }
}

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowRight') {
        console.log(event);
        moveDodgerRight();
    }
});

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowLeft') {
        console.log(event);
        moveDodgerLeft();
    }
});

