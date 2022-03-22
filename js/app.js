const allCards = document.querySelectorAll('.cards');  

function flipCard() {
    this.classList.toggle('flip')
}

//loop through with a for each /attach a listener/ onclick
allCards.forEach(card => card.addEventListener('click', flipCard));

// the card needs to wait for one card to be clicked

allCards.forEach(card => card.addEventListener('click', flipCard));


