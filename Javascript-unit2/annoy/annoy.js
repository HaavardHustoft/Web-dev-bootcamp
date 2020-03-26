/* var answer = prompt("Are we there yet?");

while(answer != "yes" && answer != "yeah"){
    answer = prompt("Are we there yet?");
} */


var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1){
    answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!");