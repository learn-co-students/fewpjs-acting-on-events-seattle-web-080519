// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    // first ensure that the dodger's left edge has not gone past the left edge of its container
    if (left > 0) {
        dodger.style.left = `${left - 10}px`
    }
}

function moveDodgerRight() {
    let increment = dodger.style.left.replace("px", "");
    let left = parseInt(increment, 10);
    
    // first ensure that the dodger's left edge has not gone past the right edge of its container
    if (left < 360) {
        dodger.style.left = `${left + 10}px`
    }
        
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") moveDodgerLeft();
    if (e.key === "ArrowRight") moveDodgerRight();
});