//console.log('hey')
// array of cards
const allCards = document.querySelectorAll('.cards');  
//loop through with a for each /attach a listener/ onclick
function flipCard() {
    this.classList.toogle('flip');
}
allCards.forEach(card => card.addEventListener('click', flipCard));

//console.log(allCards);







