    var player1 = "Player 1"; 
    var player2 = "Player 2"; 
    let startButton = document.getElementById('button');
    let startButton1 = document.getElementById('button1');
    let startButton2 = document.getElementById('btreset');
    var randomNumber1;
    var randomImage1;
    var image1;
    var randomNumber2;
    var randomImage2;
    var image2;
  
    // Function to change the player name 
    function editNames() { 
        player1 = prompt("Change Player1 name"); 
        player2 = prompt("Change player2 name"); 
   
        document.getElementById("player1").innerHTML = player1;
        document.getElementById("player2").innerHTML = player2;
        document.getElementById("button").innerHTML = player1 + "'s Turn!";
        document.getElementById("button1").innerHTML = player2 + "'s Turn!";
    }
editNames();

document.getElementById('btreset').setAttribute("style", "visibility:hidden");

startButton.addEventListener('click', () => {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomImage1 = "images/dice" + randomNumber1 + ".png";
    image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
    document.getElementById("button").disabled = true;

});

startButton1.addEventListener('click', () => {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    randomImage2 = "images/dice" + randomNumber2 + ".png";
    image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML =  player1 +" Wins! 🚩";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = player2+" Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
    document.getElementById("button1").disabled = true;
    document.getElementById('btreset').setAttribute("style", "visibility:visible");

});

startButton2.addEventListener('click', () => {
    window.location.reload();
});

