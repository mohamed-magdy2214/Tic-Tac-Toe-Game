let items = document.querySelectorAll('.item');
let itemsHead = document.querySelectorAll('.item h3');
let title = document.querySelector('.title');
let resetBtn = document.querySelector('.reset');

let squares = [];
let turn = 'x';



// itirator to set the turn of x and o
for (let i = 0; i < items.length; i++) {
    
    items[i].addEventListener('click', function(){

        if (itemsHead[i].innerHTML == '') {

            if (turn === 'x'){

                itemsHead[i].innerHTML = 'x';
                turn = 'o';
                title.innerHTML = 'turn of { O }';
            }
            else if (turn === 'o'){
    
                itemsHead[i].innerHTML = 'o';
                turn = 'x';
                title.innerHTML = 'turn of { X }';
            }
        }
        winner()
        
    })
}

// function to declare the winner and reset the game
function displayResult(num1,num2,num3) {

    title.innerHTML = `the winner is ${squares[num1]}`
        items[num1 - 1].style.background = '#000';
        items[num2 - 1].style.background = '#000';
        items[num3 - 1].style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},800);

        setTimeout(function(){location.reload()},3000)
}

// function to detect the winner
function winner() {

    for (let i = 1; i <10; i++) {
        
        squares[i] = document.getElementById('sq' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] &&squares[1] != '' ) {
        
        displayResult(1, 2, 3);
    }
    if (squares[4] == squares[5] && squares[5] == squares[6] &&squares[4] != '' ) {

        displayResult(4, 5, 6);
    }
    if (squares[7] == squares[8] && squares[8] == squares[9] &&squares[7] != '' ) {

        displayResult(7, 8, 9);
    }



    if (squares[1] == squares[4] && squares[4] == squares[7] &&squares[1] != '' ) {
        
        displayResult(1, 4, 7);
    }
    if (squares[2] == squares[5] && squares[5] == squares[8] &&squares[2] != '' ) {

        displayResult(2, 5, 8);
    }
    if (squares[3] == squares[6] && squares[6] == squares[9] &&squares[3] != '' ) {
        
        displayResult(3, 6, 9);
    }



    if (squares[1] == squares[5] && squares[5] == squares[9] &&squares[1] != '' ) {
        
        displayResult(1, 5, 9);
    }
    if (squares[3] == squares[5] && squares[5] == squares[7] &&squares[3] != '' ) {
        
        displayResult(3, 5, 7);
    }
    
}

// reset button
resetBtn.addEventListener('click', function () {

    for (let i = 0; i < itemsHead.length; i++) {
        
        itemsHead[i].innerHTML = '';
    }
  })





