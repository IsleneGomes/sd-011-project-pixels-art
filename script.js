const colorPallet = document.querySelector('#color-palette');

function createColor(array) {
  for (let i = 0; i < array.length; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = array[i];
    colorPallet.appendChild(color);
  }
}
createColor(['black', 'red', 'blue', 'green']);

function createBoard() {
  const board = document.querySelector('#pixel-board');

  for (let row = 0; row < 5; row += 1) {
    const rowLine = document.createElement('div');
    rowLine.className = 'rowline';
    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rowLine.appendChild(pixel);
    }
    board.appendChild(rowLine);
  }
}
createBoard();

function blackSelected() {
  const black = document.querySelector('.color');
  if (black.style.backgroundColor === 'black') {
    black.classList.add('selected');
  }
}
blackSelected();

function colorSelect() {
  const colorSelection = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelection.length; i += 1) {
    colorSelection[i].addEventListener('click', () => {
      for (let j = 0; j < colorSelection.length; j += 1) {
        colorSelection[j].classList.remove('selected');
      }
      colorSelection[i].classList.add('selected');
    });
  }
}
colorSelect();

function createReset() {
  const pixel = document.querySelectorAll('.pixel');
  const btnReset = document.querySelector('#clear-board');
  btnReset.addEventListener('click', () => {
    for (let cell = 0; cell < pixel.length; cell += 1) {
      if (pixel[cell].style.backgroundColor !== 'white') {
        pixel[cell].style.backgroundColor = 'white';
      }
    }
  });
}
createReset();
