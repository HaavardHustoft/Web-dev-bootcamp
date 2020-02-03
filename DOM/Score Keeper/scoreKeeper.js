var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1button = document.querySelector("#p1button");
var p2button = document.querySelector("#p2button");
var resetButton = document.querySelector("#resetButton");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
    
});

p2button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


resetButton.addEventListener("click", function(){
    reset();
});


numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})