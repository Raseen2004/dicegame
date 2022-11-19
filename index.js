let btn = document.querySelector("button");
btn.addEventListener("click", dice)

function dice() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1; // 1 to 6 for player 1
    let randomNum2 = Math.floor(Math.random() * 6) + 1; // 1 to 6 for player 2

    let randomDiceImg1 = "dice" + randomNum1 + ".png"; // select the random image for player 1
    let randomDiceSource = "images/" + randomDiceImg1; // just try this method

    let randomDiceImg2= "images/dice" + randomNum2 + ".png";
    
    let img1 = document.querySelectorAll("img")[0]; // selecting a img tag 1
    img1.setAttribute("src", randomDiceSource) // set img 1 to random dice image

    let img2 = document.querySelectorAll("img")[1]; // selecting a img tag 2
    img2.setAttribute("src", randomDiceImg2) // set img 2 to random dice image

    if(randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 win!"
    }
    else if(randomNum2 > randomNum1) {
        document.querySelector("h1").innerHTML = "Player 2 win!"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}