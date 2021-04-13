const randomC1 = document.getElementById('randomColor1');
const randomC2 = document.getElementById('randomColor2');
const randomC3 = document.getElementById('randomColor3');
const buttonColors = document.getElementById('paletaButton');

function randomRGB() {
  const random = parseInt((Math.random() * 255), 10);
  const random1 = parseInt((Math.random() * 255), 10);
  const random2 = parseInt((Math.random() * 255), 10);
  const rgb = `rgb(${random}, ${random1}, ${random2})`;
  return rgb;
}

function randomColors() {
  const rB1 = randomRGB();
  const rB2 = randomRGB();
  const rB3 = randomRGB();
  if (rB1 !== rB2 || rB2 !== rB3 || rB3 !== rB1) {
    randomC1.style.backgroundColor = rB1;
    randomC2.style.backgroundColor = rB2;
    randomC3.style.backgroundColor = rB3;
  }
}
buttonColors.addEventListener('click', randomColors);

const pBlock = document.querySelector('#pixel-board');
function creatBlock(numbers) {
  createColons(numbers);
  createLines(numbers);
}
function createColons(colonsNumber) {
  for (let index = 0; index < colonsNumber; index += 1) {
    const colon = document.createElement('div');
    colon.className = 'colon';
    pBlock.appendChild(colon);
  }
}

const pColons = document.getElementsByClassName('colon');
function createLines(linesNumber) {
  for (let index = 0; index < pColons.length; index += 1) {
    const element = pColons[index];
    for (let index2 = 0; index2 < linesNumber; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      element.appendChild(pixel);
    }
  }
}

const pixeis = document.getElementsByClassName('pixel');
function pixelBackground(color) {
  for (let index = 0; index < pixeis.length; index += 1) {
    const pixelIndex = pixeis[index];
    pixelIndex.style.backgroundColor = color;
  }
}


window.onload = function () {
  randomColors();
  creatBlock(5);
  pixelBackground('white');
};
