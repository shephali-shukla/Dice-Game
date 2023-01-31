//Dice 1:

//Generating Random Number:
var randomNumber = Math.floor(Math.random() * 6) + 1;
//Generating Random Image:
var randomImage = "dice" + randomNumber + ".png";
//Changing Attribute value:
var randomImageSource = "images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


/********************************************************************/

//Dice 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/*******************************************************************/

//Declaring winner:

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerText = "It's a Draw!!";
}

