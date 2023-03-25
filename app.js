let color = "";
let click = true

function setSize(size) {
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size

for(let i = 0; i < amount; i++){
    let div = document.createElement('div')
    div.addEventListener('mouseover', changeColor)
    container.insertAdjacentElement('beforeend', div)
}
}

setSize(32)

function changeSize(change){
    if(change > 5 &&  change < 100){
        setSize(change)
    }
    else{
        alert('Pick a number between 5 and 100')
    }
}



function resetBoard(){
    let container = document.querySelector('.container');
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}

function changeColor(){
    if(click){
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }  else{
        this.style.backgroundColor = color;
    }
}
}

function setColor(choice){
    color = choice;
}

document.querySelector('body').addEventListener('click', () =>{
    click = !click
})