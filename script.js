var numSquares=6;
var colors = [];
var pickedColor;
var square=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init()
{
  //mode buttons for easy and hard mode
  setUpModeButtons();
  //set up squares
  setUpSquares();
  reset();
}

function setUpModeButtons()
{
  for(var i=0 ; i<modeButtons.length ; i++)
  {
    modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares=3 : numSquares=6;
    reset();
    });
  }
}

function setUpSquares()
{
  for (var i=0 ; i<square.length ; i++)
  {
    //add click listeners to squres
    square[i].addEventListener("click",function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to picke color
      if(clickedColor === pickedColor)
      {
        messageDisplay.textContent="Correct!!";
        resetButton.textContent="Play again?";
        changeColors(clickedColor);
        h1.style.backgroundColor=clickedColor;
      }
      else
      {
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
      }
    });
  }
}

function reset()
{
  //generate all new colors
  colors=generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor=pickColor();
  //change color display to match picked color
  colorDisplay.textContent=pickedColor;
  resetButton.textContent= "New Colors";
  messageDisplay.textContent="";
  //change colors of the squares on the page
  for(var i=0 ; i<square.length ; i++)
  {
    if(colors[i])
    {
      square[i].style.display="block";
      square[i].style.backgroundColor=colors[i];
    }
    else
    {
        square[i].style.display="none";
    }
  }
  h1.style.backgroundColor="#8cff66";
}

//for the button play again
resetButton.addEventListener("click",function(){
  reset();
});


for (var i=0 ; i<square.length ; i++)
{
  //add click listeners to squres
  square[i].addEventListener("click",function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picke color
    if(clickedColor === pickedColor)
    {
      messageDisplay.textContent="Correct!!";
      resetButton.textContent="Play again?";
      changeColors(clickedColor);
      h1.style.backgroundColor=clickedColor;
    }
    else
    {
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again";
    }
  });
}

function changeColors(color){
  //loop through all square
  for(i=0 ; i<square.length ; i++)
  {
    //change each color to match given color
    square[i].style.backgroundColor=color;
  }
}

function pickColor()
{
  //to pick random color
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num)
{
  //make an array
  var arr=[];
  //repeat num times
  for(var i=0 ; i<num ; i++)
  {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor()
{
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
