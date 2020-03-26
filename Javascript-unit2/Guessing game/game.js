var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}

else if (guess > secretNumber){
    alert("Too high, guess again!");
}

else {
    alert("Too low, guess again!");
}

