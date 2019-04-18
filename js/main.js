
let h1 = document.querySelector('h1');

let randomColor = () => {
  //pick a "red", "green" and "blue" from 0 - 255
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let generateRandomColors = (num) => {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push(randomColor()); 
  }
  return arr;
}

let colors = generateRandomColors(9);

let pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#messageDisplay");
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
  colors = generateRandomColors(9);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
})


colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function(){
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct, Hurray!!!";
      resetBtn.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Hoops, Try again!';
    }
  });
}

let changeColors = (color) => {
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}





/*            Logic
  Add click event
  Grab the color of the clicked square
  Compare its color with the pickedColor
*/
