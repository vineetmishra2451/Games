//variable declarations
var container = document.getElementsByClassName("container");
var colorBlock=document.getElementsByClassName("colorblock");
var message = document.querySelector("#guess");
var displayRGB = document.getElementById("rgbcolor");
var button = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var h1 = document.getElementsByTagName("h1");
var checker = document.getElementById("colorchecker");
var checker = document.getElementById("checker");

var red = document.getElementById("red").value;
var green = document.getElementById("green").value;
var blue = document.getElementById("blue").value;
var plate = document.querySelector(".colorPlate");
var refresh = document.querySelector("#refresh");

var userSelectedColor;
var colors=[];
var pickedColor;

//Starts the game
reset(6);

//Event Listners for Buttons
button.addEventListener("click",function(){
    unblock();
    for(var i=3;i<6;i++)
      colorBlock[i].style.display = "block";
    if (easy.classList.contains("selected"))
         {
            console.log("here")
            for(var i=3;i<6;i++)
            colorBlock[i].style.display = "none";
             reset(3);
         }  
    else      
         reset(6);
});
easy.addEventListener("click",function(){
    unblock();
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for(var i=3;i<6;i++)
      colorBlock[i].style.display = "none";
    reset(3);
});
hard.addEventListener("click",function(){
    unblock();
    for(var i=3;i<6;i++)
      colorBlock[i].style.display = "block";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    reset(6);
});
checker.addEventListener("click",function(){
    for(var i=0;i<6;i++)
      colorBlock[i].style.display = "none";
      colorchecker.style.display = "block";  
      checkColor();
});

refresh.addEventListener("click",checkColor);


//Function to choose a winning Color
function rightColor(num){
    var i=Math.floor(Math.random() * num);

    pickedColor = colors[i];
}


//  Function to Start the Game
function GameStart(num){
    colorchecker.style.display = "none";
    for(var i=0;i<num;i++)
    {
        colors[i]=colorGenerator();
        colorBlock[i].style.backgroundColor=colors[i];

    //checking if the user selected the right color
    colorBlock[i].addEventListener("click",function(){
        userSelectedColor = this.style.backgroundColor;
        if(userSelectedColor==pickedColor)
        {
            won(num);
        }
        else
        {
            this.style.backgroundColor = "darkgray";
            guess.style.color = "firebrick";
            guess.textContent="Try Again"
        }

    });


    }
    rightColor(num); //function to assign the winning color
    displayRGB.textContent = pickedColor;
    
}

//function to generate random Color
function colorGenerator()
{
    var red = Math.floor(Math.random() * 256 );
    var green = Math.floor(Math.random() * 256 );
    var blue = Math.floor(Math.random() * 256 );
    return "rgb(" + red + ', ' + green + ', ' + blue + ")" ;
}


//Function executed when user guesses the right color
function won(num)
{
    console.log("***won****"+num);
    for(var i=0;i<num;i++)
    {
        colorBlock[i].style.backgroundColor = pickedColor;
        console.log("change done");
    }
    document.querySelector("h1").style.backgroundColor = pickedColor;
    guess.style.color = "green";
    guess.textContent = "🏆Correct!🏆";
    button.textContent = "Play Again?";
      
}

//function to reset
function reset(num){
    plate.style.backgroundColor = "steelblue";

    button.textContent = "New Colors";
    guess.textContent = ""
    console.log("***reset****"+num);
    document.querySelector("h1").style.backgroundColor = "steelblue";
    GameStart(num);
   
}

//function for checking given rgb color
function checkColor(){
    guess.textContent ="";
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    plate = document.querySelector(".colorPlate");    
    plate.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"; 
    
}

function unblock(){
    for(var i=0;i<6;i++)
      colorBlock[i].style.display = "block";
}