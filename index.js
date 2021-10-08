const dodger = document.querySelector ('#dodger')
console.dir(dodger);



document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }  
})


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }  
})


function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}

function moveDodgerLeft () {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}




