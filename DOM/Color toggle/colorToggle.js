var button = document.querySelector("button");

/* var isClicked = false;


button.addEventListener("click", function(){
    if (!isClicked){
        document.body.style.background = "red";
    }

    else{
        document.body.style.background = "white";
    }
    
    isClicked = !isClicked;
}); */



button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});