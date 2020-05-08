var roll = document.querySelector("button");
var playerOne = document.querySelector("#player1");
var playerTwo = document.querySelector("#player2");
var h1 = document.querySelector("h1");
var nameOne = playerOne.value;
var nameTwo = playerTwo.value;

playerOne.addEventListener("keyup",function(){
    nameOne = playerOne.value;
});

playerTwo.addEventListener("keyup",function(){
    nameTwo = playerTwo.value;
});

roll.addEventListener("click",function(){
    randomDice();
});

function randomDice(){
    var num1,num2;
        num1 = Math.floor(Math.random()*6 + 1);
        rollDice(num1,0);
        num2 = Math.floor(Math.random()*6 + 1);
        rollDice(num2,1);
        winner(num1,num2);           
}

function rollDice(num,i){
    if(i==false)
    {
        var image = document.querySelector("#dice1");
        image.src = "images/dice" + num + ".png";
    }
    else
    {
        var image = document.querySelector("#dice2");
        image.src = "images/dice" + num + ".png";
    }
}

function winner(num1,num2){
    if(num1>num2)
    {
        if(nameOne == undefined || nameOne  == "")
        {
            h1.textContent = "🚩 Player 1 Wins!"
        }
        else
        h1.textContent ="🚩 " + nameOne + " Wins!";
    }
    else if(num1==num2)
    {
        h1.textContent = "It's a Draw";
    }
    else{
        if(nameTwo == undefined || nameTwo == "")
        {
            h1.textContent = "Player 2 Wins! 🚩";
        }
        else
        {
            h1.textContent = nameTwo + " Wins! 🚩"; 
        }
    }
}