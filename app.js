var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var output = document.getElementsByClassName('p')

var X = 'X';
var O = 'O';
var counter = 0;

function writeMove(e) {
  if (e.target.innerHTML === '') {
    if (counter %2 === 0 || counter === 0) {
      e.target.innerHTML = X;
      counter++;
      winner();
    } else {
      e.target.innerHTML = O;
      counter++;
      winner();
    }
  } else {
    alert('That spot is taken!');
  }
}

function winner () {
  if ((one.innerHTML === X && two.innerHTML === X && three.innerHTML === X) ||
  (four.innerHTML === X && five.innerHTML === X && six.innerHTML === X) ||
  (seven.innerHTML === X && eight.innerHTML === X && nine.innerHTML === X) ||
  (one.innerHTML === X && four.innerHTML === X && seven.innerHTML === X) ||
  (two.innerHTML === X && five.innerHTML === X && eight.innerHTML === X) ||
  (three.innerHTML === X && six.innerHTML === X && nine.innerHTML === X) ||
  (one.innerHTML === X && five.innerHTML === X && nine.innerHTML === X) ||
  (three.innerHTML === X && five.innerHTML === X && seven.innerHTML === X)) {
    alert ('Player 1 wins!');
    window.location.reload();
  }  else if
    ((one.innerHTML === O && two.innerHTML === O && three.innerHTML === O) ||
    (four.innerHTML === O && five.innerHTML === O && six.innerHTML === O) ||
    (seven.innerHTML === O && eight.innerHTML === O && nine.innerHTML === O) ||
    (one.innerHTML === O && four.innerHTML === O && seven.innerHTML === O) ||
    (two.innerHTML === O && five.innerHTML === O && eight.innerHTML === O) ||
    (three.innerHTML === O && six.innerHTML === O && nine.innerHTML === O) ||
    (one.innerHTML === O && five.innerHTML === O && nine.innerHTML === O) ||
    (three.innerHTML === O && five.innerHTML === O && seven.innerHTML === O)) {
      alert ('Player 2 wins!');
      window.location.reload();
  } else if
    (counter >= 9)  {
    alert('It\'s a tie');
    window.location.reload();
  }
}

one.addEventListener('click', writeMove);
two.addEventListener('click', writeMove);
three.addEventListener('click', writeMove);
four.addEventListener('click', writeMove);
five.addEventListener('click', writeMove);
six.addEventListener('click', writeMove);
seven.addEventListener('click', writeMove);
eight.addEventListener('click', writeMove);
nine.addEventListener('click', writeMove);
