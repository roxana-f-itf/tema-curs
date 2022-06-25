let squareClick = document.querySelector('.squareUpAndDown');
let onClick = function() {

    let clickedDiv = document.getElementById('square');
    if(!(clickedDiv.className === 'squareUpAndDown')) {
        clickedDiv.className = 'squareUpAndDown';
    }
    else{
        clickedDiv.className = 'downSquare';
    }
}
squareClick.addEventListener('click', onClick);