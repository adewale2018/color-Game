let numOfSquares = 9;
let h1 = document.querySelector('h1');
let modeButtons = document.querySelectorAll('.mode');
for(let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener('click', function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numOfSquares = 6 : numOfSquares = 9;
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetBtn.textContent = "New Colors";
}
// easyBtn.addEventListener('click', () => {
//   easyBtn.classList.add('selected');
//   hardBtn.classList.remove('selected');
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor(); 
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener('click', () => {
//   easyBtn.classList.remove('selected');
//   hardBtn.classList.add('selected');
//   numOfSquares = 9;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor(); 
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
// });

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

let colors = generateRandomColors(numOfSquares);

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
  reset();
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
