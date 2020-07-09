var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(205, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 200)"
]
var squares = document.querySelectorAll(".square");
var picked = colors[2];
var colorDisplay = document.querySelector("#display");

colorDisplay.textContent = picked;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        // alert("clicked");
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === picked){
            alert("Correct");
        }
        // else{
        //     alert("Wrong");
        // }
    })
}