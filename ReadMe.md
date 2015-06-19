##Objectives

Implement a fully functioning tic-tac-toe board in JavaScript and CSS that can be playable by two people at the same computer. When a winning move is played, raise an alert that displays the winning player in the modal. After clicking OK, a new game should start. When a game move is made that casts the game to a draw, raise an alert that displays "Draw", and resets the game after clicking OK. You will use CSS and JavaScript to make this happen.

Building a tic-tac-toe in CSS in JavaScript can be done in a series of steps.

1. Build a tic-tac-toe board using what we've learned about the Box Model. It may be helpful to have 9 separate elements that are arranged to display the board and can be selected individually in JavaScript. As a result, these boxes should have unique values. One way to do this would be to set data-attributes
2. In your javascript store a list of all the possible combinations of values that would produce a winning move. There are 8 possible winning combinations. A group across the top row, the middle row, bottom row, left column, middle column, right column, and both ways diagonally are valid winning combinations.
3. When a user clicks one of the boxes on the board, it should display a large "X" inside of the box. The next time someone clicks a box, it should display a large "O" in the box.
4. "X"s and "O"s should continue to alternate until the end of the game is reached.
5. Additionally, when a user clicks a box, it should store the clicked value in a list with previously stored values. It is likely that you will have two lists of clicked boxes, one for Player 1, and one for Player 2.
6. If either list contains a winning combination of values, raise the alert with "Player 1", or "Player 2", depending on who won.
7. When there are no more boxes to click, or when 9 moves have been made, raise an alert that the game was a "Draw".
8. After clicking "OK" for either alert, the game should reset.

In completing this challenge, you'll be touching on a number of key HTML/CSS and JavaScript fundamentals. As you move through the program, you should be able to identify which part of the critical path you are currently on:

 - CSS Box Model
 - CSS Floats/Grids
 - JavaScript Click Events
 - Javascript Arrays
 - Javascript Conditional Statements
