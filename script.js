// Req 2 e 3
const black = document.querySelectorAll('.color')[0];
black.style.backgroundColor = 'black';
const red = document.querySelectorAll('.color')[1];
red.style.backgroundColor = 'red';
const green = document.querySelectorAll('.color')[2];
green.style.backgroundColor = 'green';
const blue = document.querySelectorAll('.color')[3];
blue.style.backgroundColor = 'blue';
// Req 4 e 5
const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
  const pixelRow = document.createElement('div');
  pixelRow.className = 'pixelRow';
  pixelBoard.appendChild(pixelRow);

  for (let j = 0; j < 5; j += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelRow.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}
// Req 6 e 7
const paletaCores = document.querySelector('#color-palette');
function selectedColor() {
  paletaCores.addEventListener('click', (event) => {
    const cor = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      cor.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectedColor();
// Req 8
pixelBoard.addEventListener('click', (event) => {
  const actualColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const evTarget = event.target;
    evTarget.style.backgroundColor = actualColor;
  }
});
// Req 9
const clearButton = document.getElementById('clear-board');
clearButton.innerText = 'Limpar';
clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
