const addTitle = document.createElement('h1');
addTitle.id = 'title';
addTitle.innerHTML = 'Paleta de Cores';
document.body.appendChild(addTitle);

function createPaletteDiv () {
  const addColorPalette = document.createElement('div');
  addColorPalette.id = 'color-palette';
  document.body.appendChild(addColorPalette);
  addColorPalette.style.backgroundColor = 'rgb(30, 116, 119)';
}
createPaletteDiv();

function createBoxesDiv () {
  const selectPalette = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDivs = document.createElement('div');
    selectPalette.appendChild(createDivs);
    createDivs.classList.add('color');
  }
}
createBoxesDiv();

function addColor () {
  const arrayOfColors = ['black', 'blue', 'purple', 'violet'];
  const selectDivs = document.querySelectorAll('.color');
  selectDivs.forEach((box, index) => {
    const div = box; div.style.backgroundColor = arrayOfColors[index];
  });
}
addColor();
