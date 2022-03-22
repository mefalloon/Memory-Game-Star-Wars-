const allCards = document.querySelectorAll('.cards');

let turnedCard = false;
let cardA;
let cardB;

function flipcard() {
    this.classList.add('flip');
    if(!turnedCard){
        turnedCard = true;
        cardA = this;
    } else {
        turnedCard = false;
        cardB = this;
    
if (cardA.dataset.framework === 
    cardB.dataset.framework) {

        cardA.removeEventListener('click', flipcard);
        cardB.removeEventListener('click', flipcard);
          
console.log('A MATCH!')

}

       // console.log(turnedCard, cardA);
      // console.log({cardA, cardB});
      //console.log(cardA.dataset.framework);
     // console.log(cardB.dataset.framework);
    }
}
allCards.forEach(card => card.addEventListener('click', flipcard));


