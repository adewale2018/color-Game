let colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 128)",
  "rgb(0, 128, 128)",
  "rgb(128, 0, 128)"
];

let pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#messageDisplay");

colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function(){
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct, Hurray!!!";
      changeColors(clickedColor);
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
