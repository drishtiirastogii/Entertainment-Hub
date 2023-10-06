document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("signup");
    openButton.addEventListener("click", function(){
    window.open("../public/Registration/signup.html","_self");
    });
});

/*document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("submit");
    openButton.addEventListener("click", function(){
    window.open("../public/moreGames.html","");
    });
});*/

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("Login");
    openButton.addEventListener("click", function(){
    window.open("../public/Registration/login.html","_self");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("dice-game");
    openButton.addEventListener("click", function(){
    window.open("./dice game/Dice.html","_blank");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("simon-game");
    openButton.addEventListener("click", function(){
    window.open("./Simon Game/simon.html","_blank");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("drums");
    openButton.addEventListener("click", function(){
    window.open("./drum kit/drum.html","_blank");
    });
});
