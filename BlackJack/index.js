let player = {
    name: "Player 1",
    chips: 200
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 + 1);
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    }
    return randomNumber;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    if (sum>21 && firstCard === 11){
        firstCard = 1;
        cards[0] = 1;
        sum -= 10;
    } if (sum>21 && secondCard === 11){
        secondCard = 1;
        cards[1] = 1;
        sum -= 10;
    }
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0];
    for (let i = 1; i < cards.length; i++) {
        cardsEl.textContent += ", " + cards[i];
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive && !(hasBlackJack)) {
        let card = getRandomCard();
        sum += card;
        if (sum>21 && card === 11){
            card = 1;
            sum -= 10;
        }
        cards.push(card);
        renderGame();        
    }
}
