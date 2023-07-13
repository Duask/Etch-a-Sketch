//Create a program that simulates a sketchbook
//The user can choose the number of square per side
//A square will be filled upon being hovered by the mouse

//1. Create a function to create the grill the user will work on(default: 16)
const sketch = document.getElementById('sketch');

function createGrill(sps = 16) {
    if (typeof sps != 'number'){
        Number (sps);
    }

    if (sps > 100){
        return
    }
    sketch.textContent = '';
    let square = document.createElement('div')
    square.className = "square";
    for (let i = 0; i < sps ** 2; i++) {
        square.style.width = `${100/sps}%`
        sketch.appendChild(square.cloneNode(true));
    }
    detectHover()
}


//2. Create a function that detects when a square is hovered over

function detectHover() {
    const squares = document.getElementsByClassName('square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', paint);
    }
}


//3. Get from the buttons the color to paint the squares
const colorBtn = document.getElementsByClassName('color-change');
let color = '';
for (let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener('click', changeColor);
}

function changeColor(e) {
    console.log(e.target.innerText);
    color =  e.target.innerText ;

}

function randomColor() {
    return Math.floor(Math.random() * 256)
}


//4. Function to paint a square
function paint(e) {
    if (color == 'Rainbow'){
        this.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    } else if (color == "Darkening"){
        
        e.target.style.backgroundColor
        //this.style.backgroundColor = "black";
    } else {
        this.style.backgroundColor = "rgb(0,0,0)";
    }
    
}
//5. Function to erase everything



//6. Function to set the number of square per side
const sidesBtn = document.getElementById('res');

sidesBtn.addEventListener('click', changeRes)

function changeRes() {
    createGrill(prompt('Set the number of squares per side (max: 100):'))
}

createGrill();