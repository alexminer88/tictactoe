// Command Line tic-tac-toe
let boardState = [['x', 'o', 'x'], ['x', '', 'x'], ['o', 'x', 'x']];
let currentPlayer = 'x';

// function to display board to command line
const displayBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    console.log(boardState[i]);
    console.log('\n');
  }
};

// main looping function to maintain playing game until winner or exited
const playGame = () => {

  let winner = false;

  while (!winner) {
    console.log('hi there');
    // display boardstate
    displayBoard(boardState);
    // await incoming line using readline()
    // valid format should be location you want to place (should not be able to place in a non-empty string location) 
    // console.log('place a piece on the board in the format 0,0 (starting in the upper left corner:');
    let placedPiece = window.prompt('place a piece on the board in the format 0,0 (starting in the upper left corner:');
    placedPieceArray = 1,1;
    // if command is exit, exit program
    // run gameState (for winner)
    winner = updateGameAndCheckWinner(placedPieceArray, currentPlayer)
    // if no winner
    // swap current player
    currentPlayer = swapPlayer(currentPlayer);
  }
  console.log('The winner was: ', currentPlayer, '!');
  resetBoard();
};

const checkValidEntry = (rowCol) => {
  // entry is a row and column to place piece in the form of x, y
  // if yes place in board state
  // if no, re ask for input


}


// check for winner or if board is full
const updateGameAndCheckWinner = (placedPieceLocation, player) => {
  // player will be either 'x' or 'o'
  let x = placedPieceLocation.split(',')[0];
  let y = placedPieceLocation.split(',')[1];
  boardState[x][y] = player;

  // check rows
  let rowMatches = 0;
  for (let j = 0; j < 3; j++) {
    if (player === boardState[x][j]) {
      rowMatches++;
    }
    if (rowMatches === 3) {
      return true;
    }
  }

  // check columns
  let colMatches = 0;
  for (let i = 0; i < 3; i++) {
    if (player === boardState[i][y]) {
      colMatches++;
    }
    if (colMatches === 3) {
      return true;
    }
  }

  // check diagonals
  let diagMain = 0;
  let diagMin = 0;
  for (let k = 0; k < 3; k++) {
    if (player === boardState[k][k]) {
      diagMain++;
    }
    if (player === boardState[2 - k][k]) {
      diagMin++;
    }
    if (diagMain === 3 || diagMin === 3) {
      return true;
    }
  }
  
  // check board is full
  let boardFullness = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardState[i][j] === 'x' || boardState[i][j] === 'o') {
        boardFullness++;
      }
    }
  }
  if (boardFullness === 9) {
		console.log('Game is a draw :(');
		resetGame();
	}
	return false;
};

// reset board
const resetBoard = () => {
  boardState = [['', '', ''], ['', '', ''], ['', '', '']];
};

const swapPlayer = () => {
  return currentPlayer === 'x' ? 'o' : 'x';

};

playGame();