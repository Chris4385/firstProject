var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/dice" + randomNumber1 + ".png";
var imageSource2 = "images/dice" + randomNumber2 + ".png"

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);

var header = document.querySelector("h1");
function result()
{
    if (randomNumber1 > randomNumber2)
    {
        header.innerHTML = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2)
    {
        header.innerHTML = "Player 2 wins!";
    }
    else
    {
        header.innerHTML = "Draw!";
    }
}
result();
