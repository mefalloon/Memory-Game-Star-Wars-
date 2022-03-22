//console.log('hey')
// array of cards
const allCards = document.querySelectorAll('.cards');  

function flipCard() {

    this.classList.add('flip');

allCards.forEach(card => card.addEventListener('click', flipCard));
}

console.log(allCards)