let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

//HOME
function inc1Home(){
    homeScore.innerText = Number(homeScore.innerText) + 1;
}
function inc2Home(){
    homeScore.innerText = Number(homeScore.innerText) + 2;
}
function inc3Home(){
    homeScore.innerText = Number(homeScore.innerText) + 3;
}

//GUEST
function inc1Guest(){
    guestScore.innerText = Number(guestScore.innerText) + 1;
}
function inc2Guest(){
    guestScore.innerText = Number(guestScore.innerText) + 2;
}
function inc3Guest(){
    guestScore.innerText = Number(guestScore.innerText) + 3;
}

//new game
function restart(){
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}
//console.log(homeScore);
