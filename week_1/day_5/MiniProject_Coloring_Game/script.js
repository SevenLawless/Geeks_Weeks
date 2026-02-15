const controlsDiv = document.getElementById('controls');
const canvasDiv = document.getElementById('canvas');

const clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.textContent = 'Clear Canvas';
controlsDiv.appendChild(clearButton);

const colorPalette = document.createElement('div');
colorPalette.id = 'colorPalette';
controlsDiv.appendChild(colorPalette);

const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB', '#A52A2A', '#808080', '#FFFFFF', '#FFD700', '#90EE90', '#87CEEB'];

let selectedColor = colors[0];

colors.forEach((color, index) => {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    if (index === 0) colorBox.classList.add('selected');
    colorBox.addEventListener('click', function() {
        document.querySelectorAll('.color-box').forEach(box => box.classList.remove('selected'));
        colorBox.classList.add('selected');
        selectedColor = color;
    });
    colorPalette.appendChild(colorBox);
});

for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('canvas-square');
    canvasDiv.appendChild(square);
}

let isDrawing = false;

document.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

const squares = document.querySelectorAll('.canvas-square');
squares.forEach(square => {
    square.addEventListener('mousedown', function() {
        square.style.backgroundColor = selectedColor;
    });
    square.addEventListener('mouseover', function() {
        if (isDrawing) square.style.backgroundColor = selectedColor;
    });
});

clearButton.addEventListener('click', () => squares.forEach(square => square.style.backgroundColor = 'white'));