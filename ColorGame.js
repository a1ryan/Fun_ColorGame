var colors = randomSquares(6);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.querySelector("#display");
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = picked;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        // alert("clicked");
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor , picked);
        if(clickedColor === picked){
            msg.textContent = "Correct!!";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "rgb(26, 25, 25)";
            msg.textContent = "Try Again!!";
        }
    })
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  var random =  Math.floor(Math.random() * colors.length); //math.random will give random number btw 0 - 1 (decimal numbers)
   return colors[random];                 //to get int rather than float numbers do Math.floor(Math.random());
                    //to change the range of random function muliply it with required range , Math.random()*6 = random numbers btw 0 to 6
}

function randomSquares(num){
    var arr= [];
    for(var i=0;i<=6;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // rgb(r, g, b);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}