//Create a program that simulates a sketchbook
//The user can choose the number of square per side
//A square will be filled upon being hovered by the mouse

//1. Create a function to create the grill the user will work on(default: 16)
const sketch = document.getElementById('sketch');

function createGrill(sps = 16) {
    let square = document.createElement('div')
    square.className = "square";
    for (let i = 0; i < sps ** 2; i++) {
        square.style.width = `${100/sps}%`
        sketch.appendChild(square.cloneNode(true));
    }
}

createGrill(8)

//2. Create a function that detects when a square is hovered over
const squares = document.getElementsByClassName('square');

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', paint);
    
}

//3. Get from the buttons the color to paint the squares

//4. Function to paint a square
function paint(e) {
    this.style.backgroundColor = "black";
}
//5. Function to erase everything