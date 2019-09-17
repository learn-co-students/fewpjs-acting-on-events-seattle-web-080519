// Your code here
let dodger = document.getElementById("dodger")
document.addEventListener("keydown", function(e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }else if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }
});

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let lef = parseInt(leftNumbers);
    if (lef > 0){
        dodger.style.left = `${lef - 1}px`;
    }
}
function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let righ = parseInt(rightNumbers);
    if (righ < 360){
    dodger.style.left = `${righ + 1}px`;
    }
}