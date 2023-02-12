
let color = ""

function gridBoard(size) {
let container = document.querySelector('.container');
let allContainer = container.querySelectorAll('div');
allContainer.forEach((div) => div.style.backgroundColor = 'white');
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let sizes = size * size;

for (let i = 0; i < sizes; i++) {
    let divs = document.createElement('div');
    divs.addEventListener('mouseover', () => {
        divs.style.backgroundColor = color;
    })
    container.insertAdjacentElement("beforeend", divs);
}
}




gridBoard(24);

function resetButton() {
    let container = document.querySelector('.container');
    let allContainer = container.querySelectorAll('div');
    allContainer.forEach((div) => div.style.backgroundColor = 'white');

}

function changeColor(value) {
    color = value

}