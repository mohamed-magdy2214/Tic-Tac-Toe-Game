let items = Array.from(document.querySelectorAll('.item'));
let squares = Array.from(document.querySelectorAll('.item h3'));
let title = document.querySelector('.title');
let resetBtn = document.querySelector('.reset');

let squareText = [];
let turn = 'x';


// fill item by x or o
for (let i = 0; i < items.length; i++) {
    
    items[i].addEventListener('click', function(){

        if (squares[i].innerHTML == '') {

            if (turn === 'x'){

                squares[i].innerHTML = 'x';
                turn = 'o';
                title.innerHTML = 'turn of { O }';
            }
            else if (turn === 'o'){
    
                squares[i].innerHTML = 'o';
                turn = 'x';
                title.innerHTML = 'turn of { X }';
            }
        }
        winner()
    })
}

// function to declare the winner and reset the game
function displayResult(num1,num2,num3) {

    title.innerHTML = `the winner is ${squares[num1].innerHTML}`
        items[num1].style.background = '#000';
        items[num2].style.background = '#000';
        items[num3].style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},800);
        setTimeout(function(){location.reload()},3000);
}

// function to detect the winner
function winner() {


    if (squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML != '' ) {
        
        displayResult(0, 1, 2);
    }
    if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML != '' ) {

        displayResult(3, 4, 5);
    }
    if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML != '' ) {

        displayResult(6, 7, 8);
    }



    if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML && squares[0].innerHTML != '' ) {
        
        displayResult(0, 3, 6);
    }
    if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML != '' ) {

        displayResult(1, 4, 7);
    }
    if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML != '' ) {
        
        displayResult(2, 5, 8);
    }



    if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[0].innerHTML != '' ) {
        
        displayResult(0, 4, 8);
    }
    if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[2].innerHTML != '' ) {
        
        displayResult(2, 4, 6);
    }
    else {

        for (let i = 0; i < squares.length; i++) {
            
            squareText[i] = squares[i].innerHTML;
        }
        
        if (!squareText.includes('')){

            title.innerHTML = 'Tie Game';
            setInterval(function(){title.innerHTML += '.'},800);
            setTimeout(function(){location.reload()},3000);
        }
    }

}


// reset button
resetBtn.addEventListener('click', function () {

    for (let i = 0; i < squares.length; i++) {
        
        squares[i].innerHTML = '';
    }
  })





