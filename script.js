function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);

function changeSelectedClass(event) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  const eventTarget = event.target;
  const classColor = document.querySelectorAll('.selected')[0].classList[1];
  if (event.target.classList.length !== 1) {
    eventTarget.classList.remove(event.target.classList[1]);
    eventTarget.className += ' ' + classColor;
  } else {
    eventTarget.className += ' ' + classColor;
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);

document.getElementById('clear-board').addEventListener('click', function() {
  document.querySelectorAll('.pixel');
  for (let index15 = 0, index15 < document.querySelectorAll('.pixel').length; index15 += 1) {
    document.querySelectorAll('.pixel')[index15].classList.remove(targetPixelClass[1]);
  }
})

