var numSquare = 6 ;
var colors = randomSquares(numSquare);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.querySelector("#display");
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".resetButton");
var easybtn = document.querySelector("#easyBtn");
var hardbtn = document.querySelector("#hardBtn");
// var easy = alse;


easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquare = 3;
    colors = randomSquares(numSquare);
    picked = pickColor();
    colorDisplay.textContent = picked;
    for(var i=0;i<squares .length;i++){
        if(colors[i]){
             squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#232323";

})

hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquare = 6;
    colors = randomSquares(numSquare);
    picked = pickColor();
    easy = false;
    colorDisplay.textContent = picked;
    for(var i=0;i<squares .length;i++){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";

})


reset.addEventListener("click",function(){
    //generate new colors
    colors = randomSquares(numSquare);
    //pick random color
    picked = pickColor();
    //change display color
    colorDisplay.textContent = picked;
    //change squares color
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#232323";
})
colorDisplay.textContent = picked;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        // alert("clicked");
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor , picked);
        if(clickedColor === picked){
            msg.textContent = "Correct!!";
            reset.textContent = "Play Again";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
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
    for(var i=0;i<num;i++){
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