var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor){
            h1.style.backgroundColor = clickedColor;
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}


function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}