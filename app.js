var board = document.getElementById('board');
var squares = document.getElementsByClassName('section');

var winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var Game = function () {
  this.obj = {};
  this.player = 'X';
  this.counter = 0;
};

var game = new Game();

function newGame () {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  game = new Game();
}


function winner (player) {
  winningCombos.forEach(function (el) {
    if (game.obj[el[0]] === player && game.obj[el[1]] === player && game.obj[el[2]] === player) {
      this.alert('Player ' + player + ' wins!')
      newGame();
    } else if (game.counter === 9) {
      this.alert('It\'s a tie!');
      newGame();
    }
  })
}

Game.prototype.move = function (e) {
  var player = game.player;

  if (e.target.dataset.id && e.target.innerHTML === '') {
    game.counter++;
    if (player === 'O') e.target.style.color = '#fb2a59';
    if (player === 'X') e.target.style.color = '#005273';
    game.obj[e.target.dataset.id] = player;
    e.target.innerHTML = player;
    winner(player);
    game.player = player === 'O' ? 'X' : 'O'
  }
};

board.addEventListener('click', game.move);
