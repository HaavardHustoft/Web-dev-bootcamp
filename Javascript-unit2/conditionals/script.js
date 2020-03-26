age = Number(prompt("How old are you?"));
if (age < 0){
    console.log("Error, age cannot be negative");
}
else if (age === 21){
    console.log("Happy birthday!");
}


if ((age % 2) === 1){
    console.log("Your age is odd!");
}